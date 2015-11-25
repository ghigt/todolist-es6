import React, {Component} from 'react';

import BNavbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';

export default class Navbar extends Component {
  render() {
    return (
      <BNavbar fixedTop={true} inverse>
        <BNavbar.Header>
          <BNavbar.Brand>
            <a href="/">{this.props.title}</a>
          </BNavbar.Brand>
        </BNavbar.Header>
        <BNavbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/about">A propos</NavItem>
          </Nav>
        </BNavbar.Collapse>
      </BNavbar>
    );
  }
};
