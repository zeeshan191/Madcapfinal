import React from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert2';
import { Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Footer from '../Common/Footer';
import { FaReact } from "react-icons/fa"
import { FaNode } from "react-icons/fa"
import { FaVuejs } from "react-icons/fa"
import { FaAngular} from "react-icons/fa"
import { DiJava } from "react-icons/di"
import { IoLogoJavascript } from "react-icons/io"
import { DiAndroid } from "react-icons/di"
import { FaApple } from "react-icons/fa"
import { SiMysql } from "react-icons/si"
import { SiFirebase } from "react-icons/si"
import { FaHtml5 } from "react-icons/fa"
import { SiCsswizardry } from "react-icons/si"
import { DiMongodb } from "react-icons/di"
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import Modal2 from '../ModalMain/Modal2';
import Modal1 from '../ModalMain/Modal1';
import Modalit from '../ModalMain/Modalit';
import Modalbu from '../ModalMain/Modalbu';
import Modalan from '../ModalMain/Modalan';

const Home = () => {

 

  const handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_27ijyio', 'template_7rduitc',
      e.target, 'user_yWjOkDotrujgk56Nw6I0l')
      .then((result) => {
        console.log(result.text);
        swal.fire(
          'Message sent',
          'Gene will get back to you as soon as we can',
          'success')

      }, (error) => {
        console.log(error.text);
        swal.fire(
          'Message Error',
          error.text,
          'error')
      });
    e.target.reset()
  };




  return (<>
    <div className="banner-area content-less bottom-shape bg-gradient text-light center-item text-color">

      <div className="fixed-shape">
        <img src="shape.svg" alt="Shape" />
      </div>

      <div className="item">
        <div className="container">
          <div className="row align-center">

            <div className="col-lg-6">
              <div className="content">
                <h4 className="wow fadeInLeft" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>IT Software &amp; Design</h4>
                <h2 className="wow fadeInDown" style={{ visibility: 'visible', animationName: 'fadeInDown' }}>Creating a better <strong>IT solutions</strong></h2>

              </div>
            </div>
            <div className="col-lg-6 thumb">
              <img className="wow fadeInUp" src="	home11.png" alt="Thumb" style={{ visibility: 'visible', animationName: 'fadeInUp' }} />
            </div>

          </div>
        </div>
      </div>

      <div className="fixed-shape-bottom">
        <img src="" alt="Shape" />
      </div>

    </div>



    <div className="feature-area half-bg overflow-hidden default-padding-top">
      <div className="container">
        <div className="heading-left">
          <div className="row">
            <div className="col-lg-6">
              <h5>15 years of experience</h5>
              <h2>
                Offer The Latest Software And Solutions To Our customers!
                        </h2>
            </div>
            <div className="col-lg-6">
              <p>
              Who Are We? Well , We provide Web-application that helps organisations achieve exceptional results.
              Reducing Your complexity with your Business/IT with Our Applications Is Our Main Motive. 
              We Provide The Best IT Solutions, including Website , Web-Application , 
              android and Ios Apps development.
                        </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="features-box text-light">
          <div className="row">

            <div className="single-item col-lg-4 col-md-6">
              <div className="item">
                <img src="customservice.png" width="400" height="300" alt="Thumb" />

                <div className="overlay">
                  <div className="info">
                    <h4>Custom Software</h4>
                    {/* <NavLink to="#"><i className="fas fa-angle-right"></i></NavLink> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="single-item col-lg-4 col-md-6">
              <div className="item">
                <img src="pro.png" width="400" height="300" alt="Thumb" />
                <div className="overlay">
                  <div className="info">
                    <h4>Product Design</h4>
                    {/* <NavLink to="#"><i className="fas fa-angle-right"></i></NavLink> */}
                  </div>
                </div>
              </div>
            </div>



            <div className="single-item col-lg-4 col-md-6">
              <div className="item">
                <img src="app.png" width="400" height="300" alt="Thumb" />
                <div className="overlay">
                  <div className="info">
                    <h4>Application developer</h4>
                    {/* <NavLink to="#"><i className="fas fa-angle-right"></i></NavLink> */}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div className="who-we-area-area text-light">
      <div className="container-fluid">
        <div className="who-we-area-box">
          <div className="row">
            <div className="col-lg-6 thumb bg-cover" ><img src="h1.png" alt="" height="400"></img></div>
            <div className="col-lg-6 info">
              <div className="row">
                <div className="col-lg-6 col-md-6 item">
                  <h4>Our Mission</h4>
                  <h2 className="text-blur">Mission</h2>
                  <p>
                    MADCAP Solution is committed to serving our clients for quite a long time.
                    We have a mission to serve the customer to the maximum and keep...
</p>
                  <Modal1 />
                  {/* <NavLink className="btn circle btn-light effect btn-sm">Know More <i className="fas fa-arrow-alt-circle-right"></i></NavLink> */}
                </div>
                <div className="col-lg-6 col-md-6 item">
                  <h4>Our Vision</h4>
                  <h2 className="text-blur">Vision</h2>
                  <p>
                    To create equal opportunities
                    We now offer services in web, software development, digital marketing, search engine optimization, open source technology....                              </p>
                  <Modal2 />

                  {/* <NavLink className="btn circle btn-light effect btn-sm">Know More <i className="fas fa-arrow-alt-circle-right"></i></NavLink> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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
                  MADCAP Solution India is providing search engine optimization service that helps increase your sales.

                  Read More
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
                  Madcap solutions still overlook the importance of a technology startup business plan.
                                </p>
               <Modalbu />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="section bg-light-grey">
      <div className="container">
        <header className="section-header">
          <h2>Technologies We Love &amp; Use For Development</h2>

          <p className="lead">We are inclined towards newer, faster frameworks, and shed legacy ones as soon as we can.</p>
        </header>
        <div className="partner">
          <i className="fareact col-sm-2"   ><FaReact /></i>
          <i className="FaNode  col-sm-2" > <FaNode /></i>
          <i className="FaAngular col-sm-2" ><FaAngular /></i>
          <i className="FaVuejs col-sm-2" ><FaVuejs /></i>
          <i className="DiJava col-sm-2" ><DiJava /></i>
        </div><br></br>
        <div className="partner">
          <i className="IoLogoJavascript col-sm-2"><IoLogoJavascript /></i>
          <i className="DiAndroid  col-sm-2" ><DiAndroid /></i>
          <i className="FaApple col-sm-2" ><FaApple /></i>
          <i className="SiMysql col-sm-2" ><SiMysql /></i>
          <i className="SiFirebase col-sm-2" ><SiFirebase /></i>
        </div><br>
        </br>
        <div className="partner">
          <i className="FaHtml5 col-sm-2" ><FaHtml5 /></i>
          <i className="SiCsswizardry col-sm-2" ><SiCsswizardry /></i>
          <i className="DiMongodb col-sm-2" > <DiMongodb />
          </i>
          <i className="devicon-html5-plain-wordmark colored col-sm-2" ></i>
          <i className="devicon-mysql-plain-wordmark colored col-sm-2" ></i>
        </div>
      </div>
    </section>







    <div className="contact-area overflow-hidden default-padding bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 contact-form-box">
            <div className="heading">
              <h2>Need Help?</h2>
              <p>Reach out to the world’s most reliable IT services.</p>
            </div>
            <Form onSubmit={handleFormSubmit}>
              <div className="row">
                <div className="col-lg-6">
                  <Form.Group controlId="name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"

                      placeholder="Enter your full name"

                    />
                  </Form.Group>
                </div>
                <div className="col-lg-6">
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"

                      placeholder="Enter your email"

                    />
                  </Form.Group>
                </div> </div>
              <Form.Group controlId="phone">
                <Form.Label>phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"

                  placeholder="Enter your phone number "

                />
              </Form.Group>



              <Form.Group controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"

                  placeholder="Enter subject"

                />
              </Form.Group>
              <Form.Group controlId="subject">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"

                  rows="3"
                  placeholder="Enter your message"

                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>

          </div>



          <div className="col-lg-6 info">
            <div className="contact-tabs">
              <ul id="tabs" className="nav nav-tabs">
                <li className="nav-item">
                  <NavLink to="" data-target="#tab1" data-toggle="tab" className="active nav-link">
                    Address
                                </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink to="" data-target="#tab2" data-toggle="tab" className="nav-link">
                    Google Maps
                                </NavLink>
                </li> */}
              </ul>
              <div id="tabsContent" className="tab-content">
                <div id="tab1" className="tab-pane fade active show">
                  <ul>
                    <li>
                      <div className="icon">
                        <i className="FaMapMarkerAlt"> <FaMapMarkerAlt /></i>
                      </div>
                      <div className="info">
                        <p>
                          Our Location
                                                <span>shimoga karnataka 577201</span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="FaEnvelopeOpen"> <FaEnvelopeOpen /></i>
                      </div>
                      <div className="info">
                        <p>
                          Send Us Mail
                                                <span>madcapsloution@gmail.com</span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="FaPhone"><FaPhone /></i>
                      </div>
                      <div className="info">
                        <p>
                          Call Us
                                                <span>+918951515211</span>
                        </p>
                      </div>
                    </li>
                  </ul>
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



  </>);

};
export default Home;
