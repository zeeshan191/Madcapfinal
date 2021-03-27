import React from 'react';
import { NavLink } from 'react-router-dom';
import Breadcrumb from '../Common/Breadcrumb';
import Footer from '../Common/Footer';
// import { FaPhone, FaCubes, FaPlus, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa"


const About = () => {
    return (<>

        <Breadcrumb title="AboutUs" tagline="We make work easier " />




        <div className="about-area faq-area inc-shape default-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="thumb">
                            <img src="about1.png" alt="Thumb" />
                            <img src="about2.png" alt="Thumb" />
                            <div className="overlay">
                                <div className="content">
                                    <h4>15 years of experience</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 offset-lg-1 info">
                        <h2>We Help IT Companies Scale Engineering Capacity</h2>

                        {/* <div className="col-lg-6 info"> */}

                        <div className="skill-items">

                            <div className="progress-box">
                                <h5>Software Development</h5>
                                <div className="progress" style={{ opacity: '1', left: '0px' }}>
                                    <div className="progress-bar" role="progressbar" data-width="88" style={{ width: '88%' }}>
                                        <span>88%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-box">
                                <h5>Mobile App Development</h5>
                                <div className="progress" style={{ opacity: '1', left: '0px' }}>
                                    <div className="progress-bar" role="progressbar" data-width="95" style={{ width: '95%' }}>
                                        <span>95%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-box">
                                <h5>Web Development</h5>
                                <div className="progress" style={{ opacity: '1', left: '0px' }}>
                                    <div className="progress-bar" role="progressbar" data-width="80" style={{ width: '80%' }}>
                                        <span>80%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-box">
                                <h5>Web Application Development</h5>
                                <div className="progress" style={{ opacity: '1', left: '0px' }}>
                                    <div className="progress-bar" role="progressbar" data-width="80" style={{ width: '80%' }}>
                                        <span>90%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> </div> </div>


        <div className="work-process-area overflow-hidden default-padding bottom-less">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4>Process</h4>
                            <h2>How we works</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-full">
                <div className="work-pro-items">
                    <div className="row">

                        <div className="single-item col-lg-3 col-md-6">
                            <div className="item">
                                <div className="item-inner">
                                    <div className="icon">
                                        <i className="flaticon-select"></i>
                                        <span>01</span>
                                    </div>
                                    <h5>Choose a Service</h5>
                                    <p>
                                        Picking the right service providers is crucial for business success. Find out how to do it right.
                                </p>
                                </div>
                            </div>
                        </div>

                        <div className="single-item col-lg-3 col-md-6">
                            <div className="item">
                                <div className="item-inner">
                                    <div className="icon">
                                        <i className="flaticon-video-call"></i>
                                        <span>02</span>
                                    </div>
                                    <h5>Request a Meeting</h5>
                                    <p>
                                        You want to book a meeting   to discuss your product and how it’s relevant to their needs.
                                </p>
                                </div>
                            </div>
                        </div>

                        <div className="single-item col-lg-3 col-md-6">
                            <div className="item">
                                <div className="item-inner">
                                    <div className="icon">
                                        <i className="flaticon-strategy"></i>
                                        <span>03</span>
                                    </div>
                                    <h5>Receive Plan</h5>
                                    <p>
                                        Custom software development is the creation of unique technology solutions.
                                </p>
                                </div>
                            </div>
                        </div>

                        <div className="single-item col-lg-3 col-md-6">
                            <div className="item">
                                <div className="item-inner">
                                    <div className="icon">
                                        <i className="flaticon-help"></i>
                                        <span>04</span>
                                    </div>
                                    <h5>Let’s Make it Happen</h5>
                                    <p>
                                        Rebuild the future is our motto! let’s make it happen!
                                </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


        <div className="fixed-shape-bottom">
            <img src="about5.png" alt="Shape" />
        </div>

        {/* </div> */}
        <div className="choose-us-area default-padding-bottom">
            <div className="container">
                <div className="items-box">
                    <div className="row">
                        <div className="single-item col-lg-6 col-mg-6">
                            <div className="item">
                                <div className="info">
                                    <h4>24/7 Customer support</h4>
                                    <p>
                                        For Further Queries . Contact MadCap Solutions. One Of Our Employees Will Get In Touch With You As Soon As Possible
                                </p>
                                    <div className="call">
                                        <div className="icons">
                                            <i className="fas fa-phone"> </i>
                                        </div>
                                        <div className="info">
                                            <span>Helpline</span> +918951515211
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="single-item col-lg-6 col-mg-6">
                            <div className="item">
                                <div className="icon">
                                    <i className="fas fa-cubes"></i>
                                </div>
                                <div className="info">
                                    <h4>Smart solutions</h4>
                                    <p>
                                        SMART solutions allows us to evaluate and verify the performance of an entire project and to offer guarantees for the project's lifetime.
                                </p>
                                    <NavLink to="/Home" className="btn-more">Start Now</NavLink>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>




        <div className="team-area default-padding-bottom bottom-less">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4>Expert Team</h4>
                            <h2>Meet Our Leadership</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="team-items text-center">
                    <div className="row">





                        <div className="single-item col-lg-4 col-md-6">
                            <div className="item">
                                <div className="thumb">
                                    <img src="founder1.jpg" alt="Thumb" style={{ height: "120px", width: "120px" }} />

                                </div>
                                <div className="info">
                                    <h6>Mohammed Mazhar</h6>
                                    <span>FOUNDER</span>
                                </div>
                            </div>
                        </div>

                        <div className="single-item col-lg-6 col-mg-6">
                            <div className="item">
                                <p className="indent">
                                    I have been raised under the simple understanding that “Passion is the Beginning of a Successful Path”. That you should recognize what you are doing, love what you are doing, and believe in what you are doing.

                                    It is my strong belief that the success of an organization always lies in its potential to acquire a dedicated team of professionals who work together. At Madcap Solutions , I believe that my most valuable asset are my team. We offer our employees an environment of responsibility and appreciation, as well as autonomy to explore new horizons. I have always believed that enabling everyone to develop to their full potential is the key to organization growth and, more importantly, customer satisfaction. This attitude toward individual growth and expansion is one of many attitudes that keeps madcap solutions one-s
                                    tep ahead of our competitors and equally provides the ability to offer consistent, high quality results to our clients.
                    </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>








        <Footer />

    </>);
};
export default About;
