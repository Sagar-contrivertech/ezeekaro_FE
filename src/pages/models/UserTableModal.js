import React , {useState} from 'react'
// import { Button  } from 'react-bootstrap/lib/inputgroup';
import { Modal , Button } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
function UserTableModal(props) {
    const [show, setShow] = useState(props.show);
    console.log(show , "Usermodal pro")
    // const [show, setShow] = useState(props.show);
    // const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  
  return (
        <>
          
            {
                show ? 
                    <Modal.Dialog >
                        <Modal.Header closeButton>
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>Modal body text goes here.</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                            <Button variant="primary" onClick={handleClose}>Save changes</Button>
                        </Modal.Footer>
                    </Modal.Dialog> : console.log("Hello ") 
            }
                    
        </>
    );      
}

export default UserTableModal