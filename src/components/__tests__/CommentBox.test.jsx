import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import sinon from 'sinon';

let wrapper;
const handleChangeStub = sinon.stub();
const handleSubmitStub = sinon.stub();
const currentlyTyped = 'typed';
beforeEach(() => {
  wrapper = mount(
    <CommentBox
      handleSubmit={handleSubmitStub}
      handleChange={handleChangeStub}
      currentlyTyped={currentlyTyped}
    />
  );
});

afterEach(() => {
  wrapper.unmount();
});

it('shows a text area and a button', () => {
  expect(wrapper.find('textarea').exists()).toBeTruthy();
  expect(wrapper.find('button').exists()).toBeTruthy();
});

describe('text area', () => {
  const text = 'text';
  beforeEach(() => {
    wrapper.find('textarea').simulate('change', { target: { value: text } });
    wrapper.update();
  });

  it('has a text area that users can type in', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual(currentlyTyped);
    expect(handleChangeStub.called).toBeTruthy();
  });

  it('empties the value when submit is clicked', () => {
    wrapper.find('textarea').simulate('submit');
    wrapper.update();
    expect(handleSubmitStub.getCall(0).args[0]).toStrictEqual(currentlyTyped);
    expect(handleSubmitStub.getCall(0).args[1].target.value).toStrictEqual(currentlyTyped);
  });
});
