import React, {Component} from 'react';

import Paper from 'material-ui/lib/paper';
import FlatButton from 'material-ui/lib/flat-button';

export default class NavBar extends Component {
  static defaultProps = {
    style: {
      backgroundColor: '#00bcd4',
      color: 'white',
      height: 64,
      padding: '0 30px',
      position: 'fixed',
      width: '100%',
      zIndex: 9999
    }
  }

  render() {
    return <Paper rounded={false} zDepth={2} style={this.props.style}>
      <h3>
        <FlatButton linkButton={true} href="/" secondary={true}
         style={{backgroundColor: '#00bcd4', color: 'white'}}
         rippleColor="white" label={this.props.title} />
        <FlatButton linkButton={true} href="/about" secondary={true}
         style={{backgroundColor: '#00bcd4', color: 'white'}}
         rippleColor="white" label="A propos" />
      </h3>
    </Paper>;
  }
};
