import NewTask from './components/NewTask';
import ToDoList from './components/ToDoList';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="half">
          <NewTask />
        </div>
        <div className="half">
          <ToDoList />
        </div>
      </div>
    </div>
  );
};

export default App;
