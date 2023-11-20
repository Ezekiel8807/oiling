import "./slide.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';



const Slide = ({pf}) => {

    return(
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
            <div className="slide2">

                <div className="image">
                    <div className="imgBox">
                        <img src={`${pf}img/bg/f.png`} alt="image1" />
                    </div>
                </div>

                <div className="content">
                    <h1>Buy your oil at affordable</h1>
                    <p>Price</p>
                    <a href="#buyNow">Order Now</a>
                </div>
            </div>
        </SwiperSlide> 

        <SwiperSlide>
            <div className="slide2">

                <div className="image">
                    <div className="imgBox">
                        <img src={`${pf}img/bg/e.png`} alt="image1" />
                    </div>
                </div>

                <div className="content">
                    <h1>Buy your oil at affordable</h1>
                    <p>Price</p>
                    <a href="#buyNow">Order Now</a>
                </div>
            </div>
        </SwiperSlide> 
      </Swiper>
    )
}

export default Slide;