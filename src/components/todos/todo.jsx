import React, {Component} from 'react';

import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

import TodoActions from '../../actions/todo-actions';
import TodoStore from '../../stores/todo-store';

export default class Todo extends Component {
  static defaultProps = {
    toggleStyle: {
      display: 'block',
      position: 'absolute',
      left: '90%',
      top: 13
    }
  }

  constructor(props) {
    super(props);

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(event, active) {
    TodoActions.update(this.props.element, {active});
  }

  render() {
    return (
      <ListGroupItem>{this.props.element.message}</ListGroupItem>
    );
    // <Toggle
    //    style={this.props.toggleStyle}
    //    defaultToggled={this.props.element.active}
    //    onToggle={this.onToggle} />
  }
};
