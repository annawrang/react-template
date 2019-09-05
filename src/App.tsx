import React from 'react';
import './App.css';
import Menu from './components/menu/menu';
import Home from './components/home/home';
import About from './components/about/about';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import { LinkContainer } from 'react-router-bootstrap';

interface Istate {
  loginOpen: boolean;
  signupOpen: boolean;
}
interface Iprops { }

class App extends React.Component<Iprops, Istate> {
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
    return (

      <BrowserRouter>
          <Menu />
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
        </div>
      </BrowserRouter>

    )
  }
}

export default App;
