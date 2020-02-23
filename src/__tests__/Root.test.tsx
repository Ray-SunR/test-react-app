import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import Root from 'Root';
import * as Actions from 'actions';

let wrapper: any;
let fetchCommentStub: any = jest.spyOn(Actions, 'fetchComments');

it('Will dispatch fetchComment action when mounted', () => {
  wrapper = shallow(
    <Root initialState={{}}>
      <App />
    </Root>
  );
  wrapper.update();
  expect(wrapper.find(App)).toHaveLength(1);
  expect(fetchCommentStub).toHaveBeenCalled;
});
