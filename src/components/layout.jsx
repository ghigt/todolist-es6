import React, {Component} from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

import Navbar from './navbar';
import ContentWrapper from './content-wrapper';

export default class Layout extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <Navbar title={this.props.title || 'Titre'} />
            <ContentWrapper>
              {this.props.children}
            </ContentWrapper>
          </Col>
        </Row>
      </Grid>
    );
  }
}
