import './notfound.css'
import { useNavigate } from 'react-router'


const NotFound = () => {

    const navigate = useNavigate();

    const goHome = () => {
        navigate("/")
    }

    return(
        <div className="notfound">
            <div className="b404">
                <span>4</span>
                <span>0</span>
                <span>4</span>
            </div>
            <p>Opps, page not found.</p>
            <button onClick={ goHome }> Home </button>
        </div>
    )
}

export default NotFound;