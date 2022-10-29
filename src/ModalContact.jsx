import { Modal, Button, Row, Col } from "react-bootstrap"

const ModalContact = ({ show, handleClose, contact }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row style={{ alignItems: "center" }}>
          <Col md={4}>
            <img src={contact.picture.thumbnail} alt="thumbnail" style={{ height: "100px" }}></img>
          </Col>
          <Col md={8}>
            {contact.name.title}. {contact.name.first} {contact.name.last}
            <br></br>
            <b>Username:</b> {contact.login.username}
            <br></br>
            <b>Email:</b> {contact.email}
          </Col>
        </Row>
        <Row style={{ marginTop: "20px", alignContent: "center" }}>
          <Col>
            Street: {contact.location.street.name}, {contact.location.street.number}
            <br></br>
            City: {contact.location.city}
            <br></br>
            State: {contact.location.state}
            <br></br>
            Postcode: {contact.location.postcode}
            <br></br>
            Phone: {contact.phone}
            <br></br>
            Cell: {contact.cell}
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