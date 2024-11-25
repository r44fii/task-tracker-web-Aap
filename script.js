function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const taskList = document.getElementById("taskList");

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `${taskText} <button class="delete" onclick="deleteTask(this)">Delete</button>`;

    taskItem.onclick = function () {
      taskItem.classList.toggle("completed");
    };

    taskList.appendChild(taskItem);
    taskInput.value = "";
  }

  function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
  }
