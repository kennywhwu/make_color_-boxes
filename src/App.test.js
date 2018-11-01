import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

it('renders without children or crashing', function() {
  let wrapper = shallow(<App />);
  console.log(wrapper.debug());
});

it('renders with children without crashing', function() {
  let wrapper = mount(<App />);
  console.log(wrapper.debug());
});
