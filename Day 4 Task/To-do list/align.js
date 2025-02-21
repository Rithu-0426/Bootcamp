function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
        <span onclick="completeTask(this)">${taskText}</span>
        <button class="btn btn-danger btn-sm" onclick="removeTask(this)">X</button>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
}

function completeTask(element) {
    let completedList = document.getElementById("completedList");
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center completed";
    li.innerHTML = `
        <span>${element.innerText}</span>
        <button class="btn btn-danger btn-sm" onclick="removeTask(this)">X</button>
    `;
    completedList.appendChild(li);
    element.parentElement.remove();
}

function removeTask(button) {
    button.parentElement.remove();
}

