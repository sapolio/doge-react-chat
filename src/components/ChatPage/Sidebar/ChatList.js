import React from 'react';
import { Typography } from 'material-ui'
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import ChatListItem from './ChatListItem';

const styles = theme => ({
  chatList: {
    overflowY: 'scroll',
  },
});

function ChatList({ classes, chats, activeChat, disabled }) {
  return (
      <List className={classes.chatList}>
        {chats && chats.length ? (
          chats.map(chat => (
          <ChatListItem 
            key={chat._id}
            active={activeChat && activeChat._id !== chat._id}
            chatId={chat._id}
            disabled={disabled}
            {...chat} />
          ))) : (
          <Typography variant="subheading" className={classes.noChats}>
            Not much chats
          </Typography>
          )
        }
      </List>
  );
}

// ChatList.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(ChatList);
