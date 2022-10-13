import React, { useContext } from 'react';
import TaskCard from './TaskCard';
import { TaskContext } from '../../contexts/TaskContext';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return tasks.length > 0 ? (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  ) : null;
};

export default TaskList;
