//this modulechecks <Apps/> react component
//
//Author: Anton Terekhovskyy
//Date: Apr. 28, 2016

import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Apps from "../src/js/Pages/Apps.js"
import AppBox from "../src/js/Pages/Apps/AppBox.js"
import Footer from "../src/js/Pages/Shared/Footer.js"


describe('<Apps/>', function(){
    it('Has an AppBox component', function(){
        const topLevel = shallow(<Apps />);
        expect(topLevel.find(AppBox)).to.have.length(1);
    })
});

describe('<Apps/>', function(){
    it('Has a Footer component', function(){
        const topLevel = shallow(<Apps />);
        expect(topLevel.find(Footer)).to.have.length(1);
    })
});