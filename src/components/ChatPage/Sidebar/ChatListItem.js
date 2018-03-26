import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui';
import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from '../Avatar';

const styles = theme => ({
  activeItem: {
    backgroundColor: theme.palette.grey[200],
  },
});

const ChatListItem = ({
  classes, title, chatId, active, createdAt, disabled,
}) => (
  <ListItem
    button
    component={Link}
    disabled={disabled}
    className={active ? classes.activeItem : ''}
    to={`/chat/${chatId}`}
  >
    <Avatar title={title} colorFrom={chatId} />
    <ListItemText primary={title} secondary={moment(createdAt).fromNow()} />
  </ListItem>
);

ChatListItem.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  chatId: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default withStyles(styles)(ChatListItem);
