import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const rootElement = (document.getElementById('root') as HTMLElement);
ReactDOM.render(
  <App />,
  rootElement
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const ReloadedApp = require('./App').default;
    ReactDOM.render(
      <ReloadedApp />,
      rootElement
    );
  })
}

registerServiceWorker();
