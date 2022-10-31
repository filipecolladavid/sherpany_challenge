import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ConfirmationModal = ({ show }) => {
  return (
    <Modal show={show}>
      <Modal.Body className="text-center">Submited with success</Modal.Body>
      <Modal.Footer>
        <Link to="/">
          <Button variant="primary">
            Ok
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationModal;