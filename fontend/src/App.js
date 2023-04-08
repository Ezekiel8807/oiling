import React from 'react';
import { Routes, Route } from "react-router-dom"


//import components
import Home from './views/landing/Landing';
import Login from './views/login/Login';
import Register from './views/register/Register';
import UserProfile from './views/profile/UserProfile';
import VendorProfile from './views/profile/VendorProfile';
import DispatcherProfile from './views/profile/DispatcherProfile';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/:user" element={ <UserProfile/> } />
        <Route path="/:vendor" element={ <VendorProfile/> } />
        <Route path="/:dispatcher" element={ <DispatcherProfile/> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
