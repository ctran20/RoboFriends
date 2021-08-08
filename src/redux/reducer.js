import {
  CHANGE_SEARCH_FIELD,
  REFRESH_SEARCH_FIELD,
  ADD_ROBOT,
  CLEAR_ROBOT,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAIL,
} from './constants';

const initialStateSearch = {
  searchField: '',
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    case REFRESH_SEARCH_FIELD:
      return Object.assign({}, state);
    default:
      return state;
  }
};

const initialStateAdd = {
  inputBox: {},
  newBot: '',
};

export const addChange = (state = initialStateAdd, action = {}) => {
  switch (action.type) {
    case ADD_ROBOT:
      return Object.assign({}, state, {
        inputBox: action.payload,
        newBot: action.payload.target.value,
      });
    case CLEAR_ROBOT:
      return Object.assign({}, initialStateAdd);
    default:
      return state;
  }
};

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: '',
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {
        robots: action.payload,
        isPending: false,
      });
    case REQUEST_ROBOTS_FAIL:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    default:
      return state;
  }
};
