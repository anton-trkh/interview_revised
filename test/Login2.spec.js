//This module checks the react component <Login2/>
//
//Author: Anton Terekhovskyy
//Date: Apr. 28, 2016

import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Login2 from "../src/js/Pages/Login2.js"

//this test checks if Login1 has a component with id 'shakeit2', which has an onClick action
describe('<Login2/>', function(){
    it("has a submit 'div' with onClick defined", function(){
        const topLevel = shallow(<Login2/>);
        const button = topLevel.find('#shakeit2');
        expect(button.props().onClick).to.be.defined;
    });
});

//Login2 has a component with id: 'L2__password'
describe('<Login2/>', function(){
    it("Has a password input component", function(){
        const topLevel = shallow(<Login2/>);
        expect(topLevel.find('#L2__password')).to.have.length(1);
    });
});