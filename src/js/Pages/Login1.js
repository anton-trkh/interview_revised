//This is the first screen seen when the page loads
//it contains a text input area for password and email address
//when 'Next' is clicked if the email and password match
//the page will change to the 'Login2' screen
//otherwise the 'Next' component will shake
// Author: Anton Terekhovskyy
// Date: Apr. 28, 2016

import React from "react";
import Logo from "./Shared/Logo.js";
import Footer from "./Shared/Footer.js";
import submitID from "../Redux/actions.js";
import Spacer from "./Shared/Spacer.js";

var $ = require("jquery");
require("jquery-ui");


const Login1 = React.createClass ({
    // this function is invoked on clicking 'Next'
    // it will verify the password and user ID, shaking the 'next' if they do not match
    // it will then dispatch an action with the entered password, and user id
    submit(){
        var uid = document.getElementById('L1__loginID__field').value;
        var password = document.getElementById('L1__password__field').value;
        if (password != 'makeithappen' || uid != 'jeff@focus21.io'){
            $("#shakeit").effect("shake", {}, 1000);
        }
        console.log("Present State:" + this.props.store.getState().ActiveScr);
        this.props.store.dispatch(submitID(uid, password, 'L1'))
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
		
        return (
            <div className="L1" id="Login1" >
			
				<div className="row" >
					<div className="col-md-4" />
					<img src="./Assets/L2/logo.png" alt="logo" className="col-md-3 center-block" style={{width:'250px'}}/>
					<div className="col-md-5" />
                </div>
				
				<div>
					{largeGap}
				</div>
				
				<div className="row">
					<div className="col-md-4" />
					<div className="field--blue field--border col-md-3 center-block" id='L1__loginID'>
						<span>
							<img src='./Assets/L1/group-2.png' alt='icon' />
							<input type='text' id='L1__loginID__field' placeholder="EMAIL" className='field__input--dim'></input>
						</span>
					</div> 
					<div className="col-md-5" />
                </div>

				<Spacer />
				
				<div className="row">
					<div className="col-md-4" />
					<div className="field--blue field--border col-md-3 center-block" id='L1__password'>
						<span>
							<img src='./Assets/L1/group.png' alt='img' />
							<input type='password' id='L1__password__field' placeholder="PASSWORD" className='field__input--dim'/>
						</span>
					</div>
					<div className="col-md-5" />
                </div>
				
				<Spacer />
				
				<div className="row">
					<div className="col-md-4" />
					<div onClick={this.submit} id ='shakeit' className="text--center field--blue field--border field--fill font--bold font--white col-md-3 center-block"> 
						NEXT 
					</div>
					<div className="col-md-5" />
                </div>

				<Spacer />
				
				<div className="row">
					<div className="col-md-5" />
					<div className="font--small font--blue col-md-1 center-block">
						Need&nbsp;Help?
					</div>
					<div className="col-md-6" />
                </div>
				
				<div>
					{smallGap}
				</div>
                
                <Footer></Footer>
            </div>
        );
    }
});

export default Login1;