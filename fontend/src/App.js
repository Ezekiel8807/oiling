import './app.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"

//mesages notifier
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//import components
import Navbar from './components/navbar/Navbar.jsx';



//imported Admin paages
import AdminLogin from './views/admin/login/AdminLogin';
import Product from './views/admin/product/Product.jsx';
import AdminList from './views/admin/adminList/AdminList';
import OrderList from './views/admin/orderList/OrderList';
import AdminDashboard from './views/admin/dashboard/Dashboard';
import CreateAdmin from './views/admin/createAdmin/CreateAdmin.jsx';


//imported user paages
import Login from './views/login/Login';
import Home from './views/landing/Landing';
import About from './views/about/About.jsx';
import Profile from './views/profile/Profile';
import Register from "./views/register/Register";
import NotFound from './views/notfound/NotFound';
// import SellerDash from './views/sellerDash/SellerDash';

import UserOrder from './views/userOrder/UserOrder.jsx';

function App() {

  const getAdmin = JSON.parse(localStorage.getItem('admin'));
  const getUser = JSON.parse(localStorage.getItem('user'));


  const [ user, setUser] = useState(getUser != null ? getUser : false);
  const [ admin, setAdmin] = useState(getAdmin != null ? getAdmin : false);

  // server error messsages
  const serverSuccess = (msg) => toast.success(msg);
  const serverError = ( msg ) => toast.error(msg);

  //public folder
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;


  useEffect(() => {

    //Update user data on refresh
    setUser(JSON.parse(localStorage.getItem('user')));

    //up
    setAdmin(JSON.parse(localStorage.getItem('admin')));

  }, [])



  //function to open and close admin mobile navbar
  const openCloseAdminMobileNav = () => {
    const adminNav = document.getElementById("adminNav");

    if(adminNav.style.display === "block"){
      adminNav.style.display = "none";
    }else {
      adminNav.style.display = "block";
    }
  }

  

  return (
    <div className="App">

      <Navbar admin={admin} user={user} serverSuccess= {serverSuccess} openCloseAdminMobileNav={openCloseAdminMobileNav} />

      <Routes>

        {/* Index Routes */}
        {admin === null && <Route exact path="/" element={ <Home pf={ pf } user={user} serverSuccess= {serverSuccess} serverError={serverError}/> }/>}
        <Route path="/about" element={ <About pf={ pf } serverSuccess= {serverSuccess} serverError={serverError}/> } />
        <Route path="/login" element={ <Login pf={ pf } serverSuccess= {serverSuccess} serverError={serverError}/> } />
        <Route path="/register" element={ <Register pf={ pf } serverSuccess= {serverSuccess} serverError={serverError}/> } />


        {/* User routes */}
        <Route path="/:username" element={ <Profile user={user} serverSuccess={serverSuccess} serverError={serverError}/> } />
        <Route path="/:username/orders" element={ <UserOrder user={user} serverSuccess={serverSuccess} serverError={serverError}/> } />


        {/* Admin routes */}
        { !admin && <Route path="/admin/login" element={<AdminLogin admin={admin} serverSuccess= {serverSuccess} serverError={serverError}/>} />}

        { admin && <Route path="/admin" element={<AdminDashboard pf={ pf } admin={admin} serverSuccess={serverSuccess} serverError={serverError}/>} />}
        { !admin && <Route path="/admin" element={<AdminLogin admin={admin} serverSuccess= {serverSuccess} serverError={serverError}/>} />}

        {/* create Admin route */}
        { admin && <Route path="/admin/createAdmin" element={ <CreateAdmin pf={ pf } admin={admin} serverSuccess= {serverSuccess} serverError={serverError}/> } />}
        

        {/* admin list route */}
        { admin && <Route path="/admin/adminList" element={<AdminList pf={ pf } admin={admin} serverSuccess= {serverSuccess} serverError={serverError}/> } /> }

        {/* admin list route */}
        { admin && <Route path="/admin/orderList" element={<OrderList pf={ pf } admin={admin} serverSuccess= {serverSuccess} serverError={serverError}/>} />}

        {/* Admin product route */}
        { admin && <Route path="/admin/product" element={<Product pf={ pf } admin={admin} serverSuccess= {serverSuccess} serverError={serverError} />} />}

        <Route path="*" element={ <NotFound /> } />

      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
