import React, { useContext } from 'react';
import TaskCard from './TaskCard';
import { TaskContext } from '../../contexts/TaskContext';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return tasks.length > 0 ? (
    <div>
      {tasks
        .sort((a, b) => (a.due > b.due ? 1 : -1))
        .map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
    </div>
  ) : null;
};

export default TaskList;
