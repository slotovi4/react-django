import { CLEAR_ERRORS } from './types';
import { Dispatch } from 'react';

export const clearErrors = () => (dispatch: Dispatch<object>) => {
  dispatch({
    type: CLEAR_ERRORS
  });
};
