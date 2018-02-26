import React from 'react';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from './Avatar';

const styles = theme => ({
  // ...
});

const ChatListItem = ({ classes, title }) => (
  <ListItem button>
    <Avatar 
      title={title}
    />
    <ListItemText primary={title}/>
  </ListItem>
);

export default withStyles(styles)(ChatListItem);
