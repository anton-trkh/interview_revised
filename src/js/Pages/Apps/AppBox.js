// This module loads the 'app' images into the view screen
// it is rendered by the Apps component
// Author: Anton Terekhovskyy
// Date: Apr. 28, 2016

import React from 'react';
import Spacer from "../Shared/Spacer.js";

const AppBox = React.createClass({
    render(){
        return(
			<div>
            <div className='row'>
				<div className='col-xs-2' />
				<div className='col-xs-3'>
					<div className='Apps__box--cDim Apps__box--outline'>
						<img src="./Assets/Apps/group-2.png" alt="interop" className='Apps__box__icon--center35x26' />
					</div>
				</div>
				<div className='col-xs-3'>
					<div className=' Apps__box--cDim Apps__box--simpleBorder'>
						<img src="./Assets/Apps/page-1.png" alt="voms" className='Apps__box__icon--center40x28' />
					</div>
				</div>
				<div className='col-xs-3'>
					<div className=' Apps__box--cDim Apps__box--simpleBorder'>
						<img src="./Assets/Apps/page-2.png" alt="voms" className='Apps__box__icon--center40x28' />
					</div>
				</div>
				<div className='col-xs-1' />
			</div>
			
			<Spacer/>
			
			<div className='row'>
				<div className='col-xs-2' />
				<div className='col-xs-3'>
					<div className=' Apps__box--cDim Apps__box--simpleBorder'>
						<img src="./Assets/Apps/group-2.png" alt="interop" className='Apps__box__icon--center35x26' />
					</div>
				</div>
				<div className='col-xs-3'>
					<div className=' Apps__box--cDim Apps__box--simpleBorder'>
						<img src="./Assets/Apps/group-2.png" alt="interop" className='Apps__box__icon--center35x26' />
					</div>
				</div>
				<div className='col-xs-3'>
					<div className=' Apps__box--cDim Apps__box--simpleBorder'>
						<img src="./Assets/Apps/group-2.png" alt="interop" className='Apps__box__icon--center35x26' />
					</div>
				</div>
				<div className='col-xs-1' />
			</div>
			
			<Spacer/>
			
			<div className='row'>
				<div className='col-xs-2' />
				<div className='col-xs-3'>
					<div className=' Apps__box--cDim Apps__box--simpleBorder'>
						<img src="./Assets/Apps/group-2.png" alt="interop" className='Apps__box__icon--center35x26' />
					</div>
				</div>
				<div className='col-xs-3'>
					<div className=' Apps__box--cDim Apps__box--simpleBorder'>
						<img src="./Assets/Apps/group-2.png" alt="interop" className='Apps__box__icon--center35x26' />
					</div>
				</div>
				<div className='col-xs-3'>
					<div className=' Apps__box--cDim Apps__box--simpleBorder'>
						<img src="./Assets/Apps/group-2.png" alt="interop" className='Apps__box__icon--center35x26' />
					</div>	
				</div>
				<div className='col-xs-1' />
			</div>
			</div>
        );
    }

});

export default AppBox;