import "./slide.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';



const Slide = ({pf}) => {

    return(
        <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay= {{delay: 10000}} >
        
        <SwiperSlide>
            <div className="slide">

                <div className="content">
                    <h1>Buy your oil at an affordable</h1>
                    <p>Price</p>
                    <a href="/#buyNow">Order Now</a>
                </div>

                <div className="image">
                    <div className="imgBox">
                        <img src={`${pf}img/bg/f.png`} alt="image1" />
                    </div>
                </div>

            </div>
        </SwiperSlide> 

        <SwiperSlide>
            <div className="slide">

                <div className="content">
                    <h1>Buy your oil at an affordable</h1>
                    <p>Price</p>
                    <a href="#buyNow">Order Now</a>
                </div>

                <div className="image">
                    <div className="imgBox">
                        <img src={`${pf}img/bg/e.png`} alt="image1" />
                    </div>
                </div>
                
            </div>
        </SwiperSlide> 
      </Swiper>
    )
}

export default Slide;