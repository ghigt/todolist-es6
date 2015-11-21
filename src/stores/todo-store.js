import {EventEmitter} from 'events';
import Dispatcher from '../dispatcher/index';

const TodoStore = Object.assign({}, EventEmitter.prototype, {
  todos: [],

  init(todos) {
    this.todos = todos;
  },

  getAll() {
    return this.todos;
  },

  add(todo) {
    this.todos.push(todo);

    return fetch('/api/todo', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
    .then(res => {
      if(!res.status.toString().startsWith('2')) {
        this.todos.splice(this.todos.indexOf(todo), 1);
        this.emit('error', res);
      }
      return res;
    });
  }
});

Dispatcher.register(payload => {
  switch(payload.eventName) {
    case 'init-todos':
      TodoStore.init(payload.todos);
      TodoStore.emit('change');
      break;
    case 'new-todo-item':
      TodoStore.add(payload.todo);
      TodoStore.emit('change');
      break;
    case 'toggle-todo-activity':
      payload.todo.active = payload.active;
      TodoStore.emit('change');
      break;
  }

  return true;
});

export default TodoStore;
