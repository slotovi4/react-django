import { GET_LEADS } from '../actions/types';
import { ILead } from '../actions/interface';

interface IState {
  leads: ILead[];
}

interface IAction {
  type: 'GET_LEADS';
  leads?: ILead[];
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
    default:
      return state;
  }
};
