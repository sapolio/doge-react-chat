import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = {
  chatheader: {
    position: 'absolute',
    width: `calc(100% - 320px)`,
  }
}

const ChatHeader = ({ classes }) => (
  <AppBar className={classes.chatheader}>
    <Toolbar>
      <Typography variant="title" color="inherit" noWrap>
        DogeChat
      </Typography>
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(ChatHeader);
