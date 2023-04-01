import "./socialHandle.css";




const SocialHandle = () => {


    //public folder
    const pf = process.env.REACT_APP_PUBLIC_FOLDER;

    return(
        <div className="socialHandle">
            <p className="copyright"> &copy; 2023 Online palm oil store for Nigerians | Get palm oil. All rights reserved</p>
            <div className="handles">
                <span className="facebook"><a href="/"><img src={pf + "img/logo/facebook.png"} alt="facebook"/></a></span>
                <span className="instagram"><a href="/"><img src={pf + "img/logo/instagram.png"} alt="instagram" /></a></span>
                <span className="Whatsapp"><a href="/"><img src={pf + "img/logo/telephone.png"} alt="facebook"/></a></span>
                <span className="mail"><a href="/"><img src={pf + "img/logo/email.png"} alt="facebook"/></a></span>
            </div>
        </div>
    )
}

export default SocialHandle;