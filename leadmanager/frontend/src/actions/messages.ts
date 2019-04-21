import { CREATE_MESSAGE, CLEAR_MESSAGE } from './types';
import { Dispatch } from 'react';

export const createMessage = (msg: string) => {
  return {
    type: CREATE_MESSAGE,
    msg
  };
};

export const clearMessage = () => (dispatch: Dispatch<object>) => {
  dispatch({ type: CLEAR_MESSAGE });
};
