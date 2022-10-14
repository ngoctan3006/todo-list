import React, { useState } from 'react';
import BulkAction from '../BulkAction';
import Search from '../Search';
import TaskList from '../TaskList';

const ToDoList = () => {
  const [search, setSearch] = useState('');
  const [selectedList, setSelectedList] = useState([]);

  const handleSelectList = (selected, id) => {
    if (selected) {
      setSelectedList([...selectedList, id]);
    } else {
      setSelectedList(selectedList.filter((listId) => listId !== id));
    }
  };

  return (
    <div className="block">
      <h2 className="title">To Do List</h2>
      <Search search={search} setSearch={setSearch} />
      <hr />
      <BulkAction
        selectedList={selectedList}
        setSelectedList={setSelectedList}
      />
      <TaskList search={search} handleSelectList={handleSelectList} />
    </div>
  );
};

export default ToDoList;
