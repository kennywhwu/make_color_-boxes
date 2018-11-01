import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BoxList from './BoxList';

// Smoke Test
it('renders without crashing', function() {
  shallow(<BoxList />);
});

// Snapshot Test
it('matches snapshot', function() {
  let wrapper = shallow(<BoxList />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
