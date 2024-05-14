import React from 'react'
import playStore from "../../../Assets/images/playstore.png";
import appStore from "../../../Assets/images/Appstore.png";
import "./Footer.css";


const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>

        <p>Copyrights 2024 &copy; AkshayGehlot</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/akshay.k.gehlot/">Instagram</a>
        <a href="https://www.linkedin.com/in/akshay-gehlot-a117a3234/">Linkedin</a>
        <a href="https://twitter.com/akshaygehlot70">Twitter</a>
      </div>
    </footer>
  )
}

export default Footer
