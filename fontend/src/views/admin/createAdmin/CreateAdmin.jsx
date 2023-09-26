import "./createAdmin.css";


//components
import Sider from '../../../components/sider/Sider';
import Header from '../../../components/navbar/Navbar';

const CreateAdmin = ({pf, serverSuccess}) => {
    return(
        <div className="createAdmin">
            <Header />
            <main className='-board'>
                <Sider pf={ pf } serverSuccess= {serverSuccess} />
                <div className="main-content">
                    <h1 id='dash_heading' className='dash_heading'>Create Admin</h1>
                    <div id="sub-content" className="sub-content">
                        <form className="adminForm">
                            <input type="text" name="" id="" placeholder='Admin Username' required/>
                            <input type="email" name="" id="" placeholder='Admin Email'/>
                            <input type="password" name="" id="" placeholder='Admin Password' required/>
                            <button type='submit'>Create Admin</button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default CreateAdmin;