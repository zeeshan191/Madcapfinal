import React,{useState} from 'react';
import { Modal } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';



const Modalbu = () => {
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
            Business Planning
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
            MADCAP solutions still overlook the importance of a technology startup business plan. In a space as competitive as the tech industry, a lack of preparation will surely pave the way to disappointment. 

            Instead of diving in without any concrete strategy, a plan provides a foundation for sustainable business growth.
            Having a business plan will give you a much better understanding of your business and the objectives you are trying to achieve. Even the most basic technology startup business plan example will seek to define your goals in more objective terms.
            A report from the Harvard Business Review found that companies with a business plan are 16% more likely to succeed.

Furthermore, companies that have a business plan also enjoy higher growth rates than companies without a plan.
Over time, you can use marketing to nurture stronger customer relationships, which in turn, help you build an audience of loyal followers that will, hopefully, become customers.

The marketing section of your business plan will need to account for several factors, including your goals, risks in the market, and your budget. Which brings us to the final aspect of your tech startup business plan.
            </p>
          </Modal.Body>
        </Modal>
      </>
    );
  };
  export default Modalbu;