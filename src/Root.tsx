import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'reducers';
import reduxPromise from 'redux-promise';
import reduxPromiseMiddleWare from 'redux-promise-middleware';
import { fetchComments } from 'actions';

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreHelper = (props: any) =>
  createStore(
    reducers,
    props.initialState,
    composeEnhancers(applyMiddleware(reduxPromiseMiddleWare))
  );

export default (props: any) => {
  const store = createStoreHelper(props);
  store.dispatch(fetchComments());
  return <Provider store={store}>{props.children}</Provider>;
};
