import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Results from './components/Screens/Results/Results';
import Profiles from './components/Screens/Profiles/Profiles';
import About from './components/Screens/About/About';
import Contact from './components/Screens/Contact/Contact';
import { Outlet, Route, Routes } from "react-router-dom";
import Admin from './components/Admin/Admin';
import Footer from './components/Footer/Footer';
import Print from './components/Admin/AdminComponents/Print';

export default function App(props) {
  return (
    <div className="App">
      <div className='content-wrap'>
        <Routes>
          <Route path='/' element={<RootLayout />}>
            <Route index element={<Hero />} />
            <Route path='/results' element={<Results />} />
            <Route path='/profiles' element={<Profiles />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
          <Route path='/admin/*' element={<AdminLayout />}>
            <Route index element={<Admin />} />
            <Route path='print' element={<Print />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
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
      <Footer />
    </>
  );
};

const AdminLayout = () => {
  return (
    <>
      <div className='content'>
        <Outlet />
      </div>
    </>
  );
};

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          height: '100%',
          width: '100%',
          padding: '6rem 1rem 1rem',
          display: 'grid',
          placeItems: 'center',
          fontWeight: 'bolder'
        }}>
        <h2>404 - Page Not Found</h2>
      </div>
      {/* Add your custom error page content here */}
    </>
  );
};
