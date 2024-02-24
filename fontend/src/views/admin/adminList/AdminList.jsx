import './adminList.css';


//components
import Sider from '../../../components/sider/Sider';
import { useState, useEffect } from 'react';




const AdminList = ({pf, serverSuccess, serverError, admin}) => {

    const [admins, setAdmins] = useState([]);


    //get all orders
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}admins/`,{

            //methods
            method: "GET",

            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }

        })
        .then(response => response.json())
        .then(data => {
            (data === null) ? setAdmins([]) : setAdmins(data);
        })
        .catch(err => console.error("Error fetching orders:", err ));
    }, []);



    //oder delete function
    const deleteAdmin = async(id) => {

        // current admin id
        const adminId = await JSON.parse(localStorage.getItem("admin"))["admin"]._id;

        // fetch to be deleted admin data
        const getToDeleteAdmin = await fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}admins/${id}`);

        // to be deleted admin data
        const AdminData_toBeDeleted = await getToDeleteAdmin.json();

        // check id current admin is same as to be deleted admin
        if(adminId === AdminData_toBeDeleted._id){

            serverError("You are currently login!");

        }
        else {

            if(AdminData_toBeDeleted.type === "main"){

                serverError("Can't delete main Admin! ");
            }
            else {

                fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}admins/${id}`,{

                    //methods
                    method: "DELETE",

                    // Adding headers to the request
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }

                })
                .then(response => response.json())
                .then(data => {
                    window.location.reload();
                    serverSuccess(data.msg)
                })
                .catch(err => serverError(err)); 
            }
        }
    }



    return (
        <div className="dashboard">
            <main className='-board'>
                <Sider pf={ pf } serverSuccess= {serverSuccess} admin={admin} />

                <div className="main-content">
                    <div className="main-block-content">

                        <h1 id='dash_heading' className='dash_heading'>Admin List</h1>

                        <div id="sub-content" className="sub-content">

                            <div className="sub-content-block">
                                <table className='adminList'>
                                    <thead className='adminList_head'>
                                        <tr>
                                            <th>USERNAME</th>
                                            <th>EMAIL</th>
                                            <th>TYPE</th>
                                            <th>ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody className='adminList_body'>
                                        { admins.map(admin => 
                                            <tr id='adminId'  key={admin._id}>
                                                <td>{admin.username}</td>
                                                <td>{admin.email}</td>
                                                <td>{admin.type}</td>
                                                <td><button onClick={ () => { deleteAdmin(admin._id) }} className='actionBtn'>Delete</button></td>
                                            </tr>
                                        )}
                                    </tbody>  
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AdminList;