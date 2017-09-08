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
            <Col className="lcm-segment" sm={2}><Button className="button-see-more"><SegmentDescriptionModal message="Basic" segment="BASIC"/></Button></Col>
            <Col className="lcm-domain-segment" sm={2}>
                <p>
                    1 Clients<br/>
                    6 Users<br/>
                    0 reports in 24 hours<br/>
                    0 filters in 24 hours<br/>
                </p>
            </Col>
            <Col className="lcm-domain-segment" sm={2}>
                <p>
                    4 Clients<br/>
                    200 Users<br/>
                    111 reports in 24 hours<br/>
                    72 filters in 24 hours<br/>
                </p>
            </Col>
            <Col className="lcm-domain-segment" sm={2}>
                <p>
                    82 Clients<br/>
                    768 Users<br/>
                    6010 reports in 24 hours<br/>
                    2001 filters in 24 hours<br/>
                </p>
            </Col>
            <Col className="lcm-domain-segment" sm={2}>
                <p>
                    46 Clients<br/>
                    1987 Users<br/>
                    4440 reports today.<br/>
                    1478 filters today.<br/>
                </p>
            </Col>
        </Row>
        <Row>
            <Col className="lcm-segment" sm={2}><Button className="button-see-more"><SegmentDescriptionModal message="Premium"  segment="PREMIUM"/></Button></Col>
            <Col className="lcm-domain-segment" sm={2}>
                <p>
                    1 Clients<br/>
                    6 Users<br/>
                    0 reports today.<br/>
                    0 filters today.<br/>
                </p>
            </Col>
            <Col className="lcm-domain-segment" sm={2}>
                <p>
                    18 Clients<br/>
                    198 Users<br/>
                    2890 reports today.<br/>
                    1904 filters today.<br/>
                </p>
            </Col>
            <Col className="lcm-domain-segment" sm={2}>
                <p>
                    {client_count} Clients<br/>
                    {count} Users<br/>
                   12056 reports today.<br/>
                    16234 filters today.<br/>
                </p>
            </Col>
            <Col className="lcm-domain-segment" sm={2}>
                <p>
                     Clients<br/>
                    {count} Users<br/>
                    8512 reports today.<br/>
                    11243 filters today.<br/>
                </p>
            </Col>
        </Row>
            <Row>
                <Col sm={2}></Col>
                <Col sm={8}>
                    <iframe frameBorder="0" src="https://secure.gooddata.com/reportWidget.html#project=/gdc/projects/u72gr8lshicm52o96ntcju2m0n542vdh&report=/gdc/md/u72gr8lshicm52o96ntcju2m0n542vdh/obj/5541&title=no&transparentBackground=yes" width="100%" height="200px" allowTransparency="true"></iframe>
            </Col>
            </Row>
        </AppFS>
    }
}