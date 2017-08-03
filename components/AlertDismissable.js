/**
 * Created by orourke on 8/2/17.
 */

import React, {Component} from 'react'
import {Alert, Button, Glyphicon} from 'react-bootstrap'

class AlertDismissable extends React.Component {
  constructor(props) {
    super(props)
    this.state = { alertVisible: true }
  }

  render() {
    if (this.state.alertVisible) {
      return (
        <div>
          <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
            {this.props.children}
            <p>
              <Button bsStyle="danger">See More</Button>
            </p>
          </Alert>
        </div>
      );
    }
    return <div></div> // have to return something
  }

  handleAlertDismiss = () => {
    this.setState({alertVisible: false});
  }

  handleAlertShow = () => {
    this.setState({alertVisible: true});
  }
}

export default AlertDismissable

