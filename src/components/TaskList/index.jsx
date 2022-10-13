import React from 'react';
import TaskCard from './TaskCard';

const tasks = [
  {
    id: 1,
    title: 'Test 1',
    description: 'Test 1 description',
    priority: 'normal',
  },
  {
    id: 2,
    title: 'Test 2',
    description: 'Test 2 description',
    priority: 'high',
  },
];

const TaskList = () => {
  return tasks.length > 0 ? (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  ) : null;
};

export default TaskList;
