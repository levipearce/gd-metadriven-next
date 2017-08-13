import App from "../../components/App"
import DashboardFilterHeader from "../../components/DashboardFilterHeader"
import ContentBox from "../../components/ContentBox"
import FilterSelector from "../../components/FilterSelector"
import PanelDismissable from "../../components/PanelDismissable"
import {Button, ContextBox, Panel, Breadcrumb} from 'react-bootstrap'
import {ATTR, OPTS} from "../config"


const gd_host = "https://whitelabeling.gooddata.com/dashboard.html"
const gd_project = "nrjs8u9m5y01o8b3584jrx8rosc0ynhw"
const gd_dashboard_page = "/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/9233"
const gd_attribute = "salesdate.aci81lMifn6q"

// This assembles one dashboard URL
function generateURL(filters, tab) {
  var gd_fragment = `project=/gdc/projects/${gd_project}&dashboard=${gd_dashboard_page}`
  return `${gd_host}${filters}#${gd_fragment}&tab=${tab}&nochrome=true`
}

// This is generating the URLS for the three dashboards used on the page
function generateTabs(filter) {
  return {
    embed_src_1: generateURL(filter, "8bb5cbce4779" ),
    embed_src_2: generateURL(filter, "ab986eb84dbb" ),
    embed_src_3: generateURL(filter, "a8cda3468f25" )
  }
}

export default class InternalIndex extends React.Component {

  componentWillMount() {
    this.setState(generateTabs(''))
  }

  handleFilterChange(e) {
    let new_value = e.target.value
    let filter = ( new_value != 0 ? `?${gd_attribute}=${new_value}` : '' )
    this.setState(generateTabs(filter))
  }

  render() {
    return <App pathname={this.props.url.pathname}>
      <Breadcrumb className="gd-custom-breadcrumb">
        <Breadcrumb.Item active>
          Overview
        </Breadcrumb.Item>
      </Breadcrumb>

      <DashboardFilterHeader title="Sales" path="/internal/sales" customClass="button-see-more">
        <FilterSelector label="Select Period" items={OPTS.QUARTERS} value={OPTS.QUARTERS[1].value} onChange={this.handleFilterChange.bind(this)}
                        class="filter-right-align"/>
        <FilterSelector label="Category" items={OPTS.CATEGORIES} value={OPTS.CATEGORIES[0].value} onChange={this.handleFilterChange.bind(this)}
                        class="filter-right-align"/>
      </DashboardFilterHeader>
      <PanelDismissable header="Alert" link="/internal/sales" bsStyle="info">
        <p>Sales Performance for Fashion Co. Leggings is down 33% from last year. <a
          href="/internal/sales">See more details</a></p>
      </PanelDismissable>
      <ContentBox>
        <iframe frameborder="0"
                src={this.state.embed_src_1}
                width="100%" height="340px" scrolling="no" allowTransparency="true"></iframe>
      </ContentBox>

      <DashboardFilterHeader title="Product" path="/internal/products" customClass="button-see-more"/>
      <ContentBox>
        <iframe frameborder="0"
                src={this.state.embed_src_2}
                width="100%" height="360px" scrolling="no" allowTransparency="true"></iframe>
      </ContentBox>

      <PanelDismissable header="Alert" link="/internal/customers" bsStyle="info">
        <p>Similar brands are showing a downtrend for this demographic. <a href="/internal/customers">See more
          details</a></p>
      </PanelDismissable>
      <DashboardFilterHeader title="Customer" path="/internal/customers" customClass="button-see-more"/>
      <ContentBox>
        <iframe frameborder="0"
                src={this.state.embed_src_3}
                width="100%" height="300px" scrolling="no" allowTransparency="true"></iframe>
      </ContentBox>
    </App>
  }
}