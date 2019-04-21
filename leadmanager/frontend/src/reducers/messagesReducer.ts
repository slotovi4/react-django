import { CREATE_MESSAGE, CLEAR_MESSAGE } from '../actions/types';

interface IAction {
  type: 'CREATE_MESSAGE' | 'CLEAR_MESSAGE';
  msg?: string;
}

interface IState {
  msg: null | string;
}

const initialState: IState = {
  msg: null
};

export default (state = initialState, action: IAction) => {
  switch (action.type) {
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
