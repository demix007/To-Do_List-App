/**
 * @jest-environment jsdom
 */
/* eslint-disable */
import addTask from "../_edit_/addItem";
import localStorageMock from "../_edit_/localStorage";

describe('Add new task to the list', () => {
  const tasksToDo  = [];
  test ('Add a new entry to the todo list', () => {
    document.body.innerHTML = `<input id='input-box' value='complete-project'/>`
    addTask(tasksToDo)
    expect(tasksToDo).toHaveLength(1);
  })
   test('Local Storage should be updated for every input', () => {
    expect(localStorageMock.getItem('todo')).toHaveLength(1);
   })
   test ('Add a second entry to the todo list', () => {
    document.body.innerHTML = `<input id='input-box' value='complete-second'/>`
    addTask(tasksToDo)
    expect(tasksToDo[1].index).toBe(2);
  })
})