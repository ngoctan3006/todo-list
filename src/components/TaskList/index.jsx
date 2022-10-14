import React, { useContext } from 'react';
import TaskCard from './TaskCard';
import { TaskContext } from '../../contexts/TaskContext';

const TaskList = ({ search, handleSelectList }) => {
  const { tasks } = useContext(TaskContext);

  return (
    <div style={{ marginTop: '5rem' }}>
      {tasks.length > 0 ? (
        tasks
          .sort((a, b) => (a.due > b.due ? 1 : -1))
          .filter((task) =>
            task.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              handleSelectList={handleSelectList}
            />
          ))
      ) : (
        <div
          style={{ width: '60%', margin: 'auto' }}
          className="alert alert-info"
        >
          No tasks
        </div>
      )}
    </div>
  );
};

export default TaskList;
