import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import PrivateRoute from '../containers/PrivateRoute';
import configureStore from '../store';
import ChatPage from '../containers/ChatPage';
import Welcome from '../containers/WelcomePage';



const store = configureStore();


const App = ({ classes }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/(welcome)?" component={Welcome} />
        <PrivateRoute path="/chat" component={ChatPage} />
        <Redirect to='/' />
      </Switch>      
    </Router>
  </Provider>

)


export default App;
