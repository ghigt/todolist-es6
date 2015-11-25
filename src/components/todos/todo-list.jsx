import React, {Component} from 'react';

import TodoStore from '../../stores/todo-store';
import TodoActions from '../../actions/todo-actions';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

import Input from 'react-bootstrap/lib/Input';

import Todo from './todo';

export default class TodoList extends Component {
  static defaultProps = {
    formStyle: {
      padding: '0 20px'
    }
  }

  state = {
    errorMessage: '',
    value: ''
  }

  constructor(props) {
    super(props);

    TodoActions.init(this.props.elements);

    this.submit = this.submit.bind(this);
    this.forceUpdate = this.forceUpdate.bind(this);
    this.displayError = this.displayError.bind(this);
    this.change = this.change.bind(this);
  }

  componentDidMount() {
    TodoStore.on('change', this.forceUpdate);
    TodoStore.on('error', this.displayError);
  }

  componentWillUnmount() {
    TodoStore.removeListener('change', this.forceUpdate);
    TodoStore.removeListener('error', this.displayError);
  }

  displayError(res) {
    this.setState({
      errorMessage: `Impossible de créer l'entrée: Erreur ${res.status} - ${res.statusText}`
    });
    this.refs.error.show();
  }

  change() {
    this.setState({
      value: this.refs.input.getValue()
    });
  }

  submit(event) {
    TodoActions.add(this.refs.input.getValue());
    this.setState({value: ''});
    event.preventDefault();
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <h3>Liste de choses à faire</h3>
          <ListGroup>
            <ListGroupItem>
              <form onSubmit={this.submit} style={this.props.formStyle}>
                <Input ref="input" type="text" value={this.state.value} placeholder="Que devez-vous faire?" onChange={this.change} />
              </form>
            </ListGroupItem>
            {TodoStore.getAll().map((element, i) => <Todo key={i} element={element} />)}
          </ListGroup>
        </Col>
      </Row>
    );
    //    <Snackbar
    //      ref="error" action="erreur"
    //      message={this.state.errorMessage}
    //      autoHideDuration={2000} />
  }
};
