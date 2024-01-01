import './landing.css'
// import { Link } from 'react-router-dom';

//icons
import { SiHandshake } from 'react-icons/si'
import { PiShoppingCartFill } from 'react-icons/pi'
import { TbTruckDelivery } from 'react-icons/tb'



//import header navBar and footer
import Footer from '../../components/footer/Footer';


//import components
import Slider from '../../components/slide/Slide';
import Order from '../../components/orderForm/OrderForm';
import LandingHeading from '../../components/landingHeading/LandingHeading';




const Landing = ({ pf, user, serverError, serverWarn}) => {

    
    return( 
        <div className="landing_page">
            <Slider pf={pf}/>

            {/* features block */}
            <div className="features">

                <LandingHeading title={"Features"} />

                <div className="features_block">
                    <div className="feature">
                        <div className="featureInner">
                            <span><PiShoppingCartFill/></span>
                            <p>Fast Order</p>
                        </div> 
                    </div>
                    <div className="feature">
                        <div className="featureInner">
                            <span><SiHandshake/></span>
                            <p> Delivery Paymemt </p>
                        </div>
                    </div>
                    <div className="feature">
                        <div className="featureInner">
                                <span><TbTruckDelivery/></span>
                                <p>Ontime Delivery</p> 
                            </div>                      
                    </div>
                </div>
            </div>
                
            <Order user={user} serverError={ serverError} serverWarn={ serverWarn }/>

            <div className="test_comment">

                <div className="testimony_block">

                    <LandingHeading title={"Testimony"} />

                    <div className="testimony">
                        <div className="test_image">
                            <div className="test_image_block">
                                <img src={`${pf}img/bg/c.jpg`} alt="test_photo" />
                            </div>
                        </div>
                        <div className="test_info">
                            <h3>Ayebidun Ezekiel </h3>
                            <p>Thank you oily! i dont have to find myself in the supermarket before i get my vegetable oil.</p>  
                            <div className="button_box"><a href="mailto:ayeoluwaseyi@gmail.com" target="_blank" rel="noreferrer">Mail me</a></div>
                        </div>
                    </div>
                </div>

                <div className="comment_block">

                    <LandingHeading title={"Comment"} />

                    <form className="comment">
                        
                        <label htmlFor="name">Fullname: </label>
                        <input type="text" name="name" id="name" placeholder="Enter your fullname" autoComplete="true" required/>

                        <label htmlFor="email">Email: </label>
                        <input type="text" name="email" id="email" placeholder="Enter your email" autoComplete="true" required/>

                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Your messages goes here..." 
                        autoComplete="true" required></textarea>

                        <div className="messageBtn">
                            <button type="submit"> Message </button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer pf={pf} />
        </div>
    );
}

export default Landing;