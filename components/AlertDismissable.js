/**
 * Created by orourke on 8/2/17.
 *
 * Usage: <AlertDismissable style="success|info|warning|danger">content</AlertDismissable>
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
          <Alert className="etail" bsStyle={this.props.style || 'success'} onDismiss={this.handleAlertDismiss}>
            {this.props.children}
            <p>
              <Button href={this.props.link} bsStyle={this.props.style || 'success'}>See More</Button>
            </p>
          </Alert>
          <style jsx>{`
              div {
                    margin: 10px;
                    width: 1000px;
               }
            `}</style>
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

