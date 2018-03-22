/* eslint no-underscore-dangle: 0 */
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import ChatMessage from './ChatMessage';

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
    if (this.messagesWrapper) {
      this.messagesWrapper.scrollTop = this.messagesWrapper.scrollHeight;
    }
  }

  render() {
    const { classes, messages, activeUser } = this.props;

    return !messages.length ? (
      <Typography variant="display1">Not so messages wow</Typography>
    ) : (
      <div
        className={classes.messagesWrapper}
        ref={(node) => {
          this.messagesWrapper = node;
        }}
      >
        {messages.map(message => (
          <ChatMessage
            key={message._id}
            fromMe={message.sender._id === activeUser._id}
            {...message}
          />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(ChatMessageList);
