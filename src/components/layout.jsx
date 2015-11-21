import React, {Component} from 'react';

import NavBar from './navbar';
import ContentWrapper from './content-wrapper';

export default class Layout extends Component {
  render() {
    return <div>
      <NavBar title={this.props.title || 'Titre'} />
      <ContentWrapper>
        {this.props.children}
      </ContentWrapper>
    </div>
  }
}
