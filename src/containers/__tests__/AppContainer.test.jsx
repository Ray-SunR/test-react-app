import { mapStateToProps, mapDispatchToProps } from 'containers/AppContainer';
import * as Actions from 'actions';

it('should pass isAuthenticated', () => {
  const ret = mapStateToProps({
    auth: {
      isAuthenticated: true,
    },
  });
  expect(ret.isAuthenticated).toBeTruthy();
});

it('should onSignInOutButtonClicked', () => {
  const changeAuthSpy = jest.spyOn(Actions, 'changeAuth');
  const dispatchStub = jest.fn();
  const changeAuthResult = {};
  changeAuthSpy.mockReturnValue(changeAuthResult);
  mapDispatchToProps(dispatchStub).onSignInOutButtonClicked(true);
  expect(dispatchStub).toBeCalled();
  expect(changeAuthSpy).toBeCalledWith(true);
  expect(dispatchStub).toBeCalledWith(changeAuthResult);
});
