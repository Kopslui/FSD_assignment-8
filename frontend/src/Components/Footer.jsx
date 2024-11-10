import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={boxContainerStyle}>
        <div style={boxStyle}>
          <h3>Quick Links</h3>
          <a href="#home" style={linkStyle}><i className="fas fa-angle-right"></i> Home</a>
          <a href="#services" style={linkStyle}><i className="fas fa-angle-right"></i> Services</a>
          <a href="#about" style={linkStyle}><i className="fas fa-angle-right"></i> About</a>
          <a href="#contact" style={linkStyle}><i className="fas fa-angle-right"></i> Contact</a>
        </div>
        <div style={boxStyle}>
          <h3>Branches</h3>
          <a href="#" style={linkStyle}><i className="fas fa-angle-right"></i> Mumbai</a>
          <a href="#services" style={linkStyle}><i className="fas fa-angle-right"></i> Hyderabad</a>
          <a href="#about" style={linkStyle}><i className="fas fa-angle-right"></i> Chennai</a>
          <a href="#contact" style={linkStyle}><i className="fas fa-angle-right"></i> Vijayawada</a>
        </div>
        <div style={boxStyle}>
          <h3>Contact</h3>
          <a href="#home" style={linkStyle}><i className="fas fa-angle-right"></i> +91 9856112588</a>
          <a href="#services" style={linkStyle}><i className="fas fa-angle-right"></i> vivah@gmail.com</a>
          <a href="#about" style={linkStyle}><i className="fas fa-angle-right"></i> Vijayawada, India</a>
          <a href="#contact" style={linkStyle}><i className="fas fa-angle-right"></i> kalyanamasthu@gmail.com</a>
        </div>
        <div style={boxStyle}>
          <h3>Quick Links</h3>
          <a href="#home" style={linkStyle}><i className="fas fa-angle-right"></i> Facebook</a>
          <a href="#services" style={linkStyle}><i className="fas fa-angle-right"></i> Twitter</a>
          <a href="#about" style={linkStyle}><i className="fas fa-angle-right"></i> Instagram</a>
          <a href="#contact" style={linkStyle}><i className="fas fa-angle-right"></i> Youtube</a>
        </div>
      </div>
      <div style={creditStyle}>
        Created by <span>vivah team</span> | All rights reserved.
      </div>
    </footer>
  );
};

// Inline Styles
const footerStyle = {
  width: '100%',
  backgroundColor: '#333',
  color: 'white',
  padding: '0px',
  textAlign: 'center',
  position: 'relative',
  bottom: 0,
  width: '100%',
  flexShrink: 0,
};

const boxContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0px',
  flexWrap: 'wrap',
};

const boxStyle = {
  flex: '1',
  margin: '10px',
  minWidth: '200px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  display: 'block',
  marginBottom: '5px',
};

const creditStyle = {
  marginTop: '0px',
  fontSize: '14px',
};

export default Footer;
