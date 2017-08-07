/**
 * Created by orourke on 8/4/17.
 *
 * <FilterSelector value={id} display={display} />
 */
import React from 'react'
import {Form, FormGroup, ControlLabel, FormControl, Button, Grid, Row, Col, Nav, NavItem, Glyphicon} from 'react-bootstrap'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    console.log("constructor")
  }

  render() {
    {
      console.log("render(): ", this.state)
    }
    return <Form inline>
      <FormGroup controlId="subCatFilter">
        <ControlLabel>{this.props.label}:</ControlLabel>
        <FormControl componentClass="select" placeholder="0" onChange={this.props.onChange}>
          <option value="0">All</option>
          { this.props.items.map(item => <option value={item.value} key={item.value}>{item.display}</option>) }
        </FormControl>
      </FormGroup>
    </Form>
  }
}



