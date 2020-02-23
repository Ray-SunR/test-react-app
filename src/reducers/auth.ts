import { IAction } from 'types';
import { CHANGE_AUTH } from 'actions/types';

export default (
  state = {
    isAuthenticated: false,
  },
  action: IAction
) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return { ...state, isAuthenticated: action.payload.isAuthenticated };
    default:
      return state;
  }
};
