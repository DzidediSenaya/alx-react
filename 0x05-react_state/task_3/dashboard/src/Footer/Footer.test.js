import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { AppContext } from '../App/AppContext';

describe('Footer component', () => {
  it('should render correctly without contact link when user is logged out', () => {
    const wrapper = shallow(<Footer />, {
      context: {
        user: { isLoggedIn: false }
      }
    });
    expect(wrapper.find('a').exists()).toBe(false);
  });

  it('should render correctly with contact link when user is logged in', () => {
    const wrapper = shallow(<Footer />, {
      context: {
        user: { isLoggedIn: true }
      }
    });
    expect(wrapper.find('a').exists()).toBe(true);
  });
});

