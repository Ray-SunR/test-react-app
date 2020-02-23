import commentsReducer from 'reducers/comments';
import { SUBMIT_COMMENT } from 'actions/types';

it('handles actions of type SUBMIT_COMMENT', () => {
  const comment = 'comment';
  const action = {
    type: SUBMIT_COMMENT,
    payload: {
      comment,
    },
  };
  const newState = commentsReducer(
    { comments: [], currentlyTyped: '', isLoading: false },
    action
  );

  expect(newState.comments).toHaveLength(1);
  expect(newState.comments[0]).toEqual(comment);
  expect(newState.currentlyTyped).toEqual('');
});

it('handles action with unkown type', () => {
  const action = {
    type: '',
    payload: {},
  };

  const initialState = {};
  const newState = commentsReducer(initialState as any, action);
  
  expect(newState).toStrictEqual(initialState);
});
