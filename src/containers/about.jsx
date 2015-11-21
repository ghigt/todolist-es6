import React, {Component} from 'react';

import Layout from '../components/layout';

export default class About extends Component {
  render() {
    return (
      <Layout title={this.props.title}>
        <h1>Je suis un à propos!</h1>
      </Layout>
    );
  }
}
