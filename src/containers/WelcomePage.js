import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signup, login } from '../actions'
import WelcomePage from '../components/WelcomePage';

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
  }),

  mapDispatchToProps = dispatch => bindActionCreators({
    signup,
    login,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomePage);
