import { connect } from 'react-redux';
import { clearMessage } from '../actions/messages';
import { clearErrors } from '../actions/errors';
import Alerts from '../components/layout/Alerts';

const mapStateToProps = (state: any) => ({
  errors: state.errors,
  message: state.messages.msg
});

export default connect(
  mapStateToProps,
  { clearMessage, clearErrors }
)(Alerts);
