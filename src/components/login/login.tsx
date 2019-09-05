import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

interface Iprops {
    modalShow: boolean;
    closeLoginModal: () => void
}
interface Istate { }

class Login extends React.Component<Iprops, Istate> {
    constructor(props: Iprops) {
        super(props);
    }

    render() {
        return <div>

            <Modal show={this.props.modalShow}
                onHide={this.props.closeLoginModal}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicChecbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
  </Button>
                        </Form>
                    </Modal.Body>

                </Modal.Dialog>

            </Modal>
        </div>
    }
}

export default Login;