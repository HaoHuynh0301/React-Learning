import { Component } from "react";
import Header from './../newsComponents/Header.js'
import Login from './../newsComponents/Login.js'
import Nav from './../newsComponents/Nav.js'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class DirectRouter extends Component { 
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Nav />
                            <Header />
                        </Route>

                        <Route path="/login">
                            <Login />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default DirectRouter;
