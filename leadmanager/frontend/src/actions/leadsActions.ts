import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from './types';
import { createMessage } from './messages';
import { ILead } from './interface';
import { Dispatch } from 'react';
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
      dispatch(createMessage('Lead deleted'));
      dispatch({
        type: DELETE_LEAD,
        deleted: id
      });
    })
    .catch(err => console.log(err));
};

export const addLead = (lead: ILead) => (dispatch: Dispatch<object>) => {
  axios
    .post('/api/leads/', lead)
    .then(res => {
      dispatch(createMessage('Lead added'));
      dispatch({
        type: ADD_LEAD,
        added: res.data
      });
    })
    .catch(({ response }) =>
      dispatch({
        type: GET_ERRORS,
        msg: response.data,
        status: response.status
      })
    );
};
