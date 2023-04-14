
import "./errmsg.css";

const ErrMsg = ({errMsg}) => {
    return(
        <small className="err_msg">{ errMsg }</small>
    )
}

export default ErrMsg;