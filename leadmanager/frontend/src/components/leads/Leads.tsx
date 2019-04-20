import * as React from 'react';
import { ILead } from '../../actions/interface';

interface IProps {
  leads: ILead[];
  getLeads: () => void;
  deleteLead: (id: number) => void;
}

const Leads = ({ leads, getLeads, deleteLead }: IProps) => {
  React.useEffect(getLeads, []);

  return (
    <section>
      <h2>Leads List</h2>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {leads.map(({ id, name, email, message }) => (
            <tr key={`table_${id}`}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{message}</td>
              <td>
                <button
                  className='btn btn-danger btn-sm'
                  onClick={() => deleteLead(id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Leads;
