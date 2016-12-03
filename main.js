$(document).ready(function() {
  listTodos();
});

let todos = [
  {
    id: 1,
    task: 'Install Node and NPM',
    completed: false
  },
  {
    id: 2,
    task: 'Set up and install Git',
    completed: false
  },
  {
    id: 3,
    task: 'Install Atom',
    completed: false
  }
]

function listTodos() {
  todos.forEach((todo) => {
    console.log(todo.task);
  });
}
