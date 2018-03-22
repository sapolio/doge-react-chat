/* eslint no-underscore-dangle: 0 */
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import ChatMessageList from './ChatMessageList';
import MessageInput from './MessageInput';

const styles = theme => ({
  chatLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '64px',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  tipPaper: theme.mixins.gutters({
    'max-width': '50%',
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

const Chat = ({
  classes,
  messages,
  activeChat,
  activeUser,
  joinChat,
  sendMessage,
  isConnected,
}) => (
  <main className={classes.chatLayout}>
    {!!activeChat && <ChatMessageList messages={messages} activeUser={activeUser} />}

    {!!activeChat || (
      <Paper className={classes.tipPaper}>
        <Typography variant="display1" gutterBottom>
          Start WOW
        </Typography>
      </Paper>
    )}

    {!!activeChat && (
      <MessageInput
        showJoinButton={!activeUser.isChatMember}
        sendMessage={sendMessage}
        onJoinButtonClick={() => joinChat(activeChat._id)}
        activeUser={activeUser}
        disabled={!isConnected}
      />
    )}
  </main>
);

export default withStyles(styles)(Chat);
