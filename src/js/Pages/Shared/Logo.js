// This component loads the logo displayed at the top
// of all pages in this application
// Author: Anton Terekhovskyy
// Date: Apr. 28, 2016

import React from "react";

export default class Logo extends React.Component{
    render(){
        return (
            <div className="logo--position">
                <img src="./Assets/L1/WdoH.png" alt="Logo" />
            </div>
        );
    }
};