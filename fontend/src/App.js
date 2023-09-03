// import { useState } from 'react';
import { Routes, Route } from "react-router-dom"

//mesages notifier
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

  // const [userData, setUserData] = useState({});
  // const [isUser, setIsUser] = useState(false);

  //public folder
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;

  // useEffect(() => {
  //   setIsUser();
  
  // }, [])
  
  // server error messsages
  const serverSuccess = (msg) => toast.success(msg);
  const serverError = ( msg ) => toast.error(msg);
  

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Home pf={ pf } /> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register serverSuccess= {serverSuccess} serverError={serverError}/> } />
        <Route path="/:username" element={ <Profile /> } />
        <Route path="/seller" element={ <SellerDash pf={ pf }/> } />
        <Route path="*" element={ <NotFound/> } />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
