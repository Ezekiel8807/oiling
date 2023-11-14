import "./slide.css";
import Slider from 'slider-moon';
import 'slider-moon/dist/style.css'






const Slide = () => {


    const pf = process.env.REACT_APP_PUBLIC_FOLDER;

    //Slider image array
    const items = [`${pf}/img/bg/a.jpeg`, `${pf}/img/bg/b.jpeg`, `${pf}/img/bg/oilpalm.jpg`, `${pf}/img/bg/a.jpeg`];

    return(
        <Slider slideClass={'my-slider-no-arrows'} infinite={true} bullets={true} arrowsNav={false}>
            <div className='slider my-slider-no-arrows slide'>
                <ul className='slider-wrapper'>
                    {items.map((item) => (
                        <li key={item}>
                            <img src={item} alt="Slide"/>
                        </li>
                    ))}
                </ul>
            </div>
        </Slider>
    )
}

export default Slide;