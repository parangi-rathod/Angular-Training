var taskInput = document.getElementsByClassName("add-tasks")[0];
var addButton = document.getElementsByClassName("add-button")[0];
var incompleteTask = document.querySelector(".todo-list");
var completedTask = document.querySelector(".completed-list");

// Function to create a new task element
var createTaskElement = (taskString) => {
    var listItem = document.createElement("li");
    var checkbox = document.createElement("input");
    var label = document.createElement("label");
    var deleteButton = document.createElement("button");

    label.innerText = taskString;
    checkbox.type = "checkbox";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);
    return listItem;
};

// Function to add a new task
var addTask = () => {
    console.log("Add Task");
    var listItem = createTaskElement(taskInput.value);
    incompleteTask.appendChild(listItem);
    taskInput.value = "";

    // Add event listener to the newly created checkbox
    var checkbox = listItem.querySelector("input[type=checkbox]");
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            moveTask(listItem, completedTask);
        } else {
            moveTask(listItem, incompleteTask);
        }
    });
};

// Function to delete a task
var deleteTask = (listItem) => {
    console.log("Delete Task");
    listItem.parentNode.removeChild(listItem);
};

// Function to move a task to a different list
var moveTask = (taskItem, targetList) => {
    targetList.appendChild(taskItem);
};

// Event listeners
addButton.addEventListener("click", addTask);

// Event delegation for delete buttons
document.addEventListener("click", function (event) {
    if (event.target && event.target.className == "delete") {
        deleteTask(event.target.parentNode);
    }
});
