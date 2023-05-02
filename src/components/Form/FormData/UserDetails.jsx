import React from 'react'

const UserDetails = () => {
  return (
    <div className="userDetails">
      <form action="#">

        <div className="fname field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" placeholder='Enter First Name' />
        </div>

        <div className="lname field">
          <label htmlFor="surname">Surname</label>
          <input type="text" name="surname" id="surname" placeholder='Enter Surname' />
        </div>

        <div className="age field">
          <label htmlFor="age">Age</label>
          <input type="number" name="age" id="age" />
        </div>

        <div className="status field">
          <label>Civil Status:
            <label htmlFor="single">Single</label>
            <input type="radio" name="status" id="single" />
            <label htmlFor="married">Married</label>
            <input type="radio" name="status" id="married" />
            <label htmlFor="widowed">Widowed</label>
            <input type="radio" name="status" id="widowed" />
          </label>
        </div>

      </form>
    </div>
  )
}

export default UserDetails