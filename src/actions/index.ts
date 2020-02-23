import {
  SUBMIT_COMMENT,
  TYPE_COMMENT,
  FETCH_COMMENTS,
  CHANGE_AUTH,
} from './types';
import axios from 'axios';

export const submitComment = (comment: string) => ({
  type: SUBMIT_COMMENT,
  payload: {
    comment,
  },
});

export const typeComment = (comment: string) => ({
  type: TYPE_COMMENT,
  payload: {
    comment,
  },
});

export const fetchComments = () => {
  return {
    type: FETCH_COMMENTS,
    payload: axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.data),
  };
};

export const changeAuth = (isAuthenticated: boolean) => {
  return {
    type: CHANGE_AUTH,
    payload: {
      isAuthenticated: !isAuthenticated,
    },
  };
};
