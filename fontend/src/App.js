import React from 'react';
import { Routes, Route } from "react-router-dom"


//import components
import NotFound from './views/notfound/NotFound';
import Home from './views/landing/Landing';
import Login from './views/login/Login';
import Register from './views/register/Register';
import Profile from './views/profile/Profile';
// import VendorProfile from './views/profile/VendorProfile';
// import DispatcherProfile from './views/profile/DispatcherProfile';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import SellerDash from './views/sellerDash/SellerDash';

function App() {

  //public folder
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;






  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route exact path="/" element={ <Home pf={ pf } /> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/:username" element={ <Profile /> } />
        <Route path="/seller" element={ <SellerDash pf={ pf }/> } />
        <Route path="*" element={ <NotFound/> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
