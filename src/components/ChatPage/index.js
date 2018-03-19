import React from 'react';
import { withStyles } from 'material-ui/styles';

import Sidebar from './Sidebar';
import Chat from './Chat';
import ChatHeader from './ChatHeader';
import ErrorMessage from "../ErrorMessage";

const styles = theme => ({
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  }
});

class ChatPage extends React.Component {
  componentDidMount() {
    const { match, fetchMyChats, fetchAllChats, setActiveChat, socketsConnect, mountChat } = this.props;

    Promise.all([
      fetchAllChats(),
      fetchMyChats()
    ])
    .then(() => {
      socketsConnect()
    })
    .then(() => {
      const { chatId } = match.params;
      if (chatId) {
        setActiveChat(chatId);
        mountChat(chatId);
      }
    });
  }
  componentWillReceiveProps(nextProps) {
    const { match: { params }, setActiveChat, mountChat, unmountChat } = this.props;
    const { params: nextParams } = nextProps.match;

    // If we change route, then fetch messages from chat by chatID
    if (nextParams.chatId && params.chatId !== nextParams.chatId) {
      setActiveChat(nextParams.chatId);
      unmountChat(params.chatId);
      mountChat(nextParams.chatId);
    }
  }

  render() {
    const { classes,
      logout, chats, activeUser,
      createChat, joinChat, leaveChat, deleteChat, sendMessage,
      messages, editUser, error, isConnected
    } = this.props;
    
    return (
      <React.Fragment>
        <div className={classes.appFrame}>
          <ChatHeader
            activeUser={activeUser}
            activeChat={chats.active}
            leaveChat={leaveChat}
            deleteChat={deleteChat}
            logout={logout}
            editUser={editUser}
            isConnected={isConnected}
          />
          <Sidebar 
            chats={chats}
            createChat={createChat}
            isConnected={isConnected}
          />
          <Chat 
            messages={messages}
            joinChat={joinChat}
            sendMessage={sendMessage}
            activeUser={activeUser}
            activeChat={chats.active}
            isConnected={isConnected}
          />
        </div>
        <ErrorMessage error={error} />
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(ChatPage);
