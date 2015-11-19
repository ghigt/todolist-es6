import React, {Component} from 'react';

import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';

export default class Layout extends Component {
  render() {
    return <div>
      <AppBar
        title="Titre"
        iconElementRight={
          <span>
            <FlatButton label="Home" linkButton={true} href="/" />
            <FlatButton label="A propos" linkButton={true} href="/about" />
          </span>
        } />
      {this.props.children}
    </div>
  }
}
