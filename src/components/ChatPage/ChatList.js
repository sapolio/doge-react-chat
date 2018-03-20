import React from 'react';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import ChatListItem from './ChatListItem';

const styles = theme => ({
  chatList: {
    overflowY: 'scroll',
  },
});

function ChatList({ classes, chats }) {
  return (
      <List className={classes.chatList}>
        {chats && chats.map((chat, index) => (
          <ChatListItem key={index} {...chat} />
        ))
        }
      </List>
  );
}

// ChatList.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(ChatList);
