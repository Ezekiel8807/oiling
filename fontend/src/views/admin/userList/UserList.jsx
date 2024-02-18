import './userList.css';


//components
import Sider from '../../../components/sider/Sider';
import { useState, useEffect } from 'react';



const UserList = ({pf, serverSuccess, admin}) => {

    const [users, setUsers] = useState([]);

    //get all orders
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}users`,{

            //methods
            method: "GET",

            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }

        })
        .then(response => response.json())
        .then(data => {
            setUsers(data);
        })
        .catch(err => console.error("Error fetching orders:", err ));
    }, []);


    //users in reverse order
    const revUsers = [...users].reverse();


    //oder delete function
    const deleteUser = (id) => {

        console.log(id);

        // fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}user/orders/${id}`,{

        //     //methods
        //     method: "DELETE",

        //     // Adding headers to the request
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8"
        //     }

        // })
        // .then(response => response.json())
        // .then(data => {
        //     window.location.reload();
        //     serverSuccess(data.msg);
        // })
        // .catch(err => console.error("Error fetching orders:", err ));
    }




    return (
        <div className="dashboard">
            <main className='-board'>
                <Sider pf={ pf } serverSuccess= {serverSuccess} admin={admin} />

                <div className="main-content">
                    <div className="main-block-content">

                        <h1 id='dash_heading' className='dash_heading'>Users List</h1>

                        <div id="sub-content" className="sub-content">

                            <div className="sub-content-block">
                                <table className='adminList'>
                                    <thead className='adminList_head'>
                                        <tr>
                                            <th>USERNAME</th>
                                            <th>FIRSTNAME</th>
                                            <th>LASTNAME</th>
                                            <th>PHONE</th>
                                            <th>EMAIL</th>
                                            <th>CITY</th>
                                            <th>STATE</th>
                                            <th>COUNTRY</th>
                                            <th>ADDRESS</th>
                                            <th>ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody className='adminList_body'>
                                        { revUsers.map(user => 
                                            <tr id='adminId'  key={user._id}>
                                                <td>{user.username}</td>
                                                <td>{user.firstname}</td>
                                                <td>{user.lastname}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.email}</td>
                                                <td>{user.city}</td>
                                                <td>{user.state}</td>
                                                <td>{user.country}</td>
                                                <td>{user.address}</td>
                                                <td><button onClick={ () => { deleteUser(user._id) }} className='actionBtn'>Delete</button></td>
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

export default UserList;