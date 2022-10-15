import './style.css';

// Array data for todo-List

let tasksArray = [
  {
    index: 0,
    description: 'Code',
    completed: false,
  },
  {
    index: 1,
    description: 'Eat',
    completed: false,
  },
  {
    index: 2,
    description: 'Sleep',
    completed: false,
  },
];

const createIndexes = () => {
  for (let i = 0; i < tasksArray.length; i + 1) {
    tasksArray[i].index = i;
  }
};

const saveToLocalStorage = () => {
  localStorage.setItem('todo_list', JSON.stringify(tasksArray));
};

const addToDo = (input) => {
  const dataObj = {
    index: 0,
    description: '',
    completed: false,
  };

  dataObj.description = input;
  tasksArray.push(dataObj);
  createIndexes();
  saveToLocalStorage();
  window.location.reload();
};

const component = () => {
  const toDoListContainer = document.querySelector('.todo-list-container');
  let element = document.createElement('li');
  element.className = 'tasks';

  // Heading
  const heading = document.createElement('h2');
  heading.className = 'main-header';
  heading.textContent = "Today's To Do";
  element.appendChild(heading);

  const clearTasks = document.createElement('button');
  clearTasks.className = 'clear-tasks';
  clearTasks.innerHTML = '<i class=\'sync alternate icon\'></i>';
  element.appendChild(clearTasks);
  toDoListContainer.appendChild(element);

  // Add the day's todo tasks
  element = document.createElement('li');
  element.className = 'tasks';

  const addTask = document.createElement('input');
  addTask.className = 'add-item';
  addTask.placeholder = 'Add to your list';
  addTask.value = '';
  element.appendChild(addTask);

  const enterButton = document.createElement('button');
  enterButton.className = 'enter-button';
  enterButton.innerHTML = '<i class=\'level down alternate icon\'></i>';
  element.appendChild = (enterButton);
  toDoListContainer.appendChild(element);

  addTask.addEventListener('keydown', (e) => {
    if (e.keycode === 13) {
      addToDo(addTask.value);
    }
  });

  enterButton.addEventListener('click', () => {
    addToDo(addTask.value);
  });

  // Populate the todo Items
  tasksArray.forEach((todo) => {
    element = document.createElement('li');
    element.className = 'tasks';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = todo.completed;
    element.appendChild(checkbox);

    const description = document.createElement('textarea');
    description.className = 'description';
    description.rows = 'auto';
    description.value = todo.description.toLowerCase().charAt(0).toUpperCase();
    description.value += todo.description.slice(1);
    element.appendChild(description);

    const taskButton = document.createElement('button');
    taskButton.className = 'task-button';
    taskButton.innerHTML = '<i class=\'ellipsis vertical icon\'></i>';
    element.appendChild(taskButton);
    toDoListContainer.appendChild(element);
  });

  // Clear completed button
  element = document.createElement('li');

  const clearCompletedTask = document.createElement('button');
  clearCompletedTask.className = 'clear-completed';
  clearCompletedTask.innerHTML = 'Clear all completed';
  element.appendChild(clearCompletedTask);
  toDoListContainer.appendChild(element);
};

const onPageLoad = () => {
  window.onload = () => {
    if (localStorage.getItem('todo_list') !== null) {
      tasksArray = JSON.parse(localStorage.getItem('todo_list'));
      component();
    } else {
      component();
    }
  };
};

onPageLoad();