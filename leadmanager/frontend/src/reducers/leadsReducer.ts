import { GET_LEADS } from '../actions/types';

const initialState = {
  leads: []
};

export default (state = initialState, action: any) => {
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
