import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

// No Auth Required
import Header from './Header';
import Landing from './Landing';
import Auth from './auth/AuthOverview';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';

// Auth Required
import SignOut from './auth/SignOut';
import CreateProfile from './profile/CreateProfile';
import ShowDisasters from './disasters/ShowDisasters';
import ShowDisaster from './disasters/ShowDisaster';
import Test from './test/Test';

import '../style/main.css';

class App extends Component {

  render() {
    return (
      <div id="wrapper">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signout" component={SignOut} />
            <Route exact path="/feature" component={Test} />
            <Route exact path="/profile" component={CreateProfile} />
            <Route exact path="/disasters" component={ShowDisasters} />
            <Route path="/disasters/:id" component={ShowDisaster} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
