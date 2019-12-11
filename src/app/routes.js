import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import React from "react";

// CSS MAIN IMPORT
import './assets/scss/main.scss';

// COMPONENTS VIEWS IMPORTS
import Home from "./views/home";

export default props => (
    <Router>
        <Switch>
            <Route exact path="/home" component={Home}/>
            <Redirect from='*' to='/home' />
        </Switch>
    </Router>
)
