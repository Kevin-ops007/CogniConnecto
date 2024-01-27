import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function JobDetails(props) {
  const data = props.data;
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {data.Company}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>About The Job</h4>
        <p>
          <strong>Company:</strong> {data.Company}
          <br />
          <strong>Location:</strong> {data.Location}
          <br />
          <strong>Disability Type:</strong> {data["Disability Type"]}
        </p>
        <p>
          <strong>Overview</strong>
        </p>
        <p>{data.Description}</p>
        <p>
          <small>Reference Number: {data.uuid}</small>
        </p>
      </Modal.Body>
    </>
  );
}

export default JobDetails;
