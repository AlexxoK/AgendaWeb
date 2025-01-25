let tasks = [];

function addTask() {
    const taskName = document.getElementById('taskName').value;
    const taskPriority = document.getElementById('taskPriority').value;

    if (!taskName || !taskPriority) {
        alert('Por favor complete ambos campos.');
        return;
    }

    const task = {
        name: taskName,
        priority: parseInt(taskPriority),
        id: Date.now()
    };

    tasks.push(task);
    tasks.sort((a, b) => a.priority - b.priority);

    document.getElementById('taskName').value = '';
    document.getElementById('taskPriority').value = '';
    renderTasks();
}

function editTask(id) {
    const task = tasks.find(task => task.id === id);
    const newName = prompt("Edita el nombre de la tarea", task.name);
    const newPriority = prompt("Edita la prioridad (1-5)", task.priority);

    if (newName && newPriority) {
        task.name = newName;
        task.priority = parseInt(newPriority);
        tasks.sort((a, b) => a.priority - b.priority);
        renderTasks();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';

        taskElement.innerHTML = `
            <span>${task.name} - <span class="priority">Prioridad: ${task.priority}</span></span>
            <div class="actions">
                <button onclick="editTask(${task.id})">Editar</button>
                <button onclick="deleteTask(${task.id})">Eliminar</button>
            </div>
        `;

        taskList.appendChild(taskElement);
    });
}
