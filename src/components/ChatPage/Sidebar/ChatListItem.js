import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from '../Avatar';

const styles = theme => ({
  // ...
});

const ChatListItem = ({ classes, title, chatId, active, createdAt }) => (
  <ListItem
    button
    component={Link}
    to={`/chat/${chatId}`}
  >
    <Avatar 
      title={title}
    />
    <ListItemText 
      primary={title}
      secondary={moment(createdAt).fromNow()}/>
  </ListItem>
);

export default withStyles(styles)(ChatListItem);
