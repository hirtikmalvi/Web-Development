import ToDoItem from "./ToDoItem";

let ToDoItems = ({ toDoItemsProps }) => {

    return (
        <>
            <div className="todo-items-container">
                {
                    toDoItemsProps.map(item => <ToDoItem key={item.toDoName} toDoName={item.toDoName} toDoDate={item.toDoDate}></ToDoItem>)
                }
            </div>
        </>
    );
}

export default ToDoItems;