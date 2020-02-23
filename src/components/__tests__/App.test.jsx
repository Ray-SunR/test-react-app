import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import { Link, Route } from 'react-router-dom';

let wrapper;

it('renders header and routes and ', () => {
  const onSignInOutButtonClickedStub = jest.fn();
  wrapper = shallow(
    <App
      isAuthenticated={true}
      onSignInOutButtonClicked={onSignInOutButtonClickedStub}
    />
  );

  expect(wrapper.find(Route)).toHaveLength(2);
  expect(
    wrapper
      .find(Route)
      .at(0)
      .prop('path')
  ).toEqual('/');
  expect(
    wrapper
      .find(Route)
      .at(1)
      .prop('path')
  ).toEqual('/post');

  expect(wrapper.find(Link)).toHaveLength(2);
  expect(
    wrapper
      .find(Link)
      .at(0)
      .prop('to')
  ).toEqual('/');
  expect(
    wrapper
      .find(Link)
      .at(0)
      .text()
  ).toEqual('Home');
  expect(
    wrapper
      .find(Link)
      .at(1)
      .prop('to')
  ).toEqual('/post');
  expect(
    wrapper
      .find(Link)
      .at(1)
      .text()
  ).toEqual('Post a comment');
});

it('renders sign in button when not authenticated', () => {
  const onSignInOutButtonClickedStub = jest.fn();
  wrapper = shallow(
    <App
      isAuthenticated={false}
      onSignInOutButtonClicked={onSignInOutButtonClickedStub}
    />
  );
  expect(
    wrapper
      .find('button')
      .at(0)
      .text()
  ).toEqual('Sign in');

  wrapper.find('button').simulate('click');
  wrapper.update();
  expect(onSignInOutButtonClickedStub).toHaveBeenCalled();
  expect(onSignInOutButtonClickedStub).toHaveBeenCalledWith(false);
});

it('renders sign out button when authenticated', () => {
  const onSignInOutButtonClickedStub = jest.fn();
  wrapper = shallow(
    <App
      isAuthenticated={true}
      onSignInOutButtonClicked={onSignInOutButtonClickedStub}
    />
  );
  expect(
    wrapper
      .find('button')
      .at(0)
      .text()
  ).toEqual('Sign out');

  wrapper.find('button').simulate('click');
  wrapper.update();
  expect(onSignInOutButtonClickedStub).toHaveBeenCalled();
  expect(onSignInOutButtonClickedStub).toHaveBeenCalledWith(true);
});
