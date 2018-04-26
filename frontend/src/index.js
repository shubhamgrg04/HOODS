import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
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
          <nav className="navbar navbar-expand-lg container-fluid navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand mr-auto" href="#" style={{color:"#ff9966"}}>HOODS</a>
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
