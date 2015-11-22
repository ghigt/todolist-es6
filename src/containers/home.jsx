import React, {Component,PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodoList from '../components/todos/todo-list';
import Layout from '../components/layout';
import * as TodoActions from '../actions/todo-actions';

import { Provider } from 'react-redux'; // NOTE: To move in main.js
import configureStore from '../store/configureStore'; // NOTE: To move in main.js

const store = configureStore(); // NOTE: To move in main.js

class Home extends Component {
  render() {
    const { elements, actions } = this.props;
    return <Provider store={store}> // NOTE: To move in main.js
      <Layout title={this.props.title}>
        <TodoList todos={this.props.elements} addTodo={actions.addTodo} />
      </Layout>
    </Provider>
  }
}

Home.propTypes = {
  elements: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
