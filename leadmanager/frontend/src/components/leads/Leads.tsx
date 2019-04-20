import * as React from 'react';

interface IProps {
  leads: any;
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
