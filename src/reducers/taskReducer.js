import {
  ADD_TASK,
  BULK_DELETE_TASKS,
  BULK_UPDATE_TASKS,
  DELETE_TASK,
  UPDATE_TASK,
} from './constant';

export const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];

    default:
      return state;
  }
};
