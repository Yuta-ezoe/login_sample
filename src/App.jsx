//import React, { Component } from 'react';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Auth from './Auth';
import Login from './Login';
import Logout from './Logout';
import List1 from './List1';
import List2 from './List2';
import Exsample from './Exsample';

export default () => {
//  const [a, b] = useState(0);

  return (
    <Router>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />

      <Auth>
        <Switch>
          <Route exact path="/list1" component={List1} />
          <Route exact path="/list2" component={List2} />
          <Route exact path="/Exsample" component={Exsample} />
          <Redirect from="/" to="/list1" />
        </Switch>
      </Auth>
    </Switch>
  </Router>
  )
};



