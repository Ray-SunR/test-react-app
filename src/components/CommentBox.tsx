import React, { Component } from 'react';

interface CommentBoxProps {
  currentlyTyped: string;
  handleSubmit: (comment: string, event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

class CommentBox extends Component<CommentBoxProps> {
  render() {
    return (
      <form onSubmit={(e) => this.props.handleSubmit(this.props.currentlyTyped, e)}>
        <h4>Add a comment</h4>
        <textarea
          name=''
          id=''
          cols={30}
          rows={10}
          onChange={this.props.handleChange}
          value={this.props.currentlyTyped}
        />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
