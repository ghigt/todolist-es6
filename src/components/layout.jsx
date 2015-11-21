import React, {Component} from 'react';

import Paper from 'material-ui/lib/paper';

import NavBar from './navbar';
import ContentWrapper from './content-wrapper';

export default class Layout extends Component {
  render() {
    return (
      <Paper rounded={false} zDepth={0}>
        <NavBar title={this.props.title || 'Titre'} />
        <ContentWrapper>
          {this.props.children}
        </ContentWrapper>
      </Paper>
    );
  }
}
