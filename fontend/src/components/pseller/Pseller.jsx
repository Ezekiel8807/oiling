import "./pseller.css";


// icons
import { BsFillStarFill } from "react-icons/bs";

const Pseller = () => {

    const star = {
        "color": "#f00",
        "fontSize": "10px"
    }

    //public folder
    const pf = process.env.REACT_APP_PUBLIC_FOLDER;

    return(
        <div className="pseller">
            <h2 className="psh">Our Polular Sellers</h2>

            <div className="scontainer">  

                <div className="seller">
                    <div className="sap">
                        <img src={pf + 'img/bg/palm_Oil_25_Liters.jpg'} alt="spp" />
                    </div>
                    <div className="sbf">
                        <span className="spp"><img src={pf + 'img/bg/oil_5_litres.webp'} alt="spp" /></span>
                        <div className="sbf2">
                            <b>Ezekel8807</b>
                            <span></span> 4.5 <BsFillStarFill style={ star}/><br/>
                        </div>
                    </div>
                </div>
                
                <div className="seller">
                    <div className="sap">
                        <img src={pf + 'img/bg/palm_Oil_25_Liters.jpg'} alt="spp" />
                    </div>
                    <div className="sbf">
                        <span className="spp"><img src={pf + 'img/bg/oil_5_litres.webp'} alt="spp" /></span>
                        <div className="sbf2">
                            <b>Ezekel8807</b>
                            <span></span> 4.5 <BsFillStarFill style={ star}/><br/>
                        </div>
                    </div>
                </div>

                <div className="seller">
                    <div className="sap">
                        <img src={pf + 'img/bg/palm_Oil_25_Liters.jpg'} alt="spp" />
                    </div>
                    <div className="sbf">
                        <span className="spp"><img src={pf + 'img/bg/oil_5_litres.webp'} alt="spp" /></span>
                        <div className="sbf2">
                            <b>Ezekel8807</b>
                            <span></span> 4.5 <BsFillStarFill style={ star}/><br/>
                        </div>
                    </div>
                </div>

                <div className="seller">
                    <div className="sap">
                        <img src={pf + 'img/bg/palm_Oil_25_Liters.jpg'} alt="spp" />
                    </div>
                    <div className="sbf">
                        <span className="spp"><img src={pf + 'img/bg/oil_5_litres.webp'} alt="spp" /></span>
                        <div className="sbf2">
                            <b>Ezekel8807</b>
                            <span></span> 4.5 <BsFillStarFill style={ star}/><br/>
                        </div>
                    </div>
                </div>

                <div className="seller">
                    <div className="sap">
                        <img src={pf + 'img/bg/palm_Oil_25_Liters.jpg'} alt="spp" />
                    </div>
                    <div className="sbf">
                        <span className="spp"><img src={pf + 'img/bg/oil_5_litres.webp'} alt="spp" /></span>
                        <div className="sbf2">
                            <b>Ezekel8807</b>
                            <span></span> 4.5 <BsFillStarFill style={ star}/><br/>
                        </div>
                    </div>
                </div>

                <div className="seller">
                    <div className="sap">
                        <img src={pf + 'img/bg/palm_Oil_25_Liters.jpg'} alt="spp" />
                    </div>
                    <div className="sbf">
                        <span className="spp"><img src={pf + 'img/bg/oil_5_litres.webp'} alt="spp" /></span>
                        <div className="sbf2">
                            <b>Ezekel8807</b>
                            <span></span> 4.5 <BsFillStarFill style={ star}/><br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pseller;