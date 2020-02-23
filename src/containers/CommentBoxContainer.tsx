import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { submitComment, typeComment } from 'actions';
import CommentBox from 'components/CommentBox';
import { IAction } from 'types';
import requireAuth from 'components/requireAuth';
interface StateFromProps {
  currentlyTyped: string;
  isAuthenticated: boolean;
}

interface DispatchFromProps {
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (
    comment: string,
    event: React.FormEvent<HTMLFormElement>
  ) => void;
}

export const mapStateToProps = (state: any): StateFromProps => {
  return {
    currentlyTyped: state.comments.currentlyTyped,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export const mapDispatchToProps = (
  dispatch: Dispatch<IAction>
): DispatchFromProps => ({
  handleSubmit: (comment: string, event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(submitComment(comment));
  },
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    dispatch(typeComment(event.target.value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(requireAuth(CommentBox));
