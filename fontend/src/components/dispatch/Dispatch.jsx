import './dispatch.css'


const Dispatch = () => {

    //public folder
    const pf = process.env.REACT_APP_PUBLIC_FOLDER;

    return(
        <div className="dispatch">
            <div className="dispatcherImage">
                <img src={ pf + "img/bg/oilpalm.jpg"} alt="dispatcher" />
            </div>
            
            <div className="dispatcherBlock">
                <h1>Become a distributor</h1>
                <button>Start Now</button>
            </div>
        </div>
    )
}

export default Dispatch;