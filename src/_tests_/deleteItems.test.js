/**
 * @jest-environment jsdom
 */
/* eslint-disable */
import deleteTask from "../_edit_/deleteItem";

describe('remove a task from the to-do list', () => {
  const tasksToDo = [
    {
      description: 'complete',
      status: false,
      index: '1',
    },
    {
      description: 'two',
      status: false,
      index: '2',
    },
    {
      description: 'three',
      status: false,
      index: '3',
    }
  ]
  test ('remove an entry from the to-do list', () => {
    let taskTodo = tasksToDo[1]
    expect(deleteTask(taskTodo, tasksToDo)).toHaveLength(2)
  })
})