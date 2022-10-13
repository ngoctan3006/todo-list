import React from 'react';
import Search from '../Search';
import TaskList from '../TaskList';

const ToDoList = () => {
  return (
    <div className="block">
      <h2 className="title">To Do List</h2>
      <Search />
      <hr />
      <TaskList />
    </div>
  );
};

export default ToDoList;
