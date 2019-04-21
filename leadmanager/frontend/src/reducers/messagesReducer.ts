import { GET_MESSAGES, CREATE_MESSAGE, CLEAR_MESSAGE } from '../actions/types';

const initialState = {
  msg: null
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_MESSAGES:
      return state;
    case CREATE_MESSAGE:
      return {
        ...state,
        msg: action.msg
      };
    case CLEAR_MESSAGE:
      return {
        state: initialState
      };
    default:
      return state;
  }
};
