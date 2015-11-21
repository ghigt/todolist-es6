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

  toggleActivity(todo, active) {
    Dispatcher.dispatch({
      todo,
      active,
      eventName: 'toggle-todo-activity',
    });
  }
};

export default TodoActions;
