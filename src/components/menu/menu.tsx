import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Login from '../login/login';
import Signup from '../signup/signup';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

interface Istate {
    loginOpen: boolean;
    signupOpen: boolean;
}
interface Iprops { }

class Menu extends React.Component<Iprops, Istate> {
    constructor(props: Iprops) {
        super(props);
        this.state = {
            loginOpen: false,
            signupOpen: false
        };
    }

    closeLoginModal = () => {
        console.log('clicked close login');
        this.setState({
            loginOpen: false
        })
    }

    closeSignupModal = () => {
        console.log('clicked close signup');
        this.setState({
            signupOpen: false
        })
    }

    render() {
        return <div>
            <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand>
                    <Link to="/home">Some name... </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/home">
                            <Nav.Link>
                                Home
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>
                                About
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                    <Button variant="outline-success" onClick={() => { this.setState({ signupOpen: true }) }}>Sign up</Button>
                    <Button variant="outline-success" onClick={() => { this.setState({ loginOpen: true }) }}>Login</Button>
                </Navbar.Collapse>
            </Navbar>
            <Signup modalShow={this.state.signupOpen} closeSignupModal={() => this.closeSignupModal()} />
            <Login modalShow={this.state.loginOpen} closeLoginModal={() => this.closeLoginModal()} />
        </div>
    }
}

export default Menu;