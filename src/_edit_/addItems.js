/* eslint-disable */
import localStorageMock from "./localStorage";

function addTask(taskTodo) {
  const newTask = {
    description: document.getElementById('input-box').value,
    completed: false,
    index: taskTodo.length + 1,
  };
  taskTodo.push(newTask);
  localStorageMock.setItem('todo', taskTodo);
}

export default addTask;