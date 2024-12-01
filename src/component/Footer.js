import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <div className="row">
          {/* Contact Information */}
          <div className="col-md-4">
            <h5>Contact Me</h5>
            <p>Email: yourname@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          
          {/* Navigation Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#about" className="text-white text-decoration-none">About</a></li>
              <li><a href="#projects" className="text-white text-decoration-none">Projects</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>
          
          {/* Social Media Icons */}
          <div className="col-md-4">
            <h5>Follow Me</h5>
            <div>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="bg-white" />
        <p className="mb-0">© 2024 Your Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
