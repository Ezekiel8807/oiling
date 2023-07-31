
import "./errmsg.css";

const InlineErrorMsg = ({errMsg}) => {
    return(
        <small className="err_msg">{ errMsg }</small>
    )
}

export default InlineErrorMsg;