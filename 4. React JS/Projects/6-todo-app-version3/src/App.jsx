import "./App.css";
import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import ToDoItems from "./components/ToDoItems";
import EmptyListMessage from "./components/EmptyListMessage";
import ToDoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <ToDoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddToDo />
        <EmptyListMessage />
        <ToDoItems />
      </center>
    </ToDoItemsContextProvider>
  );
}
export default App;
