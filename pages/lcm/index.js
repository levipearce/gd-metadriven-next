import AppFS from "../../components/AppMetaDriven"
import {Row,Col,Button, DropdownButton, MenuItem} from 'react-bootstrap'
import React from 'react'
import ProvisionCustomerModal from "../../components/lcm/ProvisionCustomerModal";
import ContentBox from "../../components/ContentBox";
import Cookies from "universal-cookie";
import SegmentDescriptionModal from "../../components/lcm/SegmentDescriptionModal";
export default class LCMIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    onSelect(eventKey){
    }

    render() {
        const cookies = new Cookies();
        let count = cookies.get('prod_us_premium_count');
        let client_count = cookies.get('prod_us_premium_client_count');
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
            <Col className="lcm-segment" sm={2}><Button className="button-see-more"><SegmentDescriptionModal message="Basic"/></Button></Col>
            <Col className="lcm-domain-segment" sm={2}><p>7 Clients<br/> </p></Col>
            <Col className="lcm-domain-segment" sm={2}></Col>
            <Col className="lcm-domain-segment" sm={2}></Col>
            <Col className="lcm-domain-segment" sm={2}></Col>
        </Row>
        <Row>
            <Col className="lcm-segment" sm={2}><Button className="button-see-more"><SegmentDescriptionModal message="Premium"/></Button></Col>
            <Col className="lcm-domain-segment" sm={2}><p>7 Clients<br/> Last Changed 2m ago</p></Col>
            <Col className="lcm-domain-segment" sm={2}></Col>
            <Col className="lcm-domain-segment" sm={2}>
                <p>
                    {client_count} Clients<br/>
                    {count} Users<br/>
                    8723 reports access in 24 hours<br/>
                    11243 filter changes in 24 hours<br/>
                </p>
            </Col>
            <Col className="lcm-domain-segment" sm={2}><p>706 Clients<br/> Last Changed 2m ago</p></Col>
        </Row>

                <ContentBox><iframe frameBorder="0" src="https://secure.gooddata.com/dashboard.html?label.csv_demodata_c.region=Southwest#project=/gdc/projects/u72gr8lshicm52o96ntcju2m0n542vdh&dashboard=/gdc/md/u72gr8lshicm52o96ntcju2m0n542vdh/obj/4912&tab=b6658b7a1cbd&nochrome=true" width="87%" height="380px" allowTransparency="false"></iframe></ContentBox>
        </AppFS>
    }
}