import { useContext } from "react";
import styles from "./EmptyListMessage.module.css";
import { toDoItemsContext } from "../store/todo-items-store";

function EmptyListMessage() {
  const { toDoItemsObj } = useContext(toDoItemsContext);

  return (
    <>
      {toDoItemsObj.length == 0 ? (
        <p className={styles.message}>Please Enter Todo. Your list is Empty!</p>
      ) : null}
    </>
  );
}

export default EmptyListMessage;
