import { GET_ERRORS } from '../actions/types';

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
    default:
      return state;
  }
};
