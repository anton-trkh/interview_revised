// This is the entry point for webpack and contains
// the render function as well as setting up the application store
// Author: Anton Terekhovskyy
// Date: Apr. 28, 2016

import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, hashHistory } from "react-router";
import {createStore} from 'redux'
import processLogin from './Redux/reducers.js';
import submitID from "./Redux/actions.js"

import Login1 from "./Pages/Login1.js";
import Login2 from "./Pages/Login2.js";
import Apps from "./pages/Apps.js";
import Home from "./Pages/Home.js";

//redux store
const store = createStore(processLogin);

// this function acts as a wrapper for the top-level 'Home' component
// it passes the 'store' variable as a prop to 'Home'
// it also retrieves the current state from the store
// and passes it to 'Home' as a prop 'visible'
const HomeWrapper = React.createClass({
    render(){
        var toLoad = store.getState().ActiveScr;
        return(
            <Home visible={toLoad} store={store}/>
        );
    }
});

//rendering function
function update(){
    ReactDOM.render((
        <Router history={hashHistory}>
            <Route path="/" component={HomeWrapper}></Route>
        </Router>)
        , document.getElementById('app')
    );
}

update();
store.subscribe(update);
