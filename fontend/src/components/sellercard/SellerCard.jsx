import "./sellerCard.css"

// icons
import { BsFillStarFill } from "react-icons/bs";
import { useNavigate } from "react-router";


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


const SellerCard = ({sellerObj}) => {

    const navigate =  useNavigate();

    //public folder
    const pf = process.env.REACT_APP_PUBLIC_FOLDER;

    //go to sellerObj page 
    const sellerPage = ( sellerUsername ) => {
        navigate(`/seller?${sellerUsername}`);
    }

    return (
        <div className="seller"  onClick={ () => { sellerPage(sellerObj.username) }}>

            <div className="sap">
                <img src={pf + sellerObj.coverPhoto} alt="spp" />
            </div>

            <div className="sbf">
                <span className="spp"><img src={pf +  sellerObj.profilePhoto} alt="spp" /></span>
                <div className="sbf2">
                    <b>{sellerObj.username}</b>
                    <span></span> {sellerObj.rating} <BsFillStarFill style={{"color": sellerBadge(sellerObj.rating),"fontSize": "10px"}}/><br/>
                </div>
            </div>

        </div>
    )
}

export default SellerCard;