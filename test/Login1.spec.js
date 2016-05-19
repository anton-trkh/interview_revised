//This module checks the react component <Login1/>
//
//Author: Anton Terekhovskyy
//Date: Apr. 28, 2016

import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Login1 from "../src/js/Pages/Login1.js"

//this test checks if Login1 has a component with id 'shakeit', which has an onClick action
describe('<Login1/>', function(){
    it("has a submit 'div' with onClick defined", function(){
        const topLevel = shallow(<Login1/>);
        const button = topLevel.find('#shakeit');
        expect(button.props().onClick).to.be.defined;
    });
});

//Login1 has a component with id: 'L1__loginID'
describe('<Login1/>', function(){
    it("Has an email input component", function(){
        const topLevel = shallow(<Login1/>);
        expect(topLevel.find('#L1__loginID')).to.have.length(1);
    });
});

//Login1 has a component with id: 'L1__password'
describe('<Login1/>', function(){
    it("Has a password input component", function(){
        const topLevel = shallow(<Login1/>);
        expect(topLevel.find('#L1__password')).to.have.length(1);
    });
});