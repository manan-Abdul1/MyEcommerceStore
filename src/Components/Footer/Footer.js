import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <div className="bg-dark text-white p-5 footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
            <h6 className="text-uppercase mb-3">About Us</h6>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non elit eget neque tincidunt dignissim.</p>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0 customer">
            <h6 className="text-uppercase mb-3">Customer Support</h6>
            <ul className="list-unstyled mb-0">
              <li><a href="#" className="links text-muted ">Contact Us</a></li>
              <li><a href="#" className="links text-muted">Shipping Information</a></li>
              <li><a href="#" className="links text-muted">Returns &amp; Exchanges</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0 customer">
            <h6 className="text-uppercase mb-3 ">Follow Us</h6>
            <ul className="list-unstyled mb-0">
              <li><a href="#" className="links text-muted">Facebook</a></li>
              <li><a href="#" className="links text-muted">Twitter</a></li>
              <li><a href="#" className="links text-muted">Instagram</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
            <h6 className="text-uppercase mb-3">Subscribe</h6>
            <p className="text-muted">Subscribe to our newsletter to get the latest news and updates.</p>
            <form className="form-inline mb-2">
              <input type="email" className="form-control mr-2" placeholder="Enter your email" />
              <button type="submit" className="btn btn-primary my-2">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="container pt-4">
        <div className="row">
          <div className="col-md-6 text-muted">
            <small>&copy; 2023 My Ecommerce Store. All rights reserved.</small>
          </div>
          <div className="col-md-6 text-md-right">
            <small className="text-muted">Built with React</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
