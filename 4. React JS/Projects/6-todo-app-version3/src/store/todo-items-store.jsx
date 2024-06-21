import { useReducer } from "react";
import dateFormat from "dateformat";
import { createContext } from "react";
export const toDoItemsContext = createContext([]);

//Using useReducer Hook
let toDoItemsObjReducer = (currentToDoItems, action) => {
  let newToDoItems = currentToDoItems;
  if (action.type === "ADD_ITEM") {
    newToDoItems = [
      ...currentToDoItems,
      {
        toDoName: action.payload.enteredToDo,
        toDoDate: dateFormat(action.payload.enteredDate, "dd-mmmm-yyyy"),
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newToDoItems = currentToDoItems.filter(
      (item) => item.toDoName !== action.payload.toDoName
    );
  }
  return newToDoItems;
};

const ToDoItemsContextProvider = ({ children }) => {
  //Dispatcher Func is the BOSS here. which does all the controls.
  const [toDoItemsObj, toDoItemsDispatcher] = useReducer(
    toDoItemsObjReducer,
    []
  );

  //Add button in AddToDo component (Adding Items)
  const addNewItem = (event, enteredToDo, enteredDate) => {
    const newItemAction = {
      type: "ADD_ITEM",
      payload: {
        enteredToDo,
        enteredDate,
      },
    };
    toDoItemsDispatcher(newItemAction);
  };

  //To Delete the Item
  const deleteItem = (event, toDoName, toDoDate) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        toDoName,
      },
    };
    toDoItemsDispatcher(deleteItemAction);
  };

  return (
    <toDoItemsContext.Provider value={{ toDoItemsObj, addNewItem, deleteItem }}>
      {children}
    </toDoItemsContext.Provider>
  );
};

export default ToDoItemsContextProvider;