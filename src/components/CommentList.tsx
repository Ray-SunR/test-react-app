import React from 'react';

export interface CommentListProps {
  comments: string[];
  isLoading: boolean;
}

class CommentList extends React.Component<CommentListProps> {
  renderComments = () => {
    return this.props.comments.map((comment) => (
      <li key={comment}>{comment}</li>
    ));
  };

  render() {
    if (this.props.isLoading) {
      return <div> Loading... </div>;
    } else {
      return (
        <div>
          <h4>Hello World</h4>
          <div>
            <ul>{this.renderComments()}</ul>
          </div>
        </div>
      );
    }
  }
}

export default CommentList;
