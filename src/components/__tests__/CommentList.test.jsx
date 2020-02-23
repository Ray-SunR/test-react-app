import React from 'react';
import CommentList from 'components/CommentList';
import { shallow } from 'enzyme';

let wrapper;
let comments;
beforeEach(() => {
  comments = ['a', 'b', 'c'];
  wrapper = shallow(<CommentList comments={comments} />);
});

it('shows comments as list', () => {
  expect(wrapper.find('li')).toHaveLength(comments.length);
  expect(wrapper.find('li').at(0).text()).toEqual(comments[0]);
  expect(wrapper.find('li').at(1).text()).toEqual(comments[1]);
  expect(wrapper.find('li').at(2).text()).toEqual(comments[2]);
});
