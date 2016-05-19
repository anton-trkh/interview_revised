// this is the second login screen, it is displayed
// if the user enters the correct password/email combination
// in Login1 screen
// this screen has a field for confirming the password
// and a 'submit' button, 
// when 'submit' is clicked if the password matches user will be taken to the final
// 'Apps' screen, otherwise the 'submit' field will shake
// Author: Anton Terekhovskyy
// Date: Apr. 28, 2016

import React from 'react';
import Footer from './Shared/Footer.js';
import submitID from "../Redux/actions.js";

var $ = require("jquery");
require("jquery-ui");

const Login2 = React.createClass({
    // this function check password validity, then dispatch an action
    // with the password, email, and the currently active screen
    submit(){
        var password = document.getElementById('L2__password__field').value;
        if (password != 'makeithappen'){
            $("#shakeit2").effect("shake", {}, 1000);
        }
        this.props.store.dispatch(submitID('jeff@focus21.io', password, 'L2'))
    },    
    render(){
        return(
            <div className="L2" >
                <img src="./Assets/L2/logo.png" alt="logo" className="logo--position"/>
                
                <img src="./Assets/L2/jeff-pic.png" alt="logo" className="picture--position"/>
                
                <div className="user--position">
                    <div className="font--big--bold user__name--position user__name--position">
                        Jeffrey Aramini
                    </div>
                    <div className='user__email--position' >
                        jeff_aramini@ihealthsolutions.net
                    </div>
                </div>
                
                <div className="field--blue field--border text--center pass--position" id='L2__password'>
                    <span>
                        <img src='./Assets/L1/group-2.png' alt='img' className='field__passIcon--position' />
                        <input type='password' id='L2__password__field' placeholder='PASSWORD' className='field__input--dim field__input--shift' />
                    </span>
                </div>
                
                <div onClick={this.submit} id="shakeit2" className="text--center field--blue field--border field--fill font--bold font--white button--position"> 
                    Submit 
                </div>

                <div className="help--position" >Need help?</div>
                
                <img src="./Assets/L2/logo-thumbnail.png" alt="logo" className="panel--position" />
                
                <Footer />
            </div>
        );
    }
});

export default Login2;