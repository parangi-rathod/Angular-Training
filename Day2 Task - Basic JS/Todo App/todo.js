var taskInput = document.getElementsByClassName("add-tasks")[0];
var addButton = document.getElementsByClassName("add-button")[0];
var incompleteTask = document.querySelector(".todo-list");
var completedTask = document.querySelector(".completed-list");

var createTaskElement = (taskString) => {
    var listItem = document.createElement("li");
    var checkbox = document.createElement("input");
    var label = document.createElement("label");
    var deleteButton = document.createElement("button");

    label.innerText = taskString;
    checkbox.type = "checkbox";
    checkbox.classList.add("round-checkbox"); 
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
    var taskString = taskInput.value.trim(); 
    if (taskString !== "") { 
        var listItem = createTaskElement(taskString);
        incompleteTask.appendChild(listItem);
        taskInput.value = "";

        
        var checkbox = listItem.querySelector("input[type=checkbox]");
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                moveTask(listItem, completedTask);
            } else {
                moveTask(listItem, incompleteTask);
            }
        });
    } else {
        alert("Please enter a task!");
    }
};


var deleteTask = (listItem) => {
    console.log("Delete Task");
    listItem.parentNode.removeChild(listItem);
};

var moveTask = (taskItem, targetList) => {
    targetList.appendChild(taskItem);
};

addButton.addEventListener("click", addTask);

document.addEventListener("click", function (event) {
    if (event.target && event.target.className == "delete") {
        deleteTask(event.target.parentNode);
    }
});
