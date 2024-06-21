function ToDoItem_1() {

    let todoItem = "Buy Milk";
    let todoDate = "4/10/2023";

    return <div className="container">
        <div class="row new-row">
            <div class="col-6">
                {todoItem}
            </div>
            <div class="col-4">
                {todoDate}
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-danger new-button">Delete</button>
            </div>
        </div>
    </div>
}

export default ToDoItem_1;