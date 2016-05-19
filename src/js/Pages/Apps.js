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
                <span className="Apps__panel--pos">
                    <img src="./Assets/Apps/help.png" alt="help" className="Apps__panel__help--pos" />
                    <img src="./Assets/Apps/notifications.png" alt="notice" className="Apps__panel__notice--pos"/>
                    <img src="./Assets/Apps/apps.png" alt="apps" className="Apps__panel__apps--pos" />
                    <img src="./Assets/Apps/jeff-copy.png" alt="pic" className="Apps__panel__pic--pos" />
                </span>
                <img src="./Assets/Apps/logo.png" alt="logo" className="logo--position" />

                <AppBox />

                <Footer /> 
            </div>
        );
    }
});

export default Apps;