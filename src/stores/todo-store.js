import {EventEmitter} from 'events';
import Dispatcher from '../dispatcher/index';
import jsonpatch from 'fast-json-patch';

const TodoStore = Object.assign({}, EventEmitter.prototype, {
  todos: [],

  init(todos) {
    this.todos = todos;
  },

  getAll() {
    return this.todos;
  },

  update(todo, updates) {
    const originalTodo = Object.assign({}, todo);

    if(typeof fetch === 'function') {
      return fetch(`/api/todo/${todo.id}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonpatch.compare(originalTodo, Object.assign(todo, updates)))
      })
      .then(res => {
        if(!res.status.toString().startsWith('2')) {
          jsonpatch.apply(todo, jsonpatch.compare(todo, originalTodo));
          return Promise.reject(res);
        } else {
          return res;
        }
      });
    } else {
      return Promise.resolve();
    }
  },

  add(todo) {
    this.todos.push(todo);

    if(typeof fetch === 'function') {
      return fetch('/api/todo', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
      })
      .then(res => {
        if(!res.status.toString().startsWith('2')) {
          this.todos.splice(this.todos.indexOf(todo), 1);
          return Promise.reject(res);
        } else {
          return res;
        }
      });
    } else {
      return Promise.resolve();
    }
  }
});

Dispatcher.register(payload => {
  switch(payload.eventName) {
    case 'init-todos':
      TodoStore.init(payload.todos);
      TodoStore.emit('change');
      break;
    case 'new-todo-item':
      TodoStore.add(payload.todo)
        .catch(err => TodoStore.emit('error', err))
        .then(() => TodoStore.emit('change'))
      break;
    case 'toggle-todo-update':
      TodoStore.update(payload.todo, payload.updates)
        .catch(err => TodoStore.emit('error', err))
        .then(() => TodoStore.emit('change'))
      break;
  }

  return true;
});

export default TodoStore;
