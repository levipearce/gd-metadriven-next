import AppFS from "../../components/AppMetaDriven"
import DashboardFilterHeader from "../../components/DashboardFilterHeader"
import ContentBox from "../../components/ContentBox"
import InsightActionModal from "../../components/InsightActionModal"
import PanelDismissable from "../../components/PanelDismissable"
import {Button, ContextBox,Modal, Breadcrumb} from 'react-bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'
import {ATTR, OPTS} from "../config"
import FSActionModal from "../../components/FSActionModal";

ATTR
const gd_host = "https://secure.gooddata.com/reportWidget.html"
const gd_project = "u72gr8lshicm52o96ntcju2m0n542vdh"
const gd_dashboard_page = "/gdc/md/u72gr8lshicm52o96ntcju2m0n542vdh/obj/5086&title=yes"
const gd_attribute = "salesdate.aci81lMifn6q"

// This assembles one dashboard URL
function generateURL(filters, tab, reportObj) {
  var reportPage = `/gdc/md/${gd_project}/obj/${reportObj}&title=yes`;
  var gd_fragment = `project=/gdc/projects/${gd_project}&report=${reportPage}`;
  return `${gd_host}#${gd_fragment}&tab=${tab}&nochrome=true`;
}

// This is generating the URLS for the three dashboards used on the page
function generateTabs(filter) {
  return {
    embed_src_1: generateURL(filter, "8bb5cbce4779" ,'5086'),
    embed_src_2: generateURL(filter, "ab986eb84dbb" ),
    embed_src_3: generateURL(filter, "a8cda3468f25" )
  }
}

export default class InternalIndex extends React.Component {
    constructor(props) {
        super(props)
    }


  componentWillMount() {
    this.setState(generateTabs(''))
  }

  handleFilterChange(e) {
    let new_value = e.target.value
    let filter = ( new_value != 0 ? `?${gd_attribute}=${new_value}` : '' )
    this.setState(generateTabs(filter))
  }

  render() {
    return <AppFS pathname={this.props.url.pathname}>
      <Breadcrumb className="gd-custom-breadcrumb">
        <Breadcrumb.Item active>
          Alerts
        </Breadcrumb.Item>
      </Breadcrumb>

      <DashboardFilterHeader title="Customer Rankings by Risk Type">
      </DashboardFilterHeader>
      <PanelDismissable header="Alert" link="" bsStyle="info"><p>Your loyalty ranking among retiring customers is below the industry benchmark please contact your customer support represent for assistance addressing this issue.</p></PanelDismissable>
      <ContentBox>
        <iframe frameborder="0" src="https://secure.gooddata.com/reportWidget.html#project=/gdc/projects/u72gr8lshicm52o96ntcju2m0n542vdh&report=/gdc/md/u72gr8lshicm52o96ntcju2m0n542vdh/obj/4968&title=yes" width="60%" height="380px" allowTransparency="true"></iframe>
        <iframe frameborder="0" src="https://secure.gooddata.com/reportWidget.html#project=/gdc/projects/u72gr8lshicm52o96ntcju2m0n542vdh&report=/gdc/md/u72gr8lshicm52o96ntcju2m0n542vdh/obj/5334&title=yes" width="40%" height="380px" allowTransparency="true"></iframe>
      </ContentBox>
    </AppFS>
  }
}