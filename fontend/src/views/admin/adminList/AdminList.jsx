import './adminList.css';


//components
import Sider from '../../../components/sider/Sider';
import { useState, useEffect } from 'react';



const AdminList = ({pf, serverSuccess, admin}) => {

    const allAdmins = JSON.parse(localStorage.getItem("admins"));
    const [admins, setAdmins] = useState( (allAdmins == null)? [] : allAdmins);

    //get all orders
    const getAlAdmins =  async () => {
        const response = await fetch(`http://127.0.0.1:5000/api/admin/admins`)

        const data = await response.json();

        //check login status
        if (response.status !== 200){
            return console.log(data.msg);

        }else{ 
            localStorage.setItem( "admins", JSON.stringify([...data]));
            const admins = JSON.parse(localStorage.getItem("admins"));
            setAdmins(admins);
        }
    } 

    useEffect(() => {
        getAlAdmins();
    }, [])
    

    return (
        <div className="dashboard">
            <main className='-board'>
                <Sider pf={ pf } serverSuccess= {serverSuccess} admin={admin} />
                <div className="main-content">

                    <h1 id='dash_heading' className='dash_heading'>Admin List</h1>

                    <div id="sub-content" className="sub-content">

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
                                        <td><a className='actionBtn' href={`/admin/adminList/${admin._id}`}>Delete</a></td>
                                    </tr>
                                )}
                            </tbody>  
                        </table>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AdminList;