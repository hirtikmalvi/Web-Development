import { MdDeleteForever } from "react-icons/md";
import styles from "./AddToDo.module.css";
import { useContext } from "react";
import { toDoItemsContext } from "../store/todo-items-store";

function ToDoItem({ toDoName, toDoDate }) {
  const { deleteItem } = useContext(toDoItemsContext);

  return (
    <div className="container">
      <div className="row new-row">
        <div className="col-6">{toDoName}</div>
        <div className="col-4">{toDoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger new-button"
            onClick={(event) => {
              deleteItem(event, toDoName, toDoDate);
            }}
          >
            <MdDeleteForever className={styles.buttonSize} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
