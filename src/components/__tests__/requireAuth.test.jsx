import React from 'react';
import { shallow } from 'enzyme';
import requireAuth from 'components/requireAuth';
import { Redirect } from 'react-router';

let wrapper;

class TempComp extends React.Component {
  render() {
    return null;
  }
}

it('should render children if authenticated', () => {
  const Hoc = requireAuth(TempComp);
  wrapper = shallow(<Hoc isAuthenticated={true} additionalProps={{}} />);
  expect(wrapper.find(TempComp)).toHaveLength(1);
  expect(wrapper.find(TempComp).prop('additionalProps')).toEqual({});
  expect(wrapper.find(TempComp).prop('isAuthenticated')).toEqual(true);
  wrapper.unmount();
});

it('should redirect to / if not authenticated', () => {
  const Hoc = requireAuth(TempComp);
  wrapper = shallow(<Hoc isAuthenticated={false} additionalProps={{}} />);
  expect(wrapper.find(TempComp)).toHaveLength(0);
  expect(wrapper.find(Redirect)).toHaveLength(1);
  expect(wrapper.find(Redirect).prop('to')).toEqual('/');
  wrapper.unmount();
});
