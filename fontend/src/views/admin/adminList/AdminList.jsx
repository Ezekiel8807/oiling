import './adminList.css';


//components
import Sider from '../../../components/sider/Sider';
import Header from '../../../components/navbar/Navbar';



const AdminList = ({pf, serverSuccess}) => {

    const admins = [
        {
            "_id": 1,
            "username": "Ezekiel8807",
            "email": "Ayeolueaseyi@gmail.com",
            "password": "kjsbdhebshjdv"
        },
        {
            "_id": 2,
            "username": "Ezekiel8123",
            "email": "Ayeolueaseyi@gmail.com",
            "password": "kjsbdhebshjdv"
        },
        {
            "_id": 3,
            "username": "Ezekiel1254",
            "email": "Ayeolueaseyi@gmail.com",
            "password": "kjsbdhebshjdv"
        },
        {
            "_id": 4,
            "username": "Ezekiel2435",
            "email": "Ayeolueaseyi@gmail.com",
            "password": "kjsbdhebshjdv"
        },
    ]

    // useEffect(() => {


    
    //   return () => {
    //     second
    //   }
    // }, [])
    

    return (
        <div className="dashboard">
            <Header />
            <main className='-board'>
                <Sider pf={ pf } serverSuccess= {serverSuccess} />
                <div className="main-content">

                    <h1 id='dash_heading' className='dash_heading'>Admin List</h1>

                    <div id="sub-content" className="sub-content">

                        <table className='adminList'>
                            <thead className='adminList_head'>
                                <tr>
                                    <th>USERNAME</th>
                                    <th>EMAIL</th>
                                    <th>PASSWORD</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            { admins.map(admin => 
                                <tbody id='adminId' className='adminList_body'>
                                    <tr key={admin._id}>
                                        <td>{admin.username}</td>
                                        <td>{admin.email}</td>
                                        <td>{admin.password}</td>
                                        <td><button>Delete</button></td>
                                    </tr>
                                </tbody>
                            )}
                        </table>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AdminList;