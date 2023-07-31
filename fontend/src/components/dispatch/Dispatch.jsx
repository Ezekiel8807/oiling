import './dispatch.css'


const Dispatch = () => {

    //public folder
    const pf = process.env.REACT_APP_PUBLIC_FOLDER;

    return(
        <div className="dispatch">

            <div className="dispatchBlock">
                <h1>Become Distributor</h1>
                <button>Start Now</button>
            </div>
            
            <div className="dispatchBlock">
                <img src={ pf + "img/bg/oilpalm.jpg"} alt="dispatcher" />
            </div>
        </div>
    )
}

export default Dispatch;