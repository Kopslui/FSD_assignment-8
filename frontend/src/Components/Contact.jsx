import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">Get in <span>Touch</span></h2>
      <form>
        <div className="inputBox">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
        </div>
        <div className="inputBox">
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
