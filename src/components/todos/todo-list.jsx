import React, {Component} from 'react';

import TodoStore from '../../stores/todo-store';
import TodoActions from '../../actions/todo-actions';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Alert from 'react-bootstrap/lib/Alert';

import Input from 'react-bootstrap/lib/Input';

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
      errorMessage: '',
      value: '',
      alertVisible: false
    }

    TodoActions.init(this.props.elements);

    this.submit = this.submit.bind(this);
    this.forceUpdate = this.forceUpdate.bind(this);
    this.displayError = this.displayError.bind(this);
    this.change = this.change.bind(this);
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
    this.handleAlertShow = this.handleAlertShow.bind(this);
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
    this.handleAlertShow();
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

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  }

  handleAlertShow() {
    this.setState({alertVisible: true});
  }

  render() {
    return <div>
      {this.state.alertVisible ?
        <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss} dismissAfter={2000}>
          <h4>Erreur</h4>
          <p>{this.state.errorMessage}</p>
        </Alert> : null}
      <Row>
        <Col>
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
     </div>;
  }
};
