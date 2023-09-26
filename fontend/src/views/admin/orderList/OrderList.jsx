import './orderList.css';


//components
import Sider from '../../../components/sider/Sider';
import Header from '../../../components/navbar/Navbar';



const OrderList = ({pf, serverSuccess}) => {

    const orders = [
        {
            "id": 1,
            "fullname": "Ayebidun Ezekiel",
            "product": "palm oil",
            "quality": "5 liters",
            "quantity": "2",
            "amount": "#14,5000",
            "status": "delivered"
        },
        {
            "id": 2,
            "fullname": "Ayebidun Ezekiel",
            "product": "palm oil",
            "quality": "5 liters",
            "quantity": "2",
            "amount": "#14,5000",
            "status": "delivered"
        },
        {
            "id": 3,
            "fullname": "Ayebidun Ezekiel",
            "product": "palm oil",
            "quality": "5 liters",
            "quantity": "2",
            "amount": "#14,5000",
            "status": "delivered"
        },
        {
            "id": 4,
            "fullname": "Ayebidun Ezekiel",
            "product": "palm oil",
            "quality": "5 liters",
            "quantity": "2",
            "amount": "#14,5000",
            "status": "delivered"
        }
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

                    <h1 id='dash_heading' className='dash_heading'>Order List</h1>

                    <div id="sub-content" className="sub-content">

                        <table className='adminList'>
                            <thead>
                                <tr className='adminList_head'>
                                    <th>Fullname</th>
                                    <th>Product</th>
                                    <th>Quality</th>
                                    <th>Quantity</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            { orders.map(order => 
                                <tbody id='orderId'>
                                    <tr key={order.id} className='adminList_body'>
                                        <td>{order.fullname}</td>
                                        <td>{order.product}</td>
                                        <td>{order.quality}</td>
                                        <td>{order.quantity}</td>
                                        <td>{order.amount}</td>
                                        <td>{order.status}</td>
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

export default OrderList;