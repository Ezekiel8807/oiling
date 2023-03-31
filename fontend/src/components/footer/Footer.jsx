import './footer.css';


// include footer components
import Line from '../line/Line';
import SocialHandle from '../socialHandle/SocialHandlle';

const Footer = () => {
    return (
        <div className='footer'>

            <div className='footgrid'>

                <div className="quick-links">
                    <h3>USEFUL LINKS</h3>
                    <Line color='#fff'/>

                    <ul className='quick_link'>
                        <li><a href="http://"> About Us </a></li>
                        <li><a href="http://"> Contact </a></li>
                        <li><a href="http://"> Privacy Policy </a></li>
                        <li><a href="http://"> About Us </a></li>
                        <li><a href="http://"> Terms of Use </a></li>
                        <li><a href="http://"> Wholesale Directory </a></li>
                    </ul>
                </div>

                <div className="paymentMethod">
                    <h3>PAYMENT METHOD</h3>
                    <Line color='#fff'/>

                    <div className="content">
                        Payment can be made via payment platform or by Direct bank transfer to this account - <br/><br/>
                        FCMB BANK ACCOUNT<br/>
                        Ayebidun Ezekiel Oluwaseyi:<br/>
                        5091361015.
                        <br/><br/>

                        For international payments, an extra 4% of the total order must be included to the total amount as payment for transaction cost charged.
                    </div>
                </div>


                <div className="paymentMethod">
                    <h3>RETAIL ORDERS</h3>
                    <Line color='#fff'/>

                    <div className="content">
                        1. Delivery time is between 1pm- 7pm<br/>
                        2. Same day delivery sometimes available for retail quantities if the order is placed before 10am of that day.
                        3. Items not available on the regular website list can be included.<br/>
                        4. Delivery cost ranges (depending on location and weight of items).<br/>
                        5. We are able to deliver certain items to the US, UK and Canada; the delivery cost for international orders differ from the local delivery rates. On the average, Time of delivery is usually between 10-14 working days.<br/>
                    </div>
                </div>


                <div className="paymentMethod">
                    <h3>WHOLESALE</h3>
                    <Line color='#fff'/>

                    <div className="content">
                        1. Delivery takes between 24-72hours , depending on order. Delivery time is between 1pm and 7pm.<br/>
                        2. Items not available on the website list can be included, simply send a whatsapp message for further enquiries.<br/>
                        3. Delivery cost is usually between N2500-N5,000, depending on the quantity and delivery location.
                    </div>
                </div>
            </div>

            <SocialHandle />
        </div>
    )
}

export default Footer;