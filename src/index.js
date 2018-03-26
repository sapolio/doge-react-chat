import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import 'typeface-roboto/index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import App from './components/App';
import './index.css';

const rootEl = document.getElementById('root');

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl,
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      rootEl,
    );
  });
}

registerServiceWorker();
