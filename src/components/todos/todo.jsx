import React, {Component} from 'react';

import ListItem from 'material-ui/lib/lists/list-item';
import Toggle from 'material-ui/lib/toggle';

import TodoActions from '../../actions/todo-actions';

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

  onToggle(event, toggled) {
    TodoActions.toggleActivity(this.props.element, toggled);
  }

  render() {
    return (
      <ListItem primaryText={this.props.element.message} disabled={true}>
        <Toggle
          style={this.props.toggleStyle}
          defaultToggled={this.props.element.active}
          onToggle={this.onToggle} />
      </ListItem>
    );
  }
};
