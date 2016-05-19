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
import Spacer from "./Shared/Spacer.js";

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
		var largeGap = [];
		var smallGap = [];
		for (var i = 0; i < 10; i++){
			largeGap.push(<Spacer key={i}/>);
		};
		for (var i = 0; i < 5; i++){
			smallGap.push(<Spacer key={i}/>);
		};
		
        return(
            <div className="L2" >
				<div className="row">
					<div className="col-md-4" />
					<img src="./Assets/L2/logo.png" alt="logo" className="col-md-3 img-responsive" style={{width:'250px'}}/>
					<div className="col-md-5" />
                </div>
				
				<div>
					{largeGap}
				</div>

				<div className="row">
					<div className="col-md-5" />
					<img src="./Assets/L2/jeff-pic.png" alt="logo" className="col-md-1" style={{width:'100px'}} />
					<div className="col-md-6" />
                </div>				
                
				<Spacer />
                
                <div className="row">
					<div className="col-md-5" />
                    <span className="font--big--bold col-md-1">
                        Jeffrey&nbsp;Aramini
                    </span>
					<div className="col-md-6" />
				</div>
				<div className="row">
					<div className="col-md-5" />
                    <div className='col-md-1 center-block' >
                        jeff@focus21.io
                    </div>
					<div className="col-md-6" />
                </div>
                
				<Spacer />

				<div className="row">
					<div className="col-md-4" />
					<div className="field--blue field--border col-md-3" id='L1__password'>
						<span>
							<img src='./Assets/L1/group-2.png' alt='img' />
							<input type='password' id='L2__password__field' placeholder="PASSWORD" className='field__input--dim'/>
						</span>
					</div>
					<div className="col-md-5" />
                </div>
                
				<Spacer />
				
				<div className="row">
					<div className="col-md-4" />
					<div onClick={this.submit} id ='shakeit2' className="text--center field--blue field--border field--fill font--bold font--white col-md-3"> 
						Submit 
					</div>
					<div className="col-md-5" />
                </div>
				
				
				<div className="row">
					<div className="col-md-5" />
					<div className="font--small font--blue col-md-1 text-nowrap">
						Need Help?
					</div>
					<div className="col-md-6" />
                </div>
                
				<div>
					{smallGap}
				</div>
				
				<div className='row'>
					<div className="col-md-2" />
					<img src="./Assets/L2/logo-thumbnail.png" alt="logo" className="col-md-8" />
					<div className="col-md-2" />
                </div>
                <Footer />
            </div>
        );
    }
});

export default Login2;