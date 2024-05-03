document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value;
    if (task) {
        const tasksList = document.getElementById('tasksList');
        const listItem = document.createElement('li');
        listItem.textContent = task;
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        tasksList.appendChild(listItem);
        taskInput.value = ''; // Clear input field after adding
        
        editButton.onclick = function() {
            const newTask = prompt("Edit your task", listItem.textContent.replace("EditDelete", "").trim());
            if (newTask) listItem.firstChild.textContent = newTask;
        };
        deleteButton.onclick = function() {
            tasksList.removeChild(listItem);
        };
    }
});
