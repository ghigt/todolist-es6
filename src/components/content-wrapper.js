import React, {Component} from 'react';

import Paper from 'material-ui/lib/paper';

export default class ContentWrapper extends Component {
  static defaultProps = {
    mainStyle: {
      margin: '94px 30% 0',
      position: 'absolute',
      width: '40%'
    }
  }

  render() {
    return (
      <Paper rounded={false} zDepth={0} style={this.props.mainStyle}>
        {this.props.children}
      </Paper>
    );
  }
};
