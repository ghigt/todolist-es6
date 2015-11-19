import React, {Component} from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import List from 'material-ui/lib/lists/list';
import ListDivider from 'material-ui/lib/lists/list-divider';
import ListItem from 'material-ui/lib/lists/list-item';

export default class Hello extends Component {
  render() {
    const items = [];
    for(let i = 0; i < 100; i++) {
      items.push(<ListItem key={i} primaryText={'Un super element: ' + i} />);
    }

    return <div>
      <RaisedButton label="Salut" secondary={true} />
      <List>
        {items}
      </List>
    </div>;
  }
};
