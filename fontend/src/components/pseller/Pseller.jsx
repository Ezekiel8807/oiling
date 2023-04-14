import "./pseller.css";
import vendors from "../../db/vendor";



// icons
import { BsFillStarFill } from "react-icons/bs";
import { useNavigate } from "react-router";








//vendors
const Pseller = () => {

    //public folder
    const pf = process.env.REACT_APP_PUBLIC_FOLDER;

    const navigate = useNavigate();

    const badge = ["000000", "0000ff", "ffff00", "#ff0000"];

    const sellerBadge = (rank) => {
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


    //go to vendor page 
    const vendorPage = ( vendorUsername ) => {
        navigate(`/vendor?${vendorUsername}`);
    }

    return(
        <div className="pseller">
            <h2 className="psh">Our Popular Sellers</h2>

            <div className="scontainer">  

                {vendors.map(vendor => {
                    return(
                        <div className="seller" key={vendor.id}  onClick={ () => { vendorPage(vendor.username) }}>
                            <div className="sap">
                                <img src={pf + vendor.coverPhoto} alt="spp" />
                            </div>
                            <div className="sbf">
                                <span className="spp"><img src={pf +  vendor.profilePhoto} alt="spp" /></span>
                                <div className="sbf2">
                                    <b>{vendor.username}</b>
                                    <span></span> {vendor.rating} <BsFillStarFill style={{"color": sellerBadge(vendor.rating),"fontSize": "10px"}}/><br/>
                                </div>
                            </div>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default Pseller;