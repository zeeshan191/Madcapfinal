import React,{useState} from 'react';
import { Modal } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';









const Modalit = () => {
    const [show, setShow] = useState(false);
  
    return (
      <>
      <NavLink className="btn-standard" to="#" variant="primary" onClick={() => setShow(true)}       >Read More</NavLink>
       
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
            IT Design
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
            MADCAP Solution India is providing search engine optimization service that helps increase your sales. We bring your website on the top in search engine index bar that give more visitor. MADCAP sloution India believes to providing all featured of web development services and also IT Design provides to you the way to market your products online by the different search engines and social media that are available on the web.
            MADCAP Solutions is a IT based web designing company in banglore India. We provide best services to IT Design, as for as MADCAP solutions is an offshore web development company for overseas development firms, so that MADCAP solutions is providing professional and custom web design services in India.

MADCAP solutions is doing work with a team which are professional and active web designers. Our web designers have excellent knowledge in cutting edge web designing,application development, professional web design, custom web design and redesigning of complex to simple and complex websites. Our design must meet W3C standards set by world web consortium.</p>
          </Modal.Body>
        </Modal>
      </>
    );
  };
  export default Modalit;