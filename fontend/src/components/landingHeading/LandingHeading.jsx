import "./landingHeading.css";

const LandingHeading = ({title}) => {
    return (
        <div className="h1_heading">
            <h1 className="headingTitle">{title}</h1>
            <div className="line"></div>
        </div>
    )
}

export  default LandingHeading;