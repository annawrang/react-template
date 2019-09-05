import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

interface Iprops {
    modalShow: boolean;
    closeSignupModal: () => void
}
interface Istate { }

class Signup extends React.Component<Iprops, Istate> {
    constructor(props: Iprops) {
        super(props);
    }

signupMethod = () => {
        console.log('clicked signup');
        axios.get('http://localhost:8080/signup')
        .then(res => {
            console.log(res)
            console.log('LOGGED IN ------ <3')
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return <div>

            <Modal show={this.props.modalShow}
                onHide={this.props.closeSignupModal}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Sign up</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
    </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Repeat password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicChecbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={() => this.signupMethod()}>
                                Submit
  </Button>
                        </Form>
                    </Modal.Body>
                </Modal.Dialog>

            </Modal>
        </div>
    }
}

export default Signup;