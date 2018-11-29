import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Root from './containers/Root';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';

import 'typeface-roboto';

const store = configureStore();

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root'),
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    render(Root);
  });
}

registerServiceWorker();
