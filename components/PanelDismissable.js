/**
 * Created by orourke on 8/2/17.
 *
 * Usage: <AlertDismissable style="success|info|warning|danger">content</AlertDismissable>
 */

import React, {Component} from 'react'
import {Panel, Button, Image} from 'react-bootstrap'

class PanelDismissable extends React.Component {
    constructor(props) {
        super(props)
        this.state = { panelVisible: true }
    }

    render() {
        if (this.state.panelVisible) {
            console.log('Panel Visible');
            return (
                <div>
                    <Button bsStyle={this.props.bsStyle} bsClass="alertPanel"></Button>
                    <Button bsClass="closePanel" onClick={ this.handlePanelDismiss}></Button>
                    <Panel bsStyle={this.props.bsStyle} className="dismissable" collapsible header={this.props.header} expanded={this.state.panelVisible}>
                        {this.props.children}
                    </Panel>
                </div>
            );
        }else {
            return <div></div> // have to return something
        }
    }

    handlePanelDismiss = () => {
        this.setState({panelVisible: false});
    }

    handleAlertShow = () => {
        this.setState({panelVisible: true});
    }
}

export default PanelDismissable

