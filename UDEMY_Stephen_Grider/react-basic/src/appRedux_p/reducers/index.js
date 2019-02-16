import { combineReducers } from 'redux';

const defaultNum = {
  num: 0,
};

const handleNumber = (state = defaultNum, action) => {
  switch (action.type) {
    case 'PLUS_NUMBER':
      return { ...state, num: state.num + 1 };
    case 'MINUS_NUMBER':
      return { ...state, num: state.num - 1 };
    default:
      return state;
  }
};

export default combineReducers({
  handleNumber,
});
