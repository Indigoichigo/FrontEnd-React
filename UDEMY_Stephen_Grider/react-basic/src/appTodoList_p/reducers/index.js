import { combineReducers } from 'redux';

const defaultListItem = [
  { item: 'walking dog' },
  { item: 'learning English' },
  { item: 'cooking' },
];

const listItem = () => {
  return defaultListItem;
};

const errMsg = () => {
  return ['already on the list', 'empty ipnut', ''];
};

const handleItem = (state = defaultListItem, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, { item: action.text }];
    case 'DELETE_ITEM':
      return state.filter(i => i.item !== action.text);
    case 'DELETE_ALL':
      return (state = []);
    default:
      return defaultListItem;
  }
};

export default combineReducers({
  handleItem,
  listItem,
  errMsg,
});
