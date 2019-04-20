import { Dispatch } from 'react';
import { GET_LEADS, DELETE_LEAD } from './types';
import axios from 'axios';

export const getLeads = () => (dispatch: Dispatch<object>) => {
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

export const deleteLead = (id: number) => (dispatch: Dispatch<object>) => {
  axios
    .delete(`/api/leads/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_LEAD,
        deleted: id
      });
    })
    .catch(err => console.log(err));
};
