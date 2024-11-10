// components/About.js
import React from 'react';
import image from '../PHOTOS/about-img.jpg'
function About() {
  return (
    <section className="about" id="about">
      <h1 className="heading"><span>about</span> us</h1>
      <div className="row">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h3>We will give you a very special celebration</h3>
          <p>Our team is dedicated to making your event unforgettable. We take care of every detail, ensuring that you can enjoy your day without any stress.</p>
          <a href="#contact" className="btn">contact us</a>
        </div>
      </div>
    </section>
  );
}

export default About;
