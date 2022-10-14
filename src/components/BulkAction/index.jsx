import React, { useContext } from 'react';
import './bulk.css';
import { TaskContext } from '../../contexts/TaskContext';

const BulkAction = ({ selectedList, setSelectedList }) => {
  const { deleteMany } = useContext(TaskContext);
  if (selectedList.length === 0) return null;

  const handleDelete = () => {
    const cf = window.confirm('Are you sure you want to delete these tasks?');
    if (!cf) return;
    deleteMany(selectedList);
    setSelectedList([]);
    alert('Delete successfully!');
  };

  return (
    <div className="bulk">
      <p className="count">
        {`${selectedList.length} task${
          selectedList.length === 1 ? '' : 's'
        } selected`}
      </p>
      <button className="btn btn-info btn-sm">Done</button>
      <button className="btn btn-danger btn-sm" onClick={handleDelete}>
        Remove
      </button>
    </div>
  );
};

export default BulkAction;
