import React from 'react';
import { withStyles } from 'material-ui/styles';
import ChatMessage from './ChatMessage';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  messagesWrapper: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
  },
});

class ChatMessageList extends React.Component {
  componentDidMount() {
    this.scrollDownHistory();
  }

  componentDidUpdate() {
    this.scrollDownHistory();
  }

  scrollDownHistory() {
    const messagesWrapper = this.refs.messagesWrapper;
    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }

  render() {
    const { classes, messages, activeUser } = this.props;

    return !messages.length ? (
      <Typography variant="display1">
        Not so messages wow
      </Typography>
    ) : (
        <div className={classes.messagesWrapper} ref="messagesWrapper">
          {messages.map((message, index) => (
            <ChatMessage
              key={message._id}
              fromMe={message.sender._id === activeUser._id}
              {...message} />
          )
          )}
        </div>)


  }
}

export default withStyles(styles)(ChatMessageList);
