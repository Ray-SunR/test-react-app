import { submitComment, typeComment } from 'actions';
import { SUBMIT_COMMENT, TYPE_COMMENT } from 'actions/types';

it('fires SUBMIT_COMMENT action', () => {
  const comment = 'comment';
  const action = submitComment(comment);
  expect(action.type).toEqual(SUBMIT_COMMENT);
  expect(action.payload.comment).toEqual(comment);
});

it('fires TYPE_COMMENT action', () => {
  const comment = 'comment';
  const action = typeComment(comment);
  expect(action.type).toEqual(TYPE_COMMENT);
  expect(action.payload.comment).toEqual(comment);
});
