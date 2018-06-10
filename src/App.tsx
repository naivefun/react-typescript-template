import * as React from 'react';

import { Provider as MobxProvider } from 'mobx-react';

import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from 'src/page/HomePage/HomePage';

import logo from './logo.svg';
import { AppState } from './store/AppState';

const appState = new AppState();

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <MobxProvider {...appState}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React Typescript</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
            <h1>{process.env.REACT_APP_ENV_NAME}</h1>

            <Route path="/hello" component={HomePage} />

          </div>
        </MobxProvider>
      </BrowserRouter>
    );
  }
}

export default App;
