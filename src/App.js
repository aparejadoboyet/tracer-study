import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Results from './components/Screens/Results/Results';
import Profiles from './components/Screens/Profiles/Profiles';
import Network from './components/Screens/Network/Network';
import About from './components/Screens/About/About';
import Contact from './components/Screens/Contact/Contact';
import { Outlet, Route, Routes } from "react-router-dom";
import Admin from './components/Admin/Admin';
import Footer from './components/Footer/Footer';

export default function App(props) {

  return (
    <div className="App">
      <div className='content-wrap'>
        <Routes>
          <Route path='/' element={<RootLayout />}>
            <Route index element={<Hero />} />
            <Route path='/results' element={<Results />} />
            <Route path='/profiles' element={<Profiles />} />
            <Route path='/network' element={<Network />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<Admin />} />
          </Route>

          <Route path='*' element={<NotFound />} />
          
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className='content'>
        <Outlet />
      </div>
    </>
  )
}

const AdminLayout = () => {
  return (
    <>
      <div className='content'>
        <Outlet />
      </div>
    </>
  )
}

const NotFound = () => {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      {/* Add your custom error page content here */}
    </>
  )
}
