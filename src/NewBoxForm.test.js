import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NewBoxForm from './NewBoxForm';

// Smoke Test
it('renders without crashing', function() {
  shallow(<NewBoxForm />);
});

// Snapshot Test
it('matches snapshot', function() {
  let wrapper = shallow(<NewBoxForm />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

// // Simulate submit form
// it('can be submitted with expected output', function() {
//   let wrapper = shallow(<NewBoxForm />);

//   wrapper.setState({
//     color: 'red',
//     width: '1050px',
//     height: '50px'
//   });
//   wrapper.simulate('submit');
//   let i_elem = wrapper.find('i').first();
//   // note {42}, not just 42 --- has to match exactly
//   expect(i_elem.equals(<i>{43}</i>)).toBe(true);
// }); // end
