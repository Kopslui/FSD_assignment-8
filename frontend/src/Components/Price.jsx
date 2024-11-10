// src/components/Price.js
import React from 'react';

const Price = () => {
  const priceSectionStyle = {
    marginTop: '300px', // Added margin at the top for spacing
  };

  return (
    <section className="price" id="price" style={priceSectionStyle}>
      <h2 className="heading">Our <span>Pricing</span></h2>
      <div className="box-container">
        <div className="box">
          <div className="title">For Bachelor</div>
          <div className="amount">Rs:1,00,000</div>
          <ul>
            <li><i className="fas fa-check"></i>Full service</li>
            <li><i className="fas fa-check"></i>Decoration</li>
            <li><i className="fas fa-check"></i>Music and Photos</li>
            <li><i className="fas fa-check"></i>Food and Drinks</li>
            <li><i className="fas fa-check"></i>Invitation card</li>
          </ul>
        </div>
        <div className="box">
          <div className="title">For Wedding</div>
          <div className="amount">Rs:20,00,000</div>
          <ul>
            <li><i className="fas fa-check"></i>Full service </li>
            <li><i className="fas fa-check"></i>Decoration</li>
            <li><i className="fas fa-check"></i>Music and Photos</li>
            <li><i className="fas fa-check"></i>Food and Drinks</li>
            <li><i className="fas fa-check"></i>Invitation card</li>
          </ul>
        </div>
        <div className="box">
          <div className="title">For Sangeeth</div>
          <div className="amount">Rs:5,00,000</div>
          <ul>
            <li><i className="fas fa-check"></i>Full service </li>
            <li><i className="fas fa-check"></i>Decoration</li>
            <li><i className="fas fa-check"></i>Music and Photos</li>
            <li><i className="fas fa-check"></i>Food and Drinks</li>
            <li><i className="fas fa-check"></i>Invitation card</li>
          </ul>
        </div>
        <div className="box">
          <div className="title">For Other</div>
          <div className="amount">Rs:2,00,000</div>
          <ul>
            <li><i className="fas fa-check"></i>Full service </li>
            <li><i className="fas fa-check"></i>Decoration</li>
            <li><i className="fas fa-check"></i>Music and Photos</li>
            <li><i className="fas fa-check"></i>Food and Drinks</li>
            <li><i className="fas fa-check"></i>Invitation card</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Price;
