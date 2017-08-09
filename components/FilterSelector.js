/**
 * Created by orourke on 8/4/17.
 *
 * <FilterSelector label="Text" items=[{periodItems}...] value={periodItems[1].value} onChange={this.handleFilterChange.bind(this)}
 class="filter-right-align"/>
 */
import React from 'react'
import {Form, FormGroup, ControlLabel, FormControl, Button, Grid, Row, Col, Nav, NavItem, Glyphicon} from 'react-bootstrap'

export default class FilterSelector extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    let customClass = this.props.class !== null ? this.props.class : "class=\"filter-right-align\"";
    return <Form inline className={customClass}>
      <FormGroup>
        <ControlLabel className={this.props.controlLabelClass}>{this.props.label}:</ControlLabel>
        <FormControl componentClass="select" value={ this.props.value || '0'}
                     onChange={this.props.onChange}>
          <option value="0">All</option>
          { this.props.items.map(item => <option value={item.value} key={item.value}>{item.display}</option>) }
        </FormControl>
      </FormGroup>
    </Form>
  }
}



