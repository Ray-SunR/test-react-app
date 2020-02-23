import { IAction, IComments } from 'types';
import { SUBMIT_COMMENT, TYPE_COMMENT, FETCH_COMMENTS } from 'actions/types';

export default (
  state: IComments = {
    currentlyTyped: '',
    comments: [],
    isLoading: false,
  },
  action: IAction
) => {
  switch (action.type) {
    case SUBMIT_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload.comment],
        currentlyTyped: '',
      };
    case TYPE_COMMENT:
      return {
        ...state,
        currentlyTyped: action.payload.comment,
      };
    case FETCH_COMMENTS + '_PENDING':
      return { ...state, isLoading: true };
    case FETCH_COMMENTS + '_REJECTED':
      return { ...state, isLoading: false };
    case FETCH_COMMENTS + '_FULFILLED':
      const fetchedComments = action.payload.map(
        (entry: { body: any }) => entry.body
      );
      return {
        ...state,
        comments: [...fetchedComments, ...state.comments],
        isLoading: false,
      };
    default:
      return state;
  }
};
