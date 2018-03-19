import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from '../Avatar';

const styles = theme => ({
  // ...
});

const ChatListItem = ({ classes, title, chatId, active, createdAt, disabled }) => (
  <ListItem
    button
    component={Link}
    disabled={disabled}
    to={`/chat/${chatId}`}
  >
    <Avatar 
      title={title}
      colorFrom={chatId}
    />
    <ListItemText 
      primary={title}
      secondary={moment(createdAt).fromNow()}/>
  </ListItem>
);

export default withStyles(styles)(ChatListItem);
