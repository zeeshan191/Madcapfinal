import React from 'react'
import { NavLink } from "react-router-dom";
import './Footer.css'
function Footer() {
    return (
        <>

<footer className="mainfooter" role="contentinfo">
<div className="footer-middle">
<div className="container">
  <div className="row">
  <div className="col-md-3">
  <p><img src="madcaplogot.png" alt="madcaplogo" width="110" height="90" /></p>
 
  </div>
    <div className="col-md-3 col-sm-6">
    
      <div className="footer-pad">
        <h4 style={{fontWeight: '700'}}>EMAIL</h4>

        <ul className="list-unstyled">
        <p><NavLink to="/www.gamil.com">madcapsloution@gmail.com</NavLink><br /></p>
        </ul>
      </div>
    </div>
    <div className="col-md-3 col-sm-6">
      
      <div className="footer-pad">
        <h4 style={{fontWeight: '700'}}>SERVICES</h4>
     
        <ul className="list-unstyled">
        <li><NavLink exact to="/service">Analytic Solutions</NavLink></li>
        <li><NavLink to="/service">IT Design</NavLink></li>
        <li><NavLink to="/service">Business Planning</NavLink></li>
        </ul>
      </div>
    </div>
    <div className="col-md-3 col-sm-6">
    
      <div className="footer-pad">
        <h4 style={{fontWeight: '700'}}>QUICK LINKS</h4>
        <ul className="list-unstyled">


        
        <li><NavLink to="/about" target="_self">About Us</NavLink></li>
        <li><NavLink to="/home" target="_self">Home</NavLink></li>
        <li><NavLink to="/contact" target="_self">Contact Us</NavLink></li>
          
          
        </ul>
      </div>
    </div>
     
  </div>
  <div className="row">
		<div className="col-md-12 copy">
			<p className="text-center"> Copyright &copy; 2021  All rights reserved Madcap Solutions</p>
		</div>
	</div>


</div>
</div>
</footer>

</>
)
}

export default Footer;

