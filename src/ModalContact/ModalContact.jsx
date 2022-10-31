import { Modal, Button, Row, Col } from "react-bootstrap"
import "./modalContact.css"

const ModalContact = ({ show, handleClose, contact }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={4}>
            <img src={contact.picture.thumbnail} alt="thumbnail" style={{ height: "100px" }}></img>
          </Col>
          <Col md={8}>
            <b>Name:</b> {contact.name.title}. {contact.name.first} {contact.name.last}
            <br></br>
            <b>Username:</b> {contact.login.username}
            <br></br>
            <b>Email:</b> {contact.email}
          </Col>
        </Row>
        <Row>
          <Col>
            <b>Street:</b> {contact.location.street.name}, {contact.location.street.number}
            <br></br>
            <b>City:</b> {contact.location.city}
            <br></br>
            <b>State:</b> {contact.location.state}
            <br></br>
            <b>Postcode:</b> {contact.location.postcode}
            <br></br>
            <b>Phone:</b> {contact.phone}
            <br></br>
            <b>Cell:</b> {contact.cell}
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalContact;