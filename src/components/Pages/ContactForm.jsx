import React from 'react';
import emailjs from 'emailjs-com';
import { NavLink } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import './Contact.css';

import { useForm } from 'react-hook-form';
import swal from 'sweetalert2';
import Breadcrumb from '../Common/Breadcrumb';
import Footer from '../Common/Footer';
const ContactForm = () => {
  const { register, errors } = useForm();


  const handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_27ijyio', 'template_7rduitc',
      e.target, 'user_yWjOkDotrujgk56Nw6I0l')
      .then((result) => {
        console.log(result.text);
        swal.fire(
          'Message sent',
          'we will get back to you as soon as we can',
          'success')

      }, (error) => {
        console.log(error.text);
        swal.fire(
          'Message Error',
          error.text,
          'error')
      });
    e.target.reset()
  }

  return (
    <>
      <div>
        <Breadcrumb title="ContactUs" tagline="For digital and robotic future " />
      </div>

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
                    {errors.user_name && errors.user_name.type === "required" && (
                      <div role="alert">Name is required<br /></div>
                    )}
                    <Form.Group controlId="name">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"

                        placeholder="Enter your full name"
                        maxLength='30'
                        aria-invalid={errors.name ? "true" : "false"}
                        ref={register({ required: true })} />


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
    </>
  );
};

export default ContactForm;
