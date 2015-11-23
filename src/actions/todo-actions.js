import Dispatcher from '../dispatcher/index';

const TodoActions = {
  init(todos) {
    Dispatcher.dispatch({
      todos,
      eventName: 'init-todos'
    });
  },

  add(message) {
    Dispatcher.dispatch({
      eventName: 'new-todo-item',
      todo: {
        message,
        active: true
      }
    });
  },

  update(todo, updates) {
    Dispatcher.dispatch({
      todo,
      updates,
      eventName: 'toggle-todo-update',
    });
  }
};

export default TodoActions;
