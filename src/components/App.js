import React from 'react';
import { withStyles } from 'material-ui/styles';
// import ClassNames from 'classnames;'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Sidebar from './Sidebar';


import { chats, messages } from '../mock-data';



const styles = theme => ({
  // root: {
  //   width: '100%',
  //   height: 730,
  //   marginTop: theme.spacing.unit * 3,
  //   zIndex: 1,
  //   overflow: 'hidden',
  // },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    width: `calc(100% - 320px)`,
  },
  'appBar-left': {
    marginLeft: 320,
  },
  'appBar-right': {
    marginRight: 320,
  },
});

class App extends React.Component {

  render() {
    const { classes } = this.props;

   
    return (
        <div className={classes.appFrame}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Typography variant="title" color="inherit" noWrap>
                DogeChat
              </Typography>
            </Toolbar>
          </AppBar>
          <Sidebar 
            chats={chats} 
          />
          <main className={classes.content}>
            <Typography>{'You think water moves fast? You should see ice.'}</Typography>
          </main>
        </div>
    );
  }
}


export default withStyles(styles)(App);
