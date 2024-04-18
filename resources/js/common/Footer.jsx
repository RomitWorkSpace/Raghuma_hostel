import React from 'react'
import Logo from 'imgPath/RaghumaLogo.png'
import { Link } from 'react-router-dom'
import Iframe from 'react-iframe'

function Footer() {
    return (
        <>

  <footer id="footer" className="footer">

    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-12 footer-info">
          <Link to="/" className="logo d-flex align-items-center">
            <img src={Logo} alt="tecroost" height="180" />
          </Link>
          <p className='clr-black'>At Raghuma Hostel, we offer a variety of accommodation options to suit every customer's needs. Whether you're solo, with friends, or in a group, our hostel provides the perfect space for rest and relaxation. </p>
          <div className="social-links d-flex mt-4">
            <Link to="https://twitter.com/raghumahostel" className="twitter"><i className="bi bi-twitter clr-black"></i></Link>
            <Link to="https://www.facebook.com/raghumahostel/" className="facebook"><i className="bi bi-facebook clr-black"></i></Link>
            <Link to="https://www.instagram.com/raghumahostel/" className="instagram"><i className="bi bi-instagram clr-black"></i></Link>
            <Link to="https://www.linkedin.com/company/raghumahostel/" className="linkedin"><i className="bi bi-linkedin clr-black"></i></Link>
          </div>
        </div>

        <div className="col-lg-2 col-5 footer-links">
          <h4 className="primary-clr">Useful Links</h4>
          <ul className='footer-link'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="#">Privacy policy</Link></li>
          </ul>
        </div>

        <div className="col-lg-3 col-7 footer-contact text-md-start">
          <h4 className="primary-clr">Contact Us</h4>
          <p className='clr-black'>
          Plot No. 40, Knowledge park-3,
Greater Noida, Gautam Budh Nagar,
UP - 201310 <br/><br/>
            <strong>Phone:</strong> +91-9315312530<br/>
            <strong>Email:</strong> raghumahostel@gmail.com<br/>
          </p>

        </div>

        <div className="col-lg-3 col-md-12 footer-links">
          <h4 className="primary-clr">Get Direction</h4>
          <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1753.6773568580404!2d77.48169503498126!3d28.468862375754508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea08950593b7%3A0x2ba17f028de339d1!2s40B%2C%20Knowledge%20Park%20III%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201310!5e0!3m2!1sen!2sin!4v1713006598482!5m2!1sen!2sin" width="100%" height="200" style={{borderRadius:'7px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
        </div>

      </div>
    </div>
<hr className='clr-black'/>
    <div className="container mt-4">
      <div className="copyright clr-black">
        &copy; Copyright <strong><span className='primary-clr'>Raghuma Hostel</span></strong>. All Rights Reserved
      </div>
      <div className="credits clr-black">

        Designed by <a href="https://livetechservices.in" className="primary-clr">LTS</a>
      </div>
    </div>

  </footer>
        </>
    )
}

export default Footer