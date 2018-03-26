/* eslint no-underscore-dangle: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import ChatListItem from './ChatListItem';

const styles = () => ({
  chatList: {
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
});

function ChatList({
  classes, chats, activeChat, disabled,
}) {
  return (
    <List className={classes.chatList}>
      {chats && chats.length ? (
        chats.map(chat => (
          <ChatListItem
            key={chat._id}
            active={(activeChat && activeChat._id === chat._id) || false}
            chatId={chat._id}
            disabled={disabled}
            {...chat}
          />
        ))
      ) : (
        <Typography variant="subheading" className={classes.noChats}>
          Not much chats
        </Typography>
      )}
    </List>
  );
}

ChatList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  chats: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  })).isRequired,
  activeChat: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  disabled: PropTypes.bool.isRequired,
};
ChatList.defaultProps = {
  activeChat: null,
};

export default withStyles(styles)(ChatList);
