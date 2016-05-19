// This module loads the 'app' images into the view screen
// it is rendered by the Apps component
// Author: Anton Terekhovskyy
// Date: Apr. 28, 2016

import React from 'react';

const AppBox = React.createClass({
    render(){
        return(
            <div className='Apps__box--pos'>
                <div className='Apps__box__1--pos Apps__box--cDim Apps__box--outline'>
                    <img src="./Assets/Apps/group-2.png" alt="interop" className='Apps__box__icon--center35x26' />
                </div>
                <div className='Apps__box__2--pos Apps__box--cDim Apps__box--simpleBorder'>
                    <img src="./Assets/Apps/page-1.png" alt="voms" className='Apps__box__icon--center40x28' />
                </div>
                <div className='Apps__box__3--pos Apps__box--cDim Apps__box--simpleBorder'>
                    <img src="./Assets/Apps/page-2.png" alt="voms" className='Apps__box__icon--center40x28' />
                </div>
				
				
                <div className='Apps__box__4--pos Apps__box--cDim Apps__box--simpleBorder'>
                    <img src="./Assets/Apps/group-2.png" alt="interop" className='Apps__box__icon--center35x26' />
                </div>
                <div className='Apps__box__5--pos Apps__box--cDim Apps__box--simpleBorder'>
                    <img src="./Assets/Apps/group-2.png" alt="interop" className='Apps__box__icon--center35x26' />
                </div>
                <div className='Apps__box__6--pos Apps__box--cDim Apps__box--simpleBorder'>
                    <img src="./Assets/Apps/group-2.png" alt="interop" className='Apps__box__icon--center35x26' />
                </div>
				
				
                <div className='Apps__box__7--pos Apps__box--cDim Apps__box--simpleBorder'>
                    <img src="./Assets/Apps/group-2.png" alt="interop" className='Apps__box__icon--center35x26' />
                </div>
                <div className='Apps__box__8--pos Apps__box--cDim Apps__box--simpleBorder'>
                    <img src="./Assets/Apps/group-2.png" alt="interop" className='Apps__box__icon--center35x26' />
                </div>
                <div className='Apps__box__9--pos Apps__box--cDim Apps__box--simpleBorder'>
                    <img src="./Assets/Apps/group-2.png" alt="interop" className='Apps__box__icon--center35x26' />
                </div>
            </div>
        );
    }

});

export default AppBox;