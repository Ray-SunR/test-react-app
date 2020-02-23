import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from 'containers/AppContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from 'Root';

ReactDOM.render(
  <Root initialState={{}}>
    <BrowserRouter>
      <Route path='/' component={AppContainer} />
    </BrowserRouter>
  </Root>,
  document.getElementById('root')
);
