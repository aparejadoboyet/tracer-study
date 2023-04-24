import React, { useEffect, useState } from 'react'
import './Admin.css'
import { Auth } from './Auth/Auth'
import { dbFirestore, auth } from '../../firebase'
import { 
        getDocs,
        collection,
        addDoc,
        deleteDoc,
        doc,
        updateDoc
      } from 'firebase/firestore'

const Admin = () => {

const [alumni, setAlumni] = useState([]);
const alumniRef = collection(dbFirestore, 'alumni');

const [newAlumniFname, setNewALumniFname] = useState('');
const [newAlumniLname, setNewALumniLname] = useState('');const [newAge, setNewAge] = useState(0);

//UPDATE DATA PLACEHOLDER
const [updatedFname, setUpdateFname] = useState('')
const [updatedLname, setUpdateLname] = useState('')
const [updatedAge, setUpdateAge] = useState(0)

// User profile data
const [userProfileData, setUserProfileData] = useState(null);

//CREATE DATA IN FIREBASE
  const createData = async () => {
    try{
      await addDoc(
        alumniRef,
        {
          ['First Name']: newAlumniFname,
          ['Last Name']: newAlumniLname,
          Age: newAge,
          userId: auth?.currentUser?.uid
        })
      }catch(error){
        console.log(error)
      }
  }

//DELETE DATA
const deleteData = async (id) => {
  try {
    const dataDoc = doc(dbFirestore,'alumni',id);
  await deleteDoc(dataDoc);
  } catch (error) {
    console.log(error)
  }
}

//UPDATE DATA
const updateData = async (id) => {
  try {
    const dataDoc = doc(dbFirestore,'alumni',id);
  await updateDoc(dataDoc,
    {
      ['First Name']: updatedFname,
      ['Last Name']: updatedLname,
      Age: updatedAge
    }
    );
  } catch (error) {
    console.log(error)
  }
}

//GET DATA FROM FIRESTORE
useEffect(()=>{
  const showAlumni = async () => {
    try {
      const data = await getDocs(alumniRef);
      const filteredData = data.docs.map((doc)=>({
        id: doc.id, ...doc.data()
      }))
      setAlumni(filteredData);
    } catch (error) {
      console.error(error)
    }
  }

// Get user profile data on component mount
const currentUser = auth.currentUser;
if (currentUser) {
  const { displayName, photoURL } = currentUser;
  setUserProfileData({ displayName, photoURL });
}

// console.log(currentUser.displayName);
  
showAlumni();

},[])


  return (
    <div className='admin'>

      <div className="userInfo">

        <div className="userDetails">
          {userProfileData && (
            <p>Welcome!<br/>{userProfileData.displayName}</p>
          )}
        </div>

        <div className="userImg">
          {userProfileData && (
            <img src={userProfileData.photoURL} alt='Profile' />
          )}
        </div>
        
      </div>

      <div className="container">
        <Auth />
      </div>

      <div className="create-user">
        <input type='text' placeholder='First Name'onChange={(e)=>setNewALumniFname(e.target.value)}/>
        <input type='text' placeholder='Last Name'onChange={(e)=>setNewALumniLname(e.target.value)}/>
        <input type='number' placeholder='Age'onChange={(e)=>setNewAge(Number(e.target.value))}/>
        <button onClick={createData}>Create Data</button>
      </div>

      <div className="content">
        {alumni.map((alumnus)=>(

          <div key={alumnus.id}>
            <h4 >{alumnus['First Name']} {alumnus['Last Name']}</h4>
            <p>Age: {alumnus.Age}</p>
             <button onClick={()=>deleteData(alumnus.id)}>Delete</button>
             <input type="text" placeholder='Change First Name' onChange={(e)=>setUpdateFname(e.target.value)}/>
             <input type="text" placeholder='Change Last Name' onChange={(e)=>setUpdateLname(e.target.value)}/>
             <input type="number" placeholder='Change Age' onChange={(e)=>setUpdateAge(Number(e.target.value))} />
             <button onClick={()=>updateData(alumnus.id)}>Update</button>
          </div>

        ))}
      </div>

    </div>
  )
}

export default Admin