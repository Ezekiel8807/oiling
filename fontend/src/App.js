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
import Order from './views/order/Order.jsx';

function App() {

  const getAdmin = JSON.parse(localStorage.getItem('admin'));

  const [ user, setUser] = useState(null);
  const [ admin, setAdmin] = useState(getAdmin != null ? getAdmin : false);

  // server error messsages
  const serverSuccess = (msg) => toast.success(msg);
  const serverError = ( msg ) => toast.error(msg);
  const serverWarn = ( msg ) => toast.warning(msg);

  //public folder
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;


  useEffect(() => {

    //Update user data on refresh
    const user = JSON.parse(localStorage.getItem('user'));

    if(user){
      // Fetch user data from MongoDB or your backend API
      fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}user/${user['user']._id}`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
      })
      .catch(error => console.error("Error fetching user:", error));
    }

    //up
    setAdmin(JSON.parse(localStorage.getItem('admin')));

  }, [user])



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
        <Route exact path="/" element={ <Home pf={ pf } serverWarn= {serverWarn} serverSuccess= {serverSuccess} serverError={serverError}/> }/>
        <Route path="/order" element={ <Order pf={ pf } serverWarn= {serverWarn} serverSuccess= {serverSuccess} serverError={serverError}/> } />


        <Route path="/about" element={ <About pf={ pf } serverSuccess= {serverSuccess} serverError={serverError}/> } />
        <Route path="/login" element={ <Login pf={ pf } serverSuccess= {serverSuccess} serverError={serverError}/> } />
        <Route path="/register" element={ <Register pf={ pf } serverSuccess= {serverSuccess} serverError={serverError}/> } />


        {/* User routes */}
        <Route path="/:username" element={ <Profile serverSuccess={serverSuccess} serverError={serverError}/> } />
        <Route path="/:username/orders" element={ <UserOrder user={user} serverwarn= {serverWarn} serverSuccess={serverSuccess} serverError={serverError}/> } />


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
