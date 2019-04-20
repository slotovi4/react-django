import axios from 'axios';
import { GET_LEADS } from './types';

export const getLeads = () => (dispatch: any) => {
  axios
    .get('/api/leads/')
    .then(res => {
      dispatch({
        type: GET_LEADS,
        leads: res.data
      });
    })
    .catch(err => console.log(err));
};
