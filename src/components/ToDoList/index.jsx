import React, { useState } from 'react';
import Search from '../Search';
import TaskList from '../TaskList';

const ToDoList = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="block">
      <h2 className="title">To Do List</h2>
      <Search search={search} setSearch={setSearch} />
      <hr />
      <TaskList search={search} />
    </div>
  );
};

export default ToDoList;
