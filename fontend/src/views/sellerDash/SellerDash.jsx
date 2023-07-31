import './sellerDash.css'

import sellers from '../../db/vendor'
import { BlockTitle2, BlockTitle3 } from '../../components/blockTitle/BlockTitle'

const SellerDash = ({pf}) => {

    return(
        <div className="sellerDash">
            
            <div className="dashBackground">
                <img src={pf +  sellers[0].coverPhoto} alt="sellerBackgroung" />
            </div>

            <BlockTitle2 title="Eazy Store"/>

            <table className="storeInfo">

                <tr className="lsit">
                   <td> Location: </td> 
                   <td>Sango Ota </td> 
                </tr>

                <tr className="lsit">
                    <td>Palm oil 5litres</td>
                    <td>15,0000</td>
                </tr>
                <tr className="lsit">
                    <td>Palm oil 25litres</td>
                    <td>15,0000</td>
                </tr>
            </table>

            <div className="buyNow">
                <button type="button">Buy Now!</button>
            </div> 
        </div>
    )

}

export default SellerDash; 