import "./pseller.css";


// icons
import { BsFillStarFill } from "react-icons/bs";

const Pseller = () => {

    const rank = 5.0;
    const badge = ["000000", "0000ff", "ffff00", "#ff0000"];

    const sellerBadge = () => {
        if (rank >= 0.0 && rank <= 1.0){
            let color = badge[0];
            return color;

        }else if (rank >= 1.1 && rank <= 2.0){
            let color = badge[1];
            return color;

        }else if (rank >= 2.1 && rank <= 3.0){
            let color = badge[2];
            return color;

        }else if (rank >= 3.1 && rank <= 4.0){
            let color = badge[3];
            return color;
            
        }else {
            let color = badge[3];  
            return color;
        }
    }


    const star = {
        "color": sellerBadge(),
        "fontSize": "10px"
    }

    //public folder
    const pf = process.env.REACT_APP_PUBLIC_FOLDER;

    return(
        <div className="pseller">
            <h2 className="psh">Our Popular Sellers</h2>

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