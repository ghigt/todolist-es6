import React, {Component} from 'react';

import Avatar from 'material-ui/lib/avatar';

import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';

import List from 'material-ui/lib/lists/list';
import ListDivider from 'material-ui/lib/lists/list-divider';
import ListItem from 'material-ui/lib/lists/list-item';

import TextField from 'material-ui/lib/text-field';

export default class Hello extends Component {
  _submit(event) {
    event.preventDefault();
    // Send => this.refs.todo.getValue()
    console.log(this.refs.todo.getValue());
  }

  render() {
    const items = this.props.elements.map(element =>
      <ListItem key={element} primaryText={'Un super element: ' + element} />);

    return <div>
      <Card>
        <CardHeader
          title="Liste de choses à faire"
          avatar={<Avatar>A</Avatar>}>
        </CardHeader>
        <form onSubmit={this._submit.bind(this)} style={{padding: '0 20px'}}>
          <TextField ref="todo" hintText="Que devez-vous faire?" fullWidth={true} />
        </form>
        <List>
          {items}
        </List>
      </Card>
    </div>;
  }
};
