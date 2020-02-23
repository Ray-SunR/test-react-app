import React from 'react';
import { Redirect } from 'react-router';

interface RequireAuthProps {
  isAuthenticated: boolean;
  redirectToRootPath: (history: any) => void;
}

export default (Children: any) => {
  return class RequireAuth extends React.Component<RequireAuthProps> {
    render() {
      if (this.props.isAuthenticated) {
        return <Children {...this.props} />;
      } else {
        return <Redirect to='/' />;
      }
    }
  };
};
