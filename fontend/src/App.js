import { useState } from 'react';
import { Routes, Route } from "react-router-dom"

//mesages notifier
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//import components
import AdminLogin from './views/admin/login/AdminLogin';
import AdminDashboard from './views/admin/dashboard/Dashboard';
import NotFound from './views/notfound/NotFound';
import Home from './views/landing/Landing';
import Login from './views/login/Login';
import Register from './views/register/Register';
import Profile from './views/profile/Profile';
// import VendorProfile from './views/profile/VendorProfile';
// import DispatcherProfile from './views/profile/DispatcherProfile';
import SellerDash from './views/sellerDash/SellerDash';

function App() {

  const [userData, setUserData] = useState({
    "isLogin": false,
    "isAdminLogin": false,
    "info": {},
    "store": {}
  });
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
      

      <Routes>
        <Route exact path="/:username" element={ <Profile /> } />
        <Route exact path="/" element={ <Home userData={userData} pf={ pf } /> } />

        <Route path="/admin" element={ userData.isAdminLogin ? 
        <AdminDashboard serverSuccess= {serverSuccess} serverError={serverError}/> : 
        <AdminLogin serverSuccess= {serverSuccess} serverError={serverError}/> } />


        <Route path="/login" element={ <Login serverSuccess= {serverSuccess} serverError={serverError} /> } />
        <Route path="/register" element={ <Register serverSuccess= {serverSuccess} serverError={serverError}/> } />
        { userData.isLogin && <Route path="/seller" element={ <SellerDash pf={ pf }/> } /> }
        <Route path="*" element={ <NotFound/> } />

      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
