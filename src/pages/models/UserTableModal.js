import React , {useState} from 'react'
// import { Button  } from 'react-bootstrap/lib/inputgroup';
import { Modal , Button } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
function UserTableModal(props) {
    const [show, setShow] = useState(false);
    console.log(props , "Usermodal pro")
    // const [show, setShow] = useState(props.show);
    const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  
  return (
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );      
}

export default UserTableModal