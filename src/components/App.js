import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from '../utils/history';
import PrivateRoute from '../containers/PrivateRoute';
import ChatPage from '../containers/ChatPage';
import Welcome from '../containers/WelcomePage';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/(welcome)?" component={Welcome} />
      <PrivateRoute path="/chat/:chatId?" component={ChatPage} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;
