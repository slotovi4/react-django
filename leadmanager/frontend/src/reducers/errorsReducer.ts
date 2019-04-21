import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';
import { IMsg } from '../actions/interface';

interface IAction {
  type: 'GET_ERRORS' | 'CLEAR_ERRORS';
  msg?: IMsg;
  status?: number;
}

interface IState {
  msg: IMsg;
  status: number;
}

const initialState: IState = {
  msg: {},
  status: null
};

export default (state = initialState, action: IAction) => {
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
