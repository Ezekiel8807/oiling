import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"

//mesages notifier
import store from "./db/vendor.js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//import components
import AdminLogin from './views/admin/login/AdminLogin';
import AdminDashboard from './views/admin/dashboard/Dashboard';
import CreateAdmin from './views/admin/createAdmin/CreateAdmin.jsx';


import NotFound from './views/notfound/NotFound';
import Home from './views/landing/Landing';
import AdminList from './views/admin/adminList/AdminList';
import OrderList from './views/admin/orderList/OrderList';
import Product from './views/admin/product/Product.jsx';

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

  useEffect(() => {
    const adminData = JSON.parse(localStorage.getItem('adminData'));
    setAdminData(adminData);
    setVendors(store);
  }, [])
  

  return (
    <div className="App">

      <Routes>

        {/* Index landing Route */}
        <Route exact path="/" element={ <Home pf={ pf } vendors={vendors} serverSuccess= {serverSuccess} serverError={serverError}/> } />

        {/* admin landing route */}
        <Route path="/admin" element={ adminData ? <AdminDashboard pf={ pf } adminData={adminData} serverSuccess= {serverSuccess} serverError={serverError}/> : 
        <AdminLogin adminData={adminData} serverSuccess= {serverSuccess} serverError={serverError}/>} />

        {/* create Admin route */}
        <Route path="/admin/createAdmin" element={ adminData ?  <CreateAdmin pf={ pf } serverSuccess= {serverSuccess} serverError={serverError}/> :
        <AdminLogin adminData={adminData} serverSuccess= {serverSuccess} serverError={serverError}/>} />

        {/* admin list route */}
        <Route path="/admin/adminList" element={ adminData ? <AdminList pf={ pf } serverSuccess= {serverSuccess} serverError={serverError}/> : 
        <AdminLogin adminData={adminData} serverSuccess= {serverSuccess} serverError={serverError}/>} />

        {/* admin list route */}
        <Route path="/admin/orderList" element={ adminData ? <OrderList pf={ pf } serverSuccess= {serverSuccess} serverError={serverError}/> : 
        <AdminLogin adminData={adminData} serverSuccess= {serverSuccess} serverError={serverError}/>} />

        {/* Admin login route */}
        <Route path="/admin/login" element={!adminData ?  <AdminLogin adminData={adminData} serverSuccess= {serverSuccess} serverError={serverError}/>:
        <AdminDashboard pf={ pf } serverSuccess= {serverSuccess} serverError={serverError}/>} />

        {/* Admin product route */}
        <Route path="/admin/product" element={ adminData ?  <Product pf={ pf } adminData={adminData} serverSuccess= {serverSuccess} serverError={serverError}/>:
        <AdminLogin adminData={adminData} serverSuccess= {serverSuccess} serverError={serverError}/>} />


        <Route path="*" element={ <NotFound /> } />

      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
