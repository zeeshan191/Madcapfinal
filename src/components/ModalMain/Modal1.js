import React,{useState} from 'react';
import { Modal } from 'react-bootstrap';
import { FaArrowAltCircleRight } from "react-icons/fa"
import {  Button } from 'react-bootstrap';




const Modal1 = () => {
    const [showMission, setShowMission] = useState(false);
  const handleCloseMission = () => setShowMission(false);
  const handleShowMission = () => setShowMission(true);

    return (<>

 <Button variant="primary" onClick={handleShowMission}>
                  Know More <i className="FaArrowAltCircleRight"> <FaArrowAltCircleRight />
                  </i>
</Button>
        <Modal show={showMission} onHide={handleCloseMission}  dialogClassName="modal-90w" animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Our Mission</Modal.Title>
        </Modal.Header>
        <Modal.Body> MADCAP Solution is committed to serving our clients for quite a long time. We have a mission to serve the customer to the maximum and keep them secure and give the best service in terms of the website design and website development.

        We need to assist our esteemed clients with promoting their organizations, services, and products through the excellent medium of the net to enable them to get maximum exposure, results, and benefits.  Our teams of developers are highly skilled and experienced who can provide the right solution and ideas. So we can help you in attaining broader reach and create positive change.
                                            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseMission}>
            Close
</Button>

        </Modal.Footer>
      </Modal>

      
        </>);
    };
    export default Modal1;
    