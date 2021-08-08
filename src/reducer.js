import {
  CHANGE_SEARCH_FIELD,
  ADD_ROBOT,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAIL,
} from './constants';

const initialState = {
  searchField: '',
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

export const addRobot = (state = initialState, action = {}) => {
  return state;
};

export const requestRobots = (state = initialState, action = {}) => {};
