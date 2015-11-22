import React, {Component} from 'react';

import Avatar from 'material-ui/lib/avatar';

import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';

import List from 'material-ui/lib/lists/list';
import TextField from 'material-ui/lib/text-field';

import Snackbar from 'material-ui/lib/snackbar';

import Todo from './todo';

export default class TodoList extends Component {
  static defaultProps = {
    formStyle: {
      padding: '0 20px'
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      errorMessage: ''
    }

    // this.props.init();

    this.submit = this.submit.bind(this);
    // this.forceUpdate = this.forceUpdate.bind(this);
    // this.displayError = this.displayError.bind(this);
  }

  // componentDidMount() {
  //   TodoStore.on('change', this.forceUpdate);
  //   TodoStore.on('error', this.displayError);
  // }

  // componentWillUnmount() {
  //   TodoStore.removeListener('change', this.forceUpdate);
  //   TodoStore.removeListener('error', this.displayError);
  // }

  // displayError(res) {
  //   this.setState({
  //     errorMessage: `Impossible de créer l'entrée: Erreur ${res.status} - ${res.statusText}`
  //   });
  //   this.refs.error.show();
  //   this.forceUpdate();
  // }

  submit(e) {
    e.preventDefault();
    this.props.addTodo(this.refs.todo.getValue());
    this.refs.todo.clearValue()
  }

  // <Snackbar
  //   ref="error" action="erreur"
  //   message={this.state.errorMessage}
  //   autoHideDuration={2000} />
  render() {
    return (
      <Card>
        <CardHeader title="Liste de choses à faire" avatar={<Avatar>A</Avatar>} />
        <form onSubmit={this.submit} style={this.props.formStyle}>
          <TextField ref="todo" hintText="Que devez-vous faire?" fullWidth={true} />
        </form>
        <List>
          {this.props.todos.map((element, i) =>
            <Todo key={i} element={element} />)}
        </List>
      </Card>
    );
  }
};
