import { useContext, useRef, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import styles from "./AddToDo.module.css";
import { toDoItemsContext } from "../store/todo-items-store";

function AddToDo() {
  //We can do the same using useState...
  const enteredToDoElement = useRef("");
  const enteredDateElement = useRef("");

  //onClick handle Local
  const buttonHandle = (event) => {
    const enteredToDo = enteredToDoElement.current.value;
    const enteredDate = enteredDateElement.current.value;
    if (enteredToDo.length != 0 && enteredDate.length != 0) {
      addNewItem(event, enteredToDo, enteredDate); //Button Handle from Parent(App)
      //Clearing the inputs
      enteredToDoElement.current.value = "";
      enteredDateElement.current.value = "";
    } else {
      alert("Please, Enter the Values!");
    }
  };

  const { addNewItem } = useContext(toDoItemsContext);

  return (
    <div className="container text-center">
      <div className="row new-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            ref={enteredToDoElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={enteredDateElement} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success new-button"
            onClick={buttonHandle}
          >
            <IoIosAddCircleOutline className={styles.buttonSize} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
