import App from "../../components/App"
import PanelDismissable from "../../components/PanelDismissable"
import FilterSelector from "../../components/FilterSelector"
import {Breadcrumb, Form, ControlLabel, FormControl, FormGroup, Panel, Button, Glyphicon} from 'react-bootstrap'
import DashboardFilterHeader from "../../components/DashboardFilterHeader";

export default class FiltersTest extends React.Component {

  // This is a special next.js function that runs on the server side only
  static async getInitialProps (context) {
    // context includes: req, res, pathname, etc. see: https://github.com/zeit/next.js#fetching-data-and-component-lifecycle
    // TODO: Need to ensure this will only run on the server side
    return ({
      subcatItems: await getDropdownValues(3093,3095),
    })
  }

  componentWillMount() {
    this.setState({
      dashboard_url: "https://whitelabeling.gooddata.com/dashboard.html" +
      "#project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/9894&nochrome=true"
    })
  }

  render() {
    return <App pathname={this.props.url.pathname} >
      <Breadcrumb className="gd-custom-breadcrumb">
        <Breadcrumb.Item>
          Overview
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Sales
        </Breadcrumb.Item>
      </Breadcrumb>
      <DashboardFilterHeader title="Sales">
       <FilterSelector label="Subcategory" items={this.props.subcatItems} onChange={this.handleFilterChange} class="filter-right-align" />
      </DashboardFilterHeader>
      <PanelDismissable header="Sales Alert" bsStyle="danger">
        <p>Sales Performance for Activewear is down 10% from last year and is not on track to meet revenue targets. <a>test link</a></p>
      </PanelDismissable>
        <iframe frameBorder="0" src={this.state.dashboard_url} width="974px" height="760px" allowTransparency="true"></iframe>

    </App>
  }

  handleFilterChange (e) {

    // This is the construction of the URL:
    // https://whitelabeling.gooddata.com/dashboard.html
    // ?label.subcategory.subcategorycp=SubCategoryCP_wildcard
    // #project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/9894
    // &nochrome=true

    let new_value = e.target.value

    let host = "https://whitelabeling.gooddata.com/dashboard.html"
    let fragment = "project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/9894"
    let attribute = "label.subcategory.subcategorycp"
    let filter = ( new_value != 0 ? `?${attribute}=${new_value}` : '' )
    let full_url = `${host}${filter}#${fragment}&nochrome=true`

    this.setState({dashboard_url: full_url})
  }
}

async function getDropdownValues(value_id, display_id) {
  const gooddata = require("gooddata")
  gooddata.config.setCustomDomain("whitelabeling.gooddata.com")
  const projectId = "nrjs8u9m5y01o8b3584jrx8rosc0ynhw",
    user = "demos+wl@gooddata.com",
    passwd = "good660"
  const displayId = [display_id] // label.subcategory.subcategorydescription
  const valueId = [value_id] // label.subcategory.subcategorycp

  try {
    let isLoggedIn = await gooddata.user.isLoggedIn()
    if(!isLoggedIn) console.log(await gooddata.user.login(user, passwd))
    let descs = await gooddata.md.getValidElements(projectId, displayId)
    let cps = await gooddata.md.getValidElements(projectId, valueId)

    let desc_items = descs.validElements.items
    let cps_items = cps.validElements.items

    let results = []
    for(var i=0; i<desc_items.length; i++) {
      results.push({ value: cps_items[i].element.title, display: desc_items[i].element.title })
    }
    return results
  }
  catch(e) { console.error(e) }
}