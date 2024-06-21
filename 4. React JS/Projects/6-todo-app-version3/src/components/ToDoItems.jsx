import { useContext } from "react";
import { toDoItemsContext } from "../store/todo-items-store";
import ToDoItem from "./ToDoItem";

let ToDoItems = () => {
  const { toDoItemsObj } = useContext(toDoItemsContext);

  return (
    <>
      <div className="todo-items-container">
        {toDoItemsObj.map((item) => (
          <ToDoItem
            key={item.toDoName}
            toDoName={item.toDoName}
            toDoDate={item.toDoDate}
          ></ToDoItem>
        ))}
      </div>
    </>
  );
};

export default ToDoItems;
