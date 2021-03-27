import React from 'react';
import { NavLink } from 'react-router-dom';
import Breadcrumb from '../Common/Breadcrumb'
import Footer from '../Common/Footer';
import Modalit from '../ModalMain/Modalit';
import Modalbu from '../ModalMain/Modalbu';
import Modalan from '../ModalMain/Modalan';
const Service =()=>{
   
       
return (<>

    <Breadcrumb title="Services" tagline="We build effective classes to export "/>

<div className="service-area default-padding bottom-less bg-cover">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="site-heading text-center">
                        <h4>Services</h4>
                        <h2>What we do</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="service-items text-center">
                <div className="row">
                    
                    <div className="col-lg-4 col-md-6 single-item">
                        <div className="item">
                            <div className="info">
                                <h4>IT Design</h4>
                                <i className="flaticon-cogwheel"></i>
                                <p>
                                MADCAP Solution India is providing search engine optimization service that helps increase your sales...
                                </p>
                                <Modalit />
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-lg-4 col-md-6 single-item">
                        <div className="item">
                            <div className="info">
                                <h4>Analytic Solutions</h4>
                                <i className="flaticon-analysis-1"></i>
                                <p>
                                Welcome to MadCap Solutions,   We provide unparalleled Content-optimization  Information Insight...
                                </p>
                                <Modalan />
                            </div>
                        </div>
                    </div>
                  
                   
                    
                    <div className="col-lg-4 col-md-6 single-item">
                        <div className="item">
                            <div className="info">
                                <h4>Business Planning</h4>
                                <i className="flaticon-interview"></i>
                                <p>
                                Madcap solutions still overlook the importance of a technology startup business plan...
                                </p>
                               <Modalbu />
                            </div>
                        </div>
                    </div>
                   
                  
                   
                   </div>
            </div>
        </div>
    </div>

    <section id="service_div" className="parallax wow fadeInUp" data-wow-delay="0.2s" style={{backgroundPosition: '50% 165px', visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
    <div className="parallax-overlay-light webdevelopdiv">
    <div className="container">
    <div className="row">
    <div className="col-md-12">
    
<h1 style={{textAlign: "justify"}}>
<strong>UI UX Design services – Designing what our client expert</strong>
</h1><p style={{textAlign: "justify"}}>
To improve the user experience, the user interface is a major factor that results in better user experience as 
compared to your competitors. User experience (UX) is almost dependent upon the interface that you offer to your users.
 That’s why we are here to serve you the unique and highly appealing user interface that your user actually expert from you.</p>
 <p style={{textAlign: "justify"}}>Survin IT Solution is a <strong>
 UX/UI Design service provider company</strong>
 which is capable to deliver you any sort of design that you want to attract your users. 
 Our UX/UI Experts always understand user behavior and develop the design accordingly. Based on the assessment,
 the unique design is provided to the mobile application. We have built a completely distinct application UI which makes them stand out 
 from the crowd and attract more and more users.</p><h2 style={{textAlign: "justify"}}>
 <strong>What Type of&nbsp;UI UX Design services Do We Offer?</strong>
 </h2><ul className="survindbuilt1"><li style={{textAlign: "justify"}}>
 <strong>Mobile UX</strong>– Offering a design to your mobile application that is actually capable
 to compel more and more users onto your platform.</li><li style={{textAlign: "justify"}}>
 <strong>Website UX</strong>– Making a one size fits all web portal that delivers the same experience on different platforms.
 </li><li style={{textAlign: "justify"}}><strong>Web Applications</strong>– 
 Web applications have now become a trend and we are always ready to take challenges.</li>
 <li style={{textAlign: "justify"}}><strong>E-commerce UI</strong>– 
 user engagement on any e-commerce website plays a vital role in boosting the overall sales count.
 We offer a distinct UI design to your e-commerce portal that delivers surety for an increase in user count.
 </li><li style={{textAlign: "justify"}}><strong>Wearables</strong>– The use of wearables has also seen a boost in the recent past. 
 We are also capable to offer the unique UI to the digital device.</li></ul>
 </div></div></div></div></section>

    <div className="services-area default-padding bg-cover">
        <div className="container">
            <div className="services-tabs">
                <ul id="tabs" className="nav nav-tabs">
                   <li className="nav-item">
                        <NavLink to="tab3" data-target="#tab3" data-toggle="tab" className="nav-link">IT Management</NavLink>
                    </li>
                </ul>
                <div id="tabsContent" className="tab-content wow fadeInUp" data-wow-delay="0.5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
                    <div id="tab1" className="tab-pane fade active show">
                        <div className="row">
                            <div className="col-lg-5 col-md-12 thumb" style={{backgroundImage: 'url(ser12.jpg)'}}></div>
                            <div className="col-lg-7 col-md-12 info">
                                <div className="content">
                                    <i className="flaticon-analytics"></i>
                                    <h2>Global analytic solution of fully-observed variational.</h2>
                                    <p>
                                    Our focus is on applying this expertise to real-world, practical solutions in analysis, reporting, and planning for your business.
                                    We Use technologies Like Oracle , Mongo ,Firebase for our Report And Analytics Content Optimisation
                                    </p>
                                    <ul>
                                        <li>Data Blending Capabilities</li>
                                        <li>Ready to Consume Insights</li>
                                        <li>Scalable Analytics & Integration Support</li>
                                    </ul>
                                    {/* <NavLink to="#" className="btn-more">Start Now</NavLink> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    

  
      <div>
      <Footer />
      </div>
    </>
    );      
 };
export default Service;
