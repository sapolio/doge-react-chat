import React from 'react';
import classnames from 'classnames';
import { withStyles } from 'material-ui';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Avatar from './Avatar';

const styles = theme => ({
  messageWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
  },
  messageWrappperFromMe: {
    'flex-direction': 'row-reverse',
  },
  message: {
    maxWidth: '70%',
    minWidth: '10%',
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
    backgroundColor: '#fed'
  },
  messageFromMe: {
    marginRight: theme.spacing.unit * 2,
    backgroundColor: '#def'
  },
});

const ChatMessage = ({ classes, sender, content }) => {
  const isMessageFromMe = sender === 'me';

 
  return (
    <div className={classnames(
      classes.messageWrapper,
      isMessageFromMe && classes.messageWrappperFromMe
    )}>
      <Avatar title={sender} />
      <Paper className={classnames(
        classes.message,
        isMessageFromMe && classes.messageFromMe
      )}>
        <Typography variant="caption">
          {sender}
        </Typography>
        <Typography variant="body1">
          {content}
        </Typography>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(ChatMessage);
