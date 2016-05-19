//this module checks that AppBox component renders all it's children components
//
//Author: Anton Terekhovskyy
//Date: Apr. 28, 2016

import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import AppBox from "../src/js/Pages/Apps/AppBox.js"

//there are 9 children in AppBox, one for each 'app'
describe('<AppBox/>', function(){
    it('Has 9 children components', function(){
        const topLevel = shallow(<AppBox />);
        expect(topLevel.children()).to.have.length(9);
    });

});