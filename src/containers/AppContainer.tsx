import { connect } from 'react-redux';
import App from 'components/App';
import { changeAuth } from 'actions';

export const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export const mapDispatchToProps = (dispatch: any) => ({
  onSignInOutButtonClicked: (isAuthenticated: boolean) => {
    dispatch(changeAuth(isAuthenticated));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
