import React from 'react';
import ReactDOM from 'react-dom';
import { Router, match, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from 'routes';
import store from 'store';
import prepareData from 'helpers/prepareData';

import DevTools from 'containers/DevTools';

function historyCb(location) {
  match({ location, routes }, (error, redirect, state) => {
    if (!error && !redirect) {
      prepareData(store, state);
    }
  });
}

browserHistory.listenBefore(historyCb(location));

historyCb(window.location);

const App = () => (
  React.createElement(
    Provider,
    { store },
    React.createElement(
      Router,
      { history: browserHistory, routes }
    )
  )
);

ReactDOM.render(
  React.createElement(
    DevTools,
    { store }
  ),
  document.getElementById('devtools')
);

export default App;
