import React from 'react';
import Home from '../home/home';
import About from '../about/about';
import Menu from '../menu/menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
    </Switch>
)

export default Main;