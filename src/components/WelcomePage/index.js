import React from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ErrorMessage from '../ErrorMessage';


const styles = theme => ({
  paper: {    
    'margin': '0 auto',
    'margin-top': '88px',
    'max-width': '500px'
  }
})

class WelcomePage extends React.Component {
  state = {
    activeTab: 0,
  };

  handleChange = (event, value) => {
    this.setState({ activeTab: value });
  };

  render() {
    const { classes, theme, signup, login, isAuthenticated, error } = this.props;
    const { activeTab } = this.state;

    if (isAuthenticated) {
      return (<Redirect to='/chat' />)
    }

    return (
      <React.Fragment>
        <AppBar className={classes.chatheader}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              DogeChat
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper className={classes.paper} elevation={4}>
          <AppBar position="static" color="default">
            <Tabs
              value={activeTab}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
            >
              <Tab label="Login" />
              <Tab label="Sign up" />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeTab}
          >
            <LoginForm onSubmit={login}/>
            <SignupForm onSubmit={signup}/>
          </SwipeableViews>
        </Paper>
        <ErrorMessage error={error} />
      </React.Fragment>
    )
  }
}

export default withStyles(styles, { withTheme: true })(WelcomePage);
