import {
  CHANGE_SEARCH_FIELD,
  REFRESH_SEARCH_FIELD,
  ADD_ROBOT,
  CLEAR_ROBOT,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAIL,
} from './constants';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const refreshSearchField = () => ({
  type: REFRESH_SEARCH_FIELD,
});

export const setAddChange = (event) => ({
  type: ADD_ROBOT,
  payload: event,
});

export const resetAddChange = () => ({
  type: CLEAR_ROBOT,
});

export const requestRobots = (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: REQUEST_ROBOTS_FAIL, payload: error }));
};
