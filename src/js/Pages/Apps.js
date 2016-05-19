// This is the final screen in the application
// It displays a series of images contained in the AppBox subcomponent
// Author: Anton Terekhovskyy
// Date: Apr. 28, 2016 

import React from 'react';
import Footer from './Shared/Footer.js';
import submitID from "../Redux/actions.js";
import AppBox from "./Apps/AppBox.js";
import Spacer from "./Shared/Spacer.js";

const Apps = React.createClass({
    render(){
        return(
            <div className="Apps" >
                <div className="row">
					<span className="col-xs-10" />
					<span className="col-xs-2">
						<span>
							<img src="./Assets/Apps/help.png" alt="help" />
							<img src="./Assets/Apps/notifications.png" alt="notice" />
							<img src="./Assets/Apps/apps.png" alt="apps" />
							<img src="./Assets/Apps/jeff-copy.png" alt="pic" />
						</span>
					</span>
                </div>
                <img src="./Assets/Apps/logo.png" alt="logo" className="center-block" />

                <AppBox />

                <Footer /> 
            </div>
        );
    }
});

export default Apps;