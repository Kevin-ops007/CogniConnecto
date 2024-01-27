import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function PopUp(props) {
  const data = props.data;
  const Content = props.content;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Content />
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopUp;
