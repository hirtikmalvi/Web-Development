import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import ToDoItems from "./components/ToDoItems";
import "./App.css";

function App() {

  const ToDoItemsObj = [{
    toDoName: "Buy Milk",
    toDoDate: "26/04/2024"
  },
  {
    toDoName: "Go to college",
    toDoDate: "26/04/2024"
  },
  {
    toDoName: "Node JS Course started",
    toDoDate: "Today"
  }
  ];

  return <center className="todo-container">
    <AppName />
    <AddToDo />
    <ToDoItems toDoItemsProps={ToDoItemsObj}></ToDoItems>
  </center >
}

export default App;