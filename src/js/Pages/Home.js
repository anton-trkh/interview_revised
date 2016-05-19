//This is the top-level component for the application
//it recieves a 'visible' property from the redux store
//and renders one of the 3 screen views for each of the possible values
//of 'visible' prop
// Author: Anton Terekhovskyy
// Date: Apr. 28, 2016

import React from 'react';
import ReactDOM from 'react-dom';
import Login1 from './Login1.js';
import Login2 from './Login2.js';
import Apps from './Apps.js';

const Home = React.createClass({
    render(){
        return (
            <div id='views' className="container-fluid">
                {this.props.visible == 'L1' ? <Login1 store={this.props.store} /> : null}
                {this.props.visible == 'L2' ? <Login2 store={this.props.store} /> : null}
                {this.props.visible == 'Apps' ? <Apps store={this.props.store} /> : null}
            </div>
        );
    }
});

export default Home;