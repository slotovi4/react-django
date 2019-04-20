import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from '../actions/types';
import { ILead } from '../actions/interface';

interface IState {
  leads: ILead[];
}

interface IAction {
  type: 'GET_LEADS' | 'DELETE_LEAD' | 'ADD_LEAD';
  leads?: ILead[];
  deleted?: number;
  added?: ILead;
}

const initialState: IState = {
  leads: []
};

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        leads: action.leads
      };
    case DELETE_LEAD:
      return {
        ...state,
        leads: state.leads.filter(lead => lead.id !== action.deleted)
      };
    case ADD_LEAD:
      return {
        ...state,
        leads: [...state.leads, action.added]
      };
    default:
      return state;
  }
};
