import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import Form from '../Form';
import './task-list.css';

const styleMapping = {
  high: 'danger',
  normal: 'warning',
  low: 'success',
};

const TaskCard = ({ task }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="shadow">
      <div
        className={`card border border-${styleMapping[task.priority]} ${
          open ? 'open' : ''
        }`}
      >
        <div className="left">
          <input type="checkbox" />
          <h2>{task.title}</h2>
        </div>
        <div className="right">
          <button className="btn btn-info" onClick={toggle}>
            Details
          </button>
          <button className="btn btn-danger">Remove</button>
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className={`details border border-${styleMapping[task.priority]}`}>
          <Form />
        </div>
      </Collapse>
    </div>
  );
};

export default TaskCard;
