/* eslint-disable */
import localStorageMock from "./localStorage";

function deleteTask(taskTodo, tasksToDo) {
  let index = taskTodo.index
  const currentTasks = tasksToDo.filter(taskTodo => taskTodo.index !== index);
  tasksToDo.forEach((object, index) => {
    object.index = index + 1;
  });
  localStorageMock.setItem('taskTodo', currentTasks);
  return currentTasks
}
export default deleteTask