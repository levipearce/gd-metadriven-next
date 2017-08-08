/**
 * Created by orourke on 8/4/17.
 *
 * <FilterSelector value={id} display={display} />
 */
import React from 'react'
import {Form, FormGroup, ControlLabel, FormControl, Button, Grid, Row, Col, Nav, NavItem, Glyphicon} from 'react-bootstrap'

export default class FilterSelector extends React.Component {

  constructor(props) {
    super(props)
    console.log("constructor")
  }

  render() {
    {
      console.log("render(): ", this.state)
    }

      let customClass = this.props.class!==null? this.props.class: "class=\"filter-right-align\"";
    return <Form inline className={customClass}>
      <FormGroup controlId="subCatFilter">
        <ControlLabel className={this.props.controlLabelClass}>{this.props.label}:</ControlLabel>
        <FormControl componentClass="select" placeholder="0" onChange={this.props.onChange}>
          <option value="0">All</option>
          { this.props.items.map(item => <option value={item.value} key={item.value}>{item.display}</option>) }
        </FormControl>
      </FormGroup>
    </Form>
  }
}



