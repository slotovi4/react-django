import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

const initialState = {
  msg: {},
  status: null
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        msg: action.msg,
        status: action.status
      };
    case CLEAR_ERRORS:
      return {
        state: initialState
      };
    default:
      return state;
  }
};
