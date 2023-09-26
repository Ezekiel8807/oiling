import "./sider.css";

const Sider = ({serverSuccess, pf }) => {


    const logout = () => {
        localStorage.clear();
        window.location.replace("/admin");
        serverSuccess("logout Successful");
    }



    return (
        <div className="side-content">
            <div className="adminLogo">
                <img src={`${pf}img/bg/oilpalm.jpg`} alt="adminLogo" />
            </div>

            <h2 className="sideLabel"> EZEKIEL8807</h2>

            <nav className="sideNav">
                <a href="/admin">Home</a>
                <a href="/admin/product">Products</a>
                <a href="/admin/OrderList">Order List</a>
                <a href="/admin/adminList">Admin List</a>
                <a href="/admin/createAdmin">Create Admin</a>
                <button  onClick={ logout }>Logout</button>
            </nav>
        </div>
    )
}

export default Sider;   