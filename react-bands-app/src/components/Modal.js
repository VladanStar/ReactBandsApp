import React from "react";
import {Modal} from "react-bootstrap";
import {Button}  from "react-bootstrap";

const ModalDialog =({currentBand,show, handleClose})=>{
    return(
       
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{currentBand.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{currentBand.info}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    
    );
}
export default ModalDialog;