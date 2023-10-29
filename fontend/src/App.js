import './app.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"

//mesages notifier
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//import components
import AdminLogin from './views/admin/login/AdminLogin';
import AdminDashboard from './views/admin/dashboard/Dashboard';
import CreateAdmin from './views/admin/createAdmin/CreateAdmin.jsx';


import Login from './views/login/Login';
import Home from './views/landing/Landing';
import Register from "./views/register/Register"
import NotFound from './views/notfound/NotFound';
import AdminList from './views/admin/adminList/AdminList';
import OrderList from './views/admin/orderList/OrderList';
import Product from './views/admin/product/Product.jsx';
import Navbar from './components/navbar/Navbar.jsx';

// import Profile from './views/profile/Profile';
// import SellerDash from './views/sellerDash/SellerDash';

function App() {

  const getAdminData = JSON.parse(localStorage.getItem('adminData'));
  const [ vendors, setVendors] = useState([]);
  const [ adminData, setAdminData] = useState(getAdminData != null ? getAdminData : false);

  // server error messsages
  const serverSuccess = (msg) => toast.success(msg);
  const serverError = ( msg ) => toast.error(msg);

  //public folder
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;

  //function to open and close admin mobile navbar
  const openCloseAdminMobileNav = () => {
    const adminNav = document.getElementById("adminNav");

    if(adminNav.style.display === "block"){
      adminNav.style.display = "none";
    }else {
      adminNav.style.display = "block";
    }
  }

  useEffect(() => {
    const adminData = JSON.parse(localStorage.getItem('adminData'));
    setAdminData(adminData);
  }, [])
  

  return (
    <div className="App">

      <Navbar adminData={adminData} openCloseAdminMobileNav={openCloseAdminMobileNav} />

      <Routes>

        {/* Index landing Route */}
        <Route exact path="/" element={ <Home pf={ pf } vendors={vendors} serverSuccess= {serverSuccess} serverError={serverError}/> }/>
        <Route exact path="/login" element={ <Login pf={ pf } serverSuccess= {serverSuccess} serverError={serverError}/> } />
        <Route exact path="/register" element={ <Register pf={ pf } serverSuccess= {serverSuccess} serverError={serverError}/> } />

        {/* admin landing route */}

        {/* Admin login route */}
        { !adminData && <Route path="/admin/login" element={<AdminLogin adminData={adminData} serverSuccess= {serverSuccess} serverError={serverError}/>} />}

        { adminData && <Route path="/admin" element={<AdminDashboard pf={ pf } adminData={adminData} serverSuccess={serverSuccess} serverError={serverError}/>} />}
        { !adminData && <Route path="/admin" element={<AdminLogin adminData={adminData} serverSuccess= {serverSuccess} serverError={serverError}/>} />}

        {/* create Admin route */}
        { adminData && <Route path="/admin/createAdmin" element={ <CreateAdmin pf={ pf } adminData={adminData} serverSuccess= {serverSuccess} serverError={serverError}/> } />}
        

        {/* admin list route */}
        { adminData && <Route path="/admin/adminList" element={<AdminList pf={ pf } adminData={adminData} serverSuccess= {serverSuccess} serverError={serverError}/> } /> }

        {/* admin list route */}
        { adminData && <Route path="/admin/orderList" element={<OrderList pf={ pf } adminData={adminData} serverSuccess= {serverSuccess} serverError={serverError}/>} />}

        {/* Admin product route */}
        { adminData && <Route path="/admin/product" element={<Product pf={ pf } adminData={adminData} serverSuccess= {serverSuccess} serverError={serverError} />} />}

        <Route path="*" element={ <NotFound /> } />

      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
