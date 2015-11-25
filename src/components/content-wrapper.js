import React, {Component} from 'react';

import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

export default class ContentWrapper extends Component {
  static defaultProps = {
    mainStyle: {
      margin: '94px 0'
    }
  }

  render() {
    return (
      <Row style={this.props.mainStyle}>
        <Col xsOffset={4} xs={4}>
          {this.props.children}
        </Col>
      </Row>
    );
  }
};
