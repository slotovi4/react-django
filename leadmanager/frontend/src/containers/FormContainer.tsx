import { connect } from 'react-redux';
import { addLead } from '../actions/leadsActions';
import Form from '../components/leads/Form';

export default connect(
  null,
  { addLead }
)(Form);
