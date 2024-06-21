import AddToDo from "./AddToDo";
import AppName from "./AppName";
import ToDoItem_1 from "./ToDoItem_1";
import ToDoItem_2 from "./ToDoItem_2";
import "./App.css";

function App() {
  return <center className="todo-container">
    <AppName />
    <AddToDo />
    <div className="todo-items-container">
      <ToDoItem_1 />
      <ToDoItem_2 />
    </div>

  </center >
}

export default App;