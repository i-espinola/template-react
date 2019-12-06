import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// CSS MAIN IMPORT
import '../assets/scss/main.scss';

// COMPONENTS VIEWS IMPORTS
import Home from "./home";

const initState = {

}

export default class Main extends React.Component
{
    /**
     * @param {any} props
     */
    constructor (props)
    {
        super(props);
        this.state = { ...initState }
    }


    render ()
    {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/home/" render={() => <Home/>}/>
                    <Redirect from='*' to='/home' />
                </Switch>
            </BrowserRouter>
        )
    }
}
