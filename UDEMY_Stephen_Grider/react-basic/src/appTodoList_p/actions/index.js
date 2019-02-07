export const addItem = text => {
  return {
    type: 'ADD_ITEM',
    text,
  };
};

export const deleteItem = text => {
  return {
    type: 'DELETE_ITEM',
    text,
  };
};

export const deleteAllItem = () => {
  return {
    type: 'DELETE_ALL',
  };
};
