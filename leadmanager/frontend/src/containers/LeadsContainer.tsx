import { connect } from 'react-redux';
import { getLeads } from '../actions/leadsActions';
import Leads from '../components/leads/Leads';

const mapStateToProps = (state: any) => ({
  leads: state.leads.leads
});

export default connect(
  mapStateToProps,
  { getLeads }
)(Leads);
