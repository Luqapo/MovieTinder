import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { App } from './App';
import NavBar from './containers/NavBar/NavBar';

configure({adapter: new Adapter()});

describe('<App />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('should render NavBar', () => {
        expect(wrapper.find(NavBar)).toHaveLength(1);
    });

    it('should render Switch', () => {
        expect(wrapper.find(Switch)).toHaveLength(1);
    });

    it('should render 3 Route', () => {
        expect(wrapper.find(Route)).toHaveLength(3);
    })
})