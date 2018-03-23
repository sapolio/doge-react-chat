import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import Sidebar from './Sidebar';
import Chat from './Chat';
import ChatHeader from './ChatHeader';
import ErrorMessage from '../ErrorMessage';

const styles = () => ({
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
});

class ChatPage extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object.isRequired,
    }).isRequired,
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
    logout: PropTypes.func.isRequired,
    chats: PropTypes.shape({
      active: PropTypes.object,
      my: PropTypes.array.isRequired,
      all: PropTypes.array.isRequired,
    }).isRequired,
    activeUser: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      username: PropTypes.string.isRequired,
      isMember: PropTypes.bool.isRequired,
      isCreator: PropTypes.bool.isRequired,
      isChatMember: PropTypes.bool.isRequired,
    }).isRequired,
    createChat: PropTypes.func.isRequired,
    joinChat: PropTypes.func.isRequired,
    leaveChat: PropTypes.func.isRequired,
    deleteChat: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
    messages: PropTypes.arrayOf(PropTypes.shape({
      chatId: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      sender: PropTypes.object.isRequired,
      createdAt: PropTypes.string.isRequired,
    })).isRequired,
    editUser: PropTypes.func.isRequired,
    error: PropTypes.instanceOf(Error),
    isConnected: PropTypes.bool.isRequired,
    fetchMyChats: PropTypes.func.isRequired,
    fetchAllChats: PropTypes.func.isRequired,
    setActiveChat: PropTypes.func.isRequired,
    socketsConnect: PropTypes.func.isRequired,
    mountChat: PropTypes.func.isRequired,
    unmountChat: PropTypes.func.isRequired,
  };
  static defaultProps = {
    error: null,
  };

  componentDidMount() {
    const {
      match,
      fetchMyChats,
      fetchAllChats,
      setActiveChat,
      socketsConnect,
      mountChat,
    } = this.props;

    Promise.all([fetchAllChats(), fetchMyChats()])
      .then(() => {
        socketsConnect();
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
    const {
      match: { params }, setActiveChat, mountChat, unmountChat,
    } = this.props;
    const { params: nextParams } = nextProps.match;

    // If we change route, then fetch messages from chat by chatID
    if (nextParams.chatId && params.chatId !== nextParams.chatId) {
      setActiveChat(nextParams.chatId);
      unmountChat(params.chatId);
      mountChat(nextParams.chatId);
    }
  }

  render() {
    const {
      classes,
      logout,
      chats,
      activeUser,
      createChat,
      joinChat,
      leaveChat,
      deleteChat,
      sendMessage,
      messages,
      editUser,
      error,
      isConnected,
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
          <Sidebar chats={chats} createChat={createChat} isConnected={isConnected} />
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
    );
  }
}

export default withStyles(styles)(ChatPage);
