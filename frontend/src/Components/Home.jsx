import React from 'react';
import image1 from '../PHOTOS/Rings2.jpeg';
import image2 from '../PHOTOS/beautifulg2.jpeg';
import image3 from '../PHOTOS/decoration1.jpeg';
import image4 from '../PHOTOS/engaged6.jpeg';
import image5 from '../PHOTOS/mehandi hands4.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images=[image1,image2,image3,image4,image5];

function Home() {
 
  return (
    <section className="home" id="home">
      <div className="content">
        <h1><span>VI</span>V<span>AH</span></h1>
        <h4>Vows, rings & happy Wedding things!</h4>
      </div>
      
      <div className="home-slider">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
      >
        
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="slider-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
      
      
    </section>
  );
}


export default Home;
