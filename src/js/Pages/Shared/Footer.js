// This component is the footer displayed at the bottom of
// all three pages (Login1, Login2, Apps)
// Author: Anton Terekhovskyy
// Date: Apr. 28, 2016

import React from 'react';

export default class Footer extends React.Component{
    render(){
        return(
			<div>
				<span className="text-center center-block">
					<span className="font--sign">&copy;</span>
					<span className="font--smaller"> Scientific Technologies Corporation 2016 </span>
				</span>
			</div>
        );
    }
};