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

    case UPDATE_TASK:
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });

    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);

    default:
      return state;
  }
};
