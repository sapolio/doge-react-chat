import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = theme => ({
  container: {
    height: '100%',
    padding: '24px',
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    flex: 'none',
    marginTop: theme.spacing.unit * 2,
  },
});

class LoginForm extends React.Component {
  state = {
    username: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
  };

  handleInputChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    this.setState(prevState => ({
      [name]: {
        ...prevState[name],
        value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    this.props.onSubmit(username.value, password.value);
  };

  render() {
    const { classes } = this.props;
    const { username, password } = this.state;

    return (
      <form className={classes.container} onSubmit={this.handleSubmit}>
        <TextField
          required
          fullWidth
          label="Login"
          placeholder="Ur name here"
          type="text"
          autoComplete="username"
          value={username.value}
          onChange={this.handleInputChange}
          margin="normal"
          error={!username.isValid}
          name="username"
        />
        <TextField
          required
          fullWidth
          label="Password"
          placeholder="Ur pass here"
          type="password"
          autoComplete="password"
          value={password.value}
          onChange={this.handleInputChange}
          margin="normal"
          error={!password.isValid}
          name="password"
        />
        <Button fullWidth variant="raised" type="submit" color="primary" className={classes.button}>
          Login
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(LoginForm);
