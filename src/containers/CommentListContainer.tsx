import CommentList from 'components/CommentList';
import { connect } from 'react-redux';

export const mapStateToProps = (state: any) => ({
  comments: state.comments.comments,
  isLoading: state.comments.isLoading,
});

export default connect(mapStateToProps)(CommentList);
