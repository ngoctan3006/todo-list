import React, { useContext } from 'react';
import TaskCard from './TaskCard';
import { TaskContext } from '../../contexts/TaskContext';

const TaskList = ({ search }) => {
  const { tasks } = useContext(TaskContext);

  return tasks.length > 0 ? (
    <div>
      {tasks
        .sort((a, b) => (a.due > b.due ? 1 : -1))
        .filter((task) =>
          task.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
    </div>
  ) : null;
};

export default TaskList;
