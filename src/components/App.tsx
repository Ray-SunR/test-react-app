import React from 'react';
import CommentBoxContainer from 'containers/CommentBoxContainer';
import CommentListContainer from 'containers/CommentListContainer';
import { Route, Link } from 'react-router-dom';

interface AppProps {
  isAuthenticated: boolean;
  onSignInOutButtonClicked: (isAuthenticated: boolean) => void;
}

export default class App extends React.Component<AppProps> {
  renderButton = () => {
    const text = this.props.isAuthenticated ? 'Sign out' : 'Sign in';
    return (
      <button
        onClick={() =>
          this.props.onSignInOutButtonClicked(this.props.isAuthenticated)
        }>
        {text}
      </button>
    );
  };

  renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/post'>Post a comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  };

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path='/' exact component={CommentListContainer} />
        <Route path='/post' component={CommentBoxContainer} />
      </div>
    );
  }
}
