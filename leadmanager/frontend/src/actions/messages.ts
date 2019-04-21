import { CREATE_MESSAGE, CLEAR_MESSAGE } from './types';

export const createMessage = (msg: string) => {
  return {
    type: CREATE_MESSAGE,
    msg
  };
};

export const clearMessage = () => (dispatch: any) => {
  dispatch({ type: CLEAR_MESSAGE });
};
