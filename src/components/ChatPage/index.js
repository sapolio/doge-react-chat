import React from 'react';
import { withStyles } from 'material-ui/styles';

import Sidebar from './Sidebar';
import Chat from './Chat';
import ChatHeader from './ChatHeader';

import { chats, messages } from '../../mock-data';

const styles = theme => ({
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  }
});

const ChatPage = ({ classes }) => (
  <div className={classes.appFrame}>
    <ChatHeader />
    <Sidebar chats={chats} />
    <Chat messages={messages} />
  </div>
)

export default withStyles(styles)(ChatPage);
