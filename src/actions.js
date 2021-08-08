import {
  CHANGE_SEARCH_FIELD,
  ADD_ROBOT,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAIL,
} from './constants';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const addRobot = (text) => ({
  type: ADD_ROBOT,
  payload: text,
});

export const requestRobots = (dispatch) => ({
  dispatch({type: REQUEST_ROBOTS_PENDING});
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
  .catch(error=> dispatch({type: REQUEST_ROBOTS_FAIL, payload: error}))
});