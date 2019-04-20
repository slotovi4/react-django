import * as React from 'react';
import { ILead } from '../../actions/interface';

interface IProps {
  leads: ILead;
  getLeads: () => void;
}

class Leads extends React.Component<IProps> {
  componentDidMount() {
    this.props.getLeads();
  }

  render() {
    return (
      <div>
        <h1>Leads List</h1>
      </div>
    );
  }
}

export default Leads;
