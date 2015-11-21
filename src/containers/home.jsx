import React, {Component} from 'react';

import TodoList from '../components/todos/todo-list';
import Layout from '../components/layout';

export default class Home extends Component {
  render() {
    return (
      <Layout title={this.props.title}>
        <TodoList elements={this.props.elements} />
      </Layout>
    );
  }
}
