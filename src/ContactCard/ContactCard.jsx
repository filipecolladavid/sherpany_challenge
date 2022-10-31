
import "./contactCard.css"
import { Col, Card } from "react-bootstrap";

const ContactCard = ({ handleShow, index, contact, refLast }) => {
  return (
    <Card
      key={contact.name.first + "_" + index}
      ref={refLast}
      onClick={() => handleShow(contact)}
    >
      <Col md={2}>
        <Card.Img variant="top" src={contact.picture.thumbnail} />
      </Col>
      <Col md={10}>
        <Card.Body>
          <Card.Title>{contact.name.first} {contact.name.last}</Card.Title>
          <Card.Text>
            Username: {contact.login.username}
          </Card.Text>
          <Card.Text>
            Email: {contact.email}
          </Card.Text>
        </Card.Body>
      </Col>
    </Card>
  );
}

export default ContactCard;