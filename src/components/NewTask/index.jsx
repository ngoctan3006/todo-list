import React, { useContext, useState } from 'react';
import Form from '../Form';
import './newtask.css';
import { TaskContext } from '../../contexts/TaskContext';
import { genKey } from '../../utils/genKey';

const now = new Date().toLocaleString().split(', ')[1];
const due = now.slice(-4) + '-' + now.slice(3, 5) + '-' + now.slice(0, 2);

const initData = {
  title: '',
  description: '',
  due,
  priority: 'normal',
};

const NewTask = () => {
  const { addTask } = useContext(TaskContext);

  const onSubmit = (data) => {
    addTask({ id: genKey(), ...data });
  };

  return (
    <div className="block">
      <h2 className="title">New Task</h2>
      <Form type="Add" task={initData} onSubmit={onSubmit} />
    </div>
  );
};

export default NewTask;
