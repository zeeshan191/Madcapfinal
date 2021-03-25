import React,{useState} from 'react';
import { Modal } from 'react-bootstrap';
import { FaArrowAltCircleRight } from "react-icons/fa"
import {  Button } from 'react-bootstrap';


const Modal2 = () => {
    const [showVision, setShowVision] = useState(false);
  const handleClosevision = () => setShowVision(false);
  const handleShowVision = () => setShowVision(true);
  return (<>
    <Button variant="primary" onClick={handleShowVision}>
    Know More <i className="FaArrowAltCircleRight"> <FaArrowAltCircleRight />
  </i>
</Button>

    <Modal show={showVision} onHide={handleClosevision} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Our Vision</Modal.Title>
      </Modal.Header>
      <Modal.Body>  To create equal opportunities
      We now offer services in web, software development, digital marketing, search engine optimization, open source technology, e-commerce, project management, corporate training and outsourcing etc. Once we get to know our client’s requirements, we analyze, design, implement, and ensure that we complete the task in less time and cost. As we move on, we don’t forget to include many other things for the benefit of these clients.
                         
                                          </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClosevision}>
          Close
</Button>

      </Modal.Footer>
    </Modal>  </> );
};

    export default Modal2;