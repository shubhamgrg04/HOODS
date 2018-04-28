import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import home from './containers/home';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const initialState = {};
const middleware = applyMiddleware(thunk, logger);
const store = createStore(allReducers, initialState, middleware);

class App extends Component {
    render() {
      return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand logo mr-auto" href="#" ><span className="color-primary">HOODS</span></a>
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">My Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
              <BrowserRouter >
                <Route path="/" component={home} />
              </BrowserRouter>

        </div>
      );
    }
  }

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
        , document.getElementById('root'));
