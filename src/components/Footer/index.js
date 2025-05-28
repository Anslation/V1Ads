import React from "react";
import "./style.css";
export default function Footer() {
  return (
    <div>
      {/* header 7 newletter */}
      <div className="newsletter">
        <div className="container">
          <div className="text-center">
            <h6>Newsletter</h6>
            <h4>Subscribe To Our Newsletter</h4>
            <p>
              Subscribe to V1Ads' newsletter for the latest digital marketing tips, trends, and strategies to grow your brand online.
            </p>
          </div>
          <form class="newsletter-form">
            <input
              type="text"
              class="input-newsletter"
              placeholder="Enter your email address"
              name="EMAIL"
              required=""
            />
            <button type="submit" class="btn learn-more-btn">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
      <div className="footer">
        <div className="container footer-text">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <h3>Aboutus</h3>
              <p>
                V1Ads is a results-driven digital marketing agency committed to helping businesses grow. We craft tailored strategies to boost online presence, generate quality leads, and deliver measurable growth with a personalized approach.
              </p>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <h3>Links</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/Aboutus">About Us</a>
                </li>
                <li>
                  <a href="/Contactus">Contact Us</a>
                </li>
              </ul>
            </div>
           
            <div className="col-lg-4 col-md-6 col-12">
              <h3>Contact</h3>
              <ul>
                
                <li>atul@v1ads.com</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
       
      </div>
    </div>
  );
}
