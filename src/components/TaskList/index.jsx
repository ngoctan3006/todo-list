import React, { useContext } from 'react';
import TaskCard from './TaskCard';
import { TaskContext } from '../../contexts/TaskContext';

const TaskList = ({ search, handleSelectList }) => {
  const { tasks } = useContext(TaskContext);

  return tasks.length > 0 ? (
    <div style={{ marginTop: '5rem' }}>
      {tasks
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
        ))}
    </div>
  ) : null;
};

export default TaskList;
