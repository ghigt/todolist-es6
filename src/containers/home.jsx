import React, {Component} from 'react';

import Hello from '../components/hello';
import Layout from '../components/layout';

export default class Home extends Component {
  render() {
    return <Layout>
      <Hello />
    </Layout>
  }
}
