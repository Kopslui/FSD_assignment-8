// src/components/Review.js
import React from 'react';
import pic from '../PHOTOS/pic-1.png'
import pic1 from '../PHOTOS/pic-2.png'
const Review = () => {
  return (
    <section className="review" id="review">
      <h2 className="heading">Client <span>Reviews</span></h2>
      <div className="review-slider swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide box">
            <div className="user">
              <img src={pic} alt="User" />
              <div>
                <h3>John Doe</h3>
                <span>Client</span> 
              </div>
            </div>
            <p>"This service was fantastic!"</p>
          </div>
        </div>
      </div>
          <div className="swiper-slide box">
            <div className="user">
              <img src={pic1} alt="User" />
              <div>
                <h3>Julie</h3>
                <span>Client</span> 
              </div>
            </div>
            <p>"This service was fantastic!"</p>
          </div>
    </section>
  );
};

export default Review;
