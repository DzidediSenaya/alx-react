// Footer.test.js
import React from 'react';
import { shallow } from 'enzyme'; // Assuming you're using Enzyme for shallow rendering
import Footer from './Footer';

test('shallow renders Footer component without crashing', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.exists()).toBeTruthy();
});

test('renders the text "Copyright" in Footer component', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.text()).toContain('Copyright');
});

