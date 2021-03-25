import React,{useState} from 'react';
import { Modal } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';



const Modalan = () => {
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
            Analytic Solutions
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
            Welcome to MADCAP Solutions,   We provide unparalleled Content-optimization  Information Insight to client organizations through the use of cutting-edge, customized reporting systems, analytical models, and database applications.

We are Spreadsheet and Database Experts - However, we take it a significant step further - Our focus is on applying this expertise to real-world, practical solutions in analysis, reporting, and planning for your business.  We are able to combine the theory and the practice together in this manner because our degrees and experience are deeply rooted in Finance and Analytical Sciences.  This platform of dual-expertise is what sets us apart.
We Use technologies Like Oracle , Mongo ,Firebase for our  Analytics Content Optimisation that provides Faster Accessing , Reducing Data Redundancy. The file based data management systems contained multiple files that were stored in many different locations in a system or even across multiple system
We Make Sure Of cleansing, transforming, and modeling data with the goal of discovering useful information
in order For An Optimised Performance And Reduced Data Redundency  </p>
          </Modal.Body>
        </Modal>
      </>
    );
  };
  export default Modalan;