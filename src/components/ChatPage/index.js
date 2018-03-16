import React from 'react';
import { withStyles } from 'material-ui/styles';

import Sidebar from './Sidebar';
import Chat from './Chat';
import ChatHeader from './ChatHeader';

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
    const { match, fetchMyChats, fetchAllChats, setActiveChat } = this.props;

    Promise.all([
      fetchAllChats(),
      fetchMyChats()
    ])
    .then(() => {
      if (match.params.chatId) {
        setActiveChat(match.params.chatId);
      }
    });
  }
  componentWillReceiveProps(nextProps) {
    const { match: { params }, setActiveChat } = this.props;
    const { params: nextParams } = nextProps.match;

    // If we change route, then fetch messages from chat by chatID
    if (nextParams.chatId && params.chatId !== nextParams.chatId) {
      setActiveChat(nextParams.chatId);
    }
  }

  render() {
    const { classes,
      logout, chats, activeUser,
      createChat, joinChat, leaveChat, deleteChat, sendMessage,
      messages, editUser
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
        />
          <Sidebar 
            chats={chats}
            createChat={createChat}
             />
          <Chat 
            messages={messages}
            joinChat={joinChat}
            sendMessage={sendMessage}
            activeUser={activeUser}
            activeChat={chats.active} />
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(ChatPage);
