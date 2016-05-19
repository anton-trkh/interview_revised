//this  ensures only one of the components (Login1, Login2, Apps)
//is loaded at any time, and the component rendered matches 
//the 'visible' prop
//
//Author: Anton Terekhovskyy
//Date: Apr. 28, 2016

import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Home from "../src/js/Pages/Home.js"
import Login1 from "../src/js/Pages/Login1.js"
import Login2 from "../src/js/Pages/Login2.js"
import Apps from "../src/js/Pages/Apps.js"

//set props {visible: 'L1'}, expect only one child to exist
describe('<Home/>', function(){
    it("when props.visible = 'L1' only one view component is rendered", function(){
        const topLevel = shallow(<Home/>);
        topLevel.setProps({visible: 'L1'});
        expect(topLevel.children()).to.have.length(1);
    })
});

//set props {visible: 'L1'}, expect Login1 to exist
describe('<Home/>', function(){
    it("when props.visible = 'L1' Login1 will be rendered", function(){
        const topLevel = shallow(<Home/>);
        topLevel.setProps({visible: 'L1'});
        expect(topLevel.find(Login1)).to.have.length(1);
    })
});

//set props {visible: 'L2'}, expect only one child to exist
describe('<Home/>', function(){
    it("when props.visible = 'L2' only one component is rendered", function(){
        const topLevel = shallow(<Home/>);
        topLevel.setProps({visible: 'L2'});
        expect(topLevel.children()).to.have.length(1);
    })
});

//set props {visible: 'L2'}, expect Login2 to exist
describe('<Home/>', function(){
    it("when props.visible = 'L2' Login2 will be rendered", function(){
        const topLevel = shallow(<Home/>);
        topLevel.setProps({visible: 'L2'});
        expect(topLevel.find(Login2)).to.have.length(1);
    })
});

//set props {visible: 'Apps'}, expect only one child to exist
describe('<Home/>', function(){
    it("when props.visible = 'Apps' only one component is rendered", function(){
        const topLevel = shallow(<Home/>);
        topLevel.setProps({visible: 'Apps'});
        expect(topLevel.children()).to.have.length(1);
    })
});

//set props {visible: 'Apps'}, expect Login2 to exist
describe('<Home/>', function(){
    it("when props.visible = 'Apps' Apps will be rendered", function(){
        const topLevel = shallow(<Home/>);
        topLevel.setProps({visible: 'Apps'});
        expect(topLevel.find(Apps)).to.have.length(1);
    })
});

//if state is something else nothing should render
describe('<Home/>', function(){
    it("when props.visible = 'VandelayIndustries' no components are rendered", function(){
        const topLevel = shallow(<Home/>);
        topLevel.setProps({visible: 'VandelayIndustries'});
        expect(topLevel.children()).to.have.length(0);
    })
});