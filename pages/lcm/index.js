import AppFS from "../../components/AppMetaDriven"
import {Row,Col, ContextBox,Button, DropdownButton, MenuItem} from 'react-bootstrap'
import React from 'react'
import ProvisionCustomerModal from "../../components/lcm/ProvisionCustomerModal";
import Cookies from "universal-cookie";
export default class LCMIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    onSelect(eventKey){
    }

    render() {
        const cookies = new Cookies();
        let count = cookies.get('prod_us_premium_count');
        return <AppFS pathname={this.props.url.pathname}>
                      <Row>

                          <Col className="lcm-header" sm={2}></Col>
                          <Col className="lcm-header" sm={2}>Development <DropdownButton pullRight noCaret className="button-options"  title="..." onSelect={this.onSelect}>
                              <MenuItem eventKey="1">Add Customer</MenuItem>
                              <MenuItem eventKey="2"><ProvisionCustomerModal message="Provision Customer" domain="Development"/></MenuItem>
                              <MenuItem divider />
                              <MenuItem eventKey="3">Release from QA</MenuItem>
                              <MenuItem eventKey="4">Revert to Last Release</MenuItem>
                          </DropdownButton></Col>
                          <Col className="lcm-header" sm={2}>QA <DropdownButton pullRight noCaret className="button-options"  title="..." onSelect={this.onSelect}>
                              <MenuItem eventKey="1">Add Customer</MenuItem>
                              <MenuItem eventKey="2"><ProvisionCustomerModal message="Provision Customer" domain="QA"/></MenuItem>
                              <MenuItem divider />
                              <MenuItem eventKey="3">Release from QA</MenuItem>
                              <MenuItem eventKey="4">Revert to Last Release</MenuItem>
                          </DropdownButton></Col>
                          <Col className="lcm-header" sm={2}>Production US  <DropdownButton pullRight noCaret className="button-options"  title="..." onSelect={this.onSelect}>
                              <MenuItem eventKey="1">Add Customer</MenuItem>
                              <MenuItem eventKey="2"><ProvisionCustomerModal message="Provision Customer" domain="Production US"/></MenuItem>
                              <MenuItem divider />
                              <MenuItem eventKey="3">Release from QA</MenuItem>
                              <MenuItem eventKey="4">Revert to Last Release</MenuItem>
                          </DropdownButton></Col>
                          <Col className="lcm-header" sm={2}>Production EU <DropdownButton pullRight noCaret className="button-options"  title="..." onSelect={this.onSelect}>
                              <MenuItem eventKey="1">Add Customer</MenuItem>
                              <MenuItem eventKey="2"><ProvisionCustomerModal message="Provision Customer" domain="Production EU"/></MenuItem>
                              <MenuItem divider />
                              <MenuItem eventKey="3">Release from QA</MenuItem>
                              <MenuItem eventKey="4">Revert to Last Release</MenuItem>
                          </DropdownButton></Col>
                      </Row>
        <Row>
            <Col className="lcm-segment" sm={2}><Button className="button-see-more">Basic</Button></Col>
            <Col className="lcm-domain-segment" sm={2}><p>7 Clients<br/> Last Changed 2m ago</p></Col>
            <Col className="lcm-domain-segment" sm={2}></Col>
            <Col className="lcm-domain-segment" sm={2}></Col>
            <Col className="lcm-domain-segment" sm={2}></Col>
        </Row>
        <Row>
            <Col className="lcm-segment" sm={2}><Button className="button-see-more">Premium</Button></Col>
            <Col className="lcm-domain-segment" sm={2}><p>7 Clients<br/> Last Changed 2m ago</p></Col>
            <Col className="lcm-domain-segment" sm={2}></Col>
            <Col className="lcm-domain-segment" sm={2}><p>{count} Clients<br/> Last Changed 2m ago</p></Col>
            <Col className="lcm-domain-segment" sm={2}><p>706 Clients<br/> Last Changed 2m ago</p></Col>
        </Row>

        </AppFS>
    }
}