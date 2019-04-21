import { CLEAR_ERRORS } from './types';

export const clearErrors = () => (dispatch: any) => {
  dispatch({
    type: CLEAR_ERRORS
  });
};
