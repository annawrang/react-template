import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
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

    closeSignupModal = () => {
        console.log('clicked close signup');
        this.setState({
            signupOpen: false
        })
    }


    closeLoginModal = () => {
        console.log('clicked close login');
        this.setState({
            loginOpen: false
        })
    }

    render() {
        return <div>
            <Navbar bg="light" expand="sm">
                <Navbar.Brand>
                    <Link to="/home">LOGO</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="/home">home</Nav.Link>
                        <Nav.Link href="/about">about</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Button variant="outline-success" onClick={() => { this.setState({ signupOpen: true }) }}>Sign up</Button>
                        <Button variant="outline-success" onClick={() => { this.setState({ loginOpen: true }) }}>Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Signup modalShow={this.state.signupOpen} closeSignupModal={() => this.closeSignupModal()} />
            <Login modalShow={this.state.loginOpen} closeLoginModal={() => this.closeLoginModal()} />
        </div>
    }
}

export default Menu;