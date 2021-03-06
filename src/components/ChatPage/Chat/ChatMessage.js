/* eslint no-underscore-dangle: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import moment from 'moment';
import Avatar from '../Avatar';
import senderName from '../../../utils/senderName';
import colorFrom from '../../../utils/colors';

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
  statusWrapper: {
    'justify-content': 'center',
  },
  message: {
    maxWidth: '70%',
    minWidth: '10%',
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
    backgroundColor: '#fee',
  },
  messageFromMe: {
    marginRight: theme.spacing.unit * 2,
    backgroundColor: '#def',
  },
});

const ChatMessage = ({
  classes, sender, content, fromMe, statusMessage, createdAt,
}) => {
  const displayedName = senderName(sender);

  if (statusMessage) {
    return (
      <div className={classnames(classes.messageWrapper, classes.statusWrapper)}>
        <Typography>
          <Typography
            variant="caption"
            style={{ color: colorFrom(sender._id) }}
            className={classes.statusMessageUser}
          >
            {displayedName}
          </Typography>
          {content}
          <Typography variant="caption" component="span">
            {moment(createdAt).fromNow()}
          </Typography>
        </Typography>
      </div>
    );
  }

  return (
    <div className={classnames(classes.messageWrapper, fromMe && classes.messageWrappperFromMe)}>
      <Avatar colorFrom={sender._id} title={displayedName} />
      <Paper className={classnames(classes.message, fromMe && classes.messageFromMe)}>
        <Typography
          variant="caption"
          style={{ color: colorFrom(sender._id) }}
          className={classes.statusMessageUser}
        >
          {displayedName}
        </Typography>
        <Typography variant="body1">{content}</Typography>
        <Typography variant="caption" component="span">
          {moment(createdAt).fromNow()}
        </Typography>
      </Paper>
    </div>
  );
};

ChatMessage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  sender: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
  content: PropTypes.string.isRequired,
  fromMe: PropTypes.bool.isRequired,
  statusMessage: PropTypes.bool,
  createdAt: PropTypes.string.isRequired,
};
ChatMessage.defaultProps = {
  statusMessage: false,
};
export default withStyles(styles)(ChatMessage);
