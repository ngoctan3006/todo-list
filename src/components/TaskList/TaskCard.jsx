import React, { useContext, useState } from 'react';
import { Collapse } from 'react-collapse';
import Form from '../Form';
import { TaskContext } from '../../contexts/TaskContext';
import './task-list.css';

const styleMapping = {
  high: 'danger',
  normal: 'warning',
  low: 'success',
};

const TaskCard = ({ task, handleSelectList }) => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const { updateTask, deleteTask } = useContext(TaskContext);

  const toggle = () => {
    setOpen(!open);
  };

  const removeTask = () => {
    const cf = window.confirm('Are you sure you want to delete this task?');
    if (!cf) return;
    deleteTask(task.id);
    alert('Delete successfully!');
  };

  const update = (data) => {
    updateTask(data);
    alert('Update successfully!');
  };

  const handleCheck = () => {
    handleSelectList(!checked, task.id);
    setChecked(!checked);
  };

  return (
    <div className="shadow">
      <div
        className={`card border border-${styleMapping[task.priority]} ${
          open ? 'open' : ''
        }`}
      >
        <div className="left">
          <input type="checkbox" checked={checked} onChange={handleCheck} />
          <h2>{task.title}</h2>
        </div>
        <div className="right">
          <button className="btn btn-info btn-sm" onClick={toggle}>
            Detail
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={removeTask}
            disabled={checked}
          >
            Remove
          </button>
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className={`details border border-${styleMapping[task.priority]}`}>
          <Form type="Update" task={task} onSubmit={update} />
        </div>
      </Collapse>
    </div>
  );
};

export default TaskCard;
