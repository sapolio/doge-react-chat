import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

class ErrorMessage extends React.Component {
  static propTypes = {
    error: PropTypes.instanceOf(Error),
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
  };
  static defaultProps = {
    error: null,
  };

  state = {
    open: !!this.props.error,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({ open: true });
    }
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, error } = this.props;

    if (!error) return null;

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={this.state.open}
        autoHideDuration={6000}
        onClose={this.handleClose}
        SnackbarContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span>{error.message}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={this.handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    );
  }
}
export default withStyles(styles)(ErrorMessage);
