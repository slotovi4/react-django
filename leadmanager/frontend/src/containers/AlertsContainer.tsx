import { connect } from 'react-redux';
// import { addLead } from '../actions/leadsActions';
import Alerts from '../components/layout/Alerts';

const mapStateToProps = (state: any) => ({
  errors: state.errors
});

export default connect(mapStateToProps)(Alerts);
