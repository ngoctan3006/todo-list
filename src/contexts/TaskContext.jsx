import React, { createContext, useEffect, useReducer } from 'react';
import {
  ADD_TASK,
  BULK_DELETE_TASKS,
  DELETE_TASK,
  UPDATE_TASK,
} from '../reducers/constant';
import { taskReducer } from '../reducers/taskReducer';

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, [], () => {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    dispatch({ type: ADD_TASK, payload: task });
  };

  const updateTask = (task) => {
    dispatch({ type: UPDATE_TASK, payload: task });
  };

  const deleteTask = (id) => {
    dispatch({ type: DELETE_TASK, payload: id });
  };

  const deleteMany = (idList) => {
    dispatch({ type: BULK_DELETE_TASKS, payload: idList });
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTask, deleteTask, deleteMany }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
