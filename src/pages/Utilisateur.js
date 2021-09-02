import React, { useEffect, useContext, useState } from 'react';
import { AppContext } from "../components/contextapi"
import { AuthProvider } from "../context"
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
function Utilisateur() {
  const [message, setMessage] = React.useContext(AppContext);

  useEffect(() => {
    setMessage(true)
  }, [])

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <div className='utilisateur' style={{ marginTop: 30, marginLeft: 30 }}>
      <Row>
        <Col sm={12}>
          <Button variant="primary" onClick={handleShow}>Ajouter Utilisateur</Button>
        </Col>
      </Row>
      <Alert variant='primary' style={{marginTop:20,position:'inherit'}}>
        <p style={{color:'black'}}>
        La liste de tous les utilisateurs
        </p>
      </Alert>

      <Row>
        <Col sm={12}>
          <Table striped bordered hover style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>

                  <img style={{ cursor: 'pointer' }} onClick={handleShow2} src="https://img.icons8.com/fluency/48/000000/filled-trash.png" />
                  <img style={{ cursor: 'pointer' }} src="https://img.icons8.com/color/48/000000/edit--v1.png" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>
                  <img src="https://img.icons8.com/fluency/48/000000/filled-trash.png" />
                  <img src="https://img.icons8.com/color/48/000000/edit--v1.png" />
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>

      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un Utilisateur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Raison</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="debut">
              <Form.Label>Date Debut</Form.Label>
              <Form.Control type="date" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="fin">
              <Form.Label>Date Fin</Form.Label>
              <Form.Control type="date" placeholder="Enter email" />
            </Form.Group>
          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un Utilisateur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Etes-vous sûr de vouloir supprimer ?

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose2}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Utilisateur;
