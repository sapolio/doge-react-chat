import React from 'react';
import PropTypes from 'prop-types';
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
  static propTypes = {
    sendMessage: PropTypes.func.isRequired,
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    showJoinButton: PropTypes.bool.isRequired,
    onJoinButtonClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
  };
  state = {
    value: '',
  };

  handleValueChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleKeyPress = (event) => {
    const { value } = this.state;

    if (event.key === 'Enter' && value) {
      this.props.sendMessage(value);
      this.setState({ value: '' });
    }
  };
  render() {
    const {
      classes, showJoinButton, onJoinButtonClick, disabled,
    } = this.props;

    return (
      <div className={classes.messageInputWrapper}>
        <Paper className={classes.messageInput} elevation={10}>
          {showJoinButton ? (
            <Button
              variant="raised"
              color="primary"
              className={classes.button}
              onClick={onJoinButtonClick}
              disabled={disabled}
            >
              So Much Join Very Chat
            </Button>
          ) : (
            <Input
              fullWidth
              placeholder="Type your WOW"
              value={this.state.value}
              onChange={this.handleValueChange}
              onKeyPress={this.handleKeyPress}
              disabled={disabled}
            />
          )}
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(MessageInput);
