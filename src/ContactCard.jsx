import { Col, Card } from "react-bootstrap";

const ContactCard = ({ index, contact, refLast }) => {
  return (
    <Card key={contact.name.first + "_" + index} ref={refLast} className="mx-1 my-1" style={{width:"35rem", flexDirection:"row", alignItems:"center", padding:"10px"}}>
      <Col md = {2}>
        <Card.Img variant="top" src={contact.picture.thumbnail}/>
      </Col>
      <Col md = {10}>
        <Card.Body>
          <Card.Title>{contact.name.first} {contact.name.last}</Card.Title>
          <Card.Text>
            Username: {contact.login.username}
            <br></br>
            Email: {contact.email}
          </Card.Text>
          <Card.Text>
          </Card.Text>
        </Card.Body>
      </Col>
    </Card>
  );
}

export default ContactCard;