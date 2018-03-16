import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';

const styles = theme => ({
  messageInputWrapper: {
    position: 'fixed',
    left: 320,
    right: 0,
    bottom: 0,
    padding: theme.spacing.unit * 3,
  },
  messageInput: {
    padding: theme.spacing.unit * 2,
  },
  button: {
    width: '100%',
  },
});

class MessageInput extends React.Component {
  render() {
    const { classes, showJoinButton, onJoinButtonClick } = this.props;

    return (
      <div className={classes.messageInputWrapper}>
        <Paper className={classes.messageInput} elevation={10}>
          {showJoinButton ? (
            <Button
              variant="raised"
              color="primary"
              className={classes.button}
              onClick={onJoinButtonClick}>
            So Much Join Very Chat
            </Button>
          ) : (
              <Input fullWidth placeholder="Type your message…" />)}
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(MessageInput);
