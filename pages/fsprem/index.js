import AppFS from "../../components/AppMetaDriven"
import DashboardFilterHeader from "../../components/DashboardFilterHeader"
import ContentBox from "../../components/ContentBox"
import InsightActionModal from "../../components/InsightActionModal"
import PanelDismissable from "../../components/PanelDismissable"
import {Button, ContextBox,Modal, Breadcrumb} from 'react-bootstrap'
import React from 'react'
import Cookies from "universal-cookie";
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
    embed_src_2: generateURL(filter, "ab986eb84dbb" ,'5157'),
    embed_src_3: generateURL(filter, "a8cda3468f25" )
  }
}
function ActionMessage(props)
{
    if (props.actionTaken) {
        const cookies = new Cookies();
        var tstamp = cookies.get('sfdc_action_taken_tstamp');
        console.log('TStamp:',tstamp);
        return  <PanelDismissable header="Info" link="" bsStyle="info"><p>A SalesForce campaign was initiated to address the downward trend in loyalty among retiring customers within Arizona on {tstamp}.</p></PanelDismissable>
    } else {
        return <PanelDismissable header="Alert" link="" bsStyle="default"><p>Your loyalty ranking among retiring customers is below the industry benchmark <u><FSActionModal action="SFDC_MODAL_AZ" message="Click here"/></u> to address this issue.</p></PanelDismissable>;
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

  getCookie(){
      const cookies = new Cookies();
      //cookies.set('sfdc_action_taken', 'false', { path: '/' });
      console.log('getCookie',cookies.get('sfdc_action_taken'));
      console.log('getCookie',cookies.get('sfdc_action_taken_tstamp'));
      return cookies.get('sfdc_action_taken')=='true'?true:false;
  }
  render() {
    let actionTaken= this.getCookie();
    return <AppFS pathname={this.props.url.pathname}>
      <Breadcrumb className="gd-custom-breadcrumb">
        <Breadcrumb.Item active>
          Overview
        </Breadcrumb.Item>
      </Breadcrumb>

      <DashboardFilterHeader title="Customer Rankings by Risk Type">
      </DashboardFilterHeader>
        <ActionMessage actionTaken={actionTaken}/>
      <ContentBox>
          <iframe scrolling="no" allowtransparency="true" frameBorder="0" width="100%" height="74" src="https://s.tradingview.com/tickerswidgetembed/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22INDEX%3ASPX%22%2C%22title%22%3A%22S%26P%20500%22%7D%2C%7B%22proName%22%3A%22INDEX%3AIUXX%22%2C%22title%22%3A%22Nasdaq%20100%22%7D%2C%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%2FUSD%22%7D%2C%7B%22proName%22%3A%22NYMEX%3ACL1!%22%2C%22title%22%3A%22Crude%20Oil%22%7D%2C%7B%22proName%22%3A%22FX_IDC%3AXAUUSD%22%2C%22title%22%3A%22Gold%22%7D%5D%2C%22utm_source%22%3A%22www.tradingview.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22tickers%22%7D"></iframe>
      </ContentBox>
        <ContentBox>
            <p><u><FSActionModal action="CUSTOMER_RANKING" message="Click here"/></u> to review the ratio benchmark per state and risk type.</p>
        </ContentBox>
      <ContentBox>
          <iframe frameBorder="0" src="https://secure.gooddata.com/dashboard.html?label.csv_demodata_c.region=Southwest#project=/gdc/projects/u72gr8lshicm52o96ntcju2m0n542vdh&dashboard=/gdc/md/u72gr8lshicm52o96ntcju2m0n542vdh/obj/4912&tab=988a12af1ec1&nochrome=true" width="100%" height="680px" allowTransparency="false"></iframe>
      </ContentBox>
    </AppFS>
  }
}