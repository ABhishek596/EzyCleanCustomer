import {ADD_ITEM, DELETE_ITEM} from '../types';

// const initialState = [];

const initialState = {newitem: null};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        newitem: action.payload,
      };

    case DELETE_ITEM:
      const deleteArray = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deleteArray;
    default:
      return state;
  }
};
