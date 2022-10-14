import NewTask from './components/NewTask';
import ToDoList from './components/ToDoList';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="half sm-full">
          <NewTask />
        </div>
        <div className="half sm-full">
          <ToDoList />
        </div>
      </div>
    </div>
  );
};

export default App;
