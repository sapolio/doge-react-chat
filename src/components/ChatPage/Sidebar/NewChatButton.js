import React from 'react';
import Button from 'material-ui/Button';
import Modal from 'material-ui/Modal';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui';
import AddIcon from 'material-ui-icons/Add';

const styles = theme => ({
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48, // + bottom navigation
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  textField: {
    'margin-top': theme.spacing.unit * 2,
    'margin-bottom': theme.spacing.unit * 2,
  }
})

class NewChatButton extends React.Component {
  state = {
    isModalOpen: false,
    chatName: {
      value: '',
      isValid: true
    }
  }

  handleOpen = () => {
    this.setState({ isModalOpen: true });
  };
  handleClose = () => {
    this.setState({ isModalOpen: false });
  };
  handleInputChange = (event) => {
    event.persist();
    const { value } = event.target;
    this.setState(prevState => ({
      chatName: {
        ...prevState.chatName,
        value,
        isValid: true
      },
    }));
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    
    const { createChat } = this.props;
    const { chatName: { value: title } } = this.state;
    createChat(title);
    this.handleClose();
    this.setState({
      chatName: {
        value: '',
        isValid: true,
      },
    });
  }


render() {
  const { classes } = this.props;
  const { chatName, isModalOpen } = this.state;


  return (
    <React.Fragment>
      <Button
        onClick={this.handleOpen}
        variant="fab"
        color="primary"
        className={classes.newChatButton}>
        <AddIcon />
      </Button>
      <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={isModalOpen}
          onClose={this.handleClose}
        >
          <div className={classes.modal}>
            <Typography variant="title" id="modal-title">
              Such create very chat
            </Typography>
            <form onSubmit={this.handleOnSubmit}>
              <TextField 
                required
                fullWidth
                placeholder="Much chatname"
                type="text"
                value={chatName.value}
                onChange={this.handleInputChange}
                className={classes.textField}
              />
              <Button
                fullWidth
                type="submit"
                variant="raised"
                color="primary"
              >
                WOW
              </Button>
            </form>
          </div>
        </Modal>
    </React.Fragment>
  )
}


}

export default withStyles(styles)(NewChatButton)
