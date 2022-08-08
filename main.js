window.addEventListener('load', () => {
	const form = document.querySelector('#new-task-form');
	const input = document.querySelector('#new-task-input');
	const tasksContainer = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const newTask = input.value;

        // HTML Setup
        const newTaskContainer = document.createElement('div');
        newTaskContainer.classList.add('task');

        const newTaskContent = document.createElement('div');
        newTaskContent.classList.add('content');

        newTaskContainer.appendChild(newTaskContent);

        const newInput = document.createElement('input');
        newInput.classList.add('text');
        newInput.type = 'text';
        newInput.setAttribute('readonly', 'readonly');
        newInput.value = newTask;

        newTaskContent.appendChild(newInput);


        // Final
        tasksContainer.appendChild(newTaskContainer);
    })

});