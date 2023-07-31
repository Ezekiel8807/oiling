import "./nseller.css"


import vendors from "../../db/vendor";


import SellerCard from "../sellercard/SellerCard";
import { BlockTitle1 } from "../blockTitle/BlockTitle";








//New vendors
const Nseller = () => {

    return(
        <div className="Nseller">
            <BlockTitle1 title="New Sellers" />

            <div className="scontainer">  

                {vendors.map(vendor => {
                    return(
                        <SellerCard key={vendor.id} sellerObj ={ vendor } />
                    )
                })}
            </div>
        </div>
    )
}

export default Nseller;