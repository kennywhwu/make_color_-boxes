import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Box from './Box';

// Smoke test
it('renders without crashing', function() {
  shallow(<Box />);
});

// Snapshot Test
it('matches snapshot', function() {
  let wrapper = shallow(<Box />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
