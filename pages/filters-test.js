import App from "../components/App"
import AlertDismissable from "../components/AlertDismissable"
import ContentBox from "../components/ContentBox"
import {Form, ControlLabel, FormControl, FormGroup, Panel, Button, Glyphicon} from 'react-bootstrap'

let filter1 = "label.brand.brandcp=BrandCP_wildcard"
let filter2 = "label.subcategory.subcategorycp=0"
let fragment = "project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/9894&nochrome=true"
let dashboard_url = `https://whitelabeling.gooddata.com/dashboard.html?#${fragment}`

export default class FiltersTest extends React.Component {
  static async getInitialProps (context) {
    // context includes: req, res, pathname, etc. see: https://github.com/zeit/next.js#fetching-data-and-component-lifecycle
    return ({
      subcatItems: await getDropdownValues(3093,3095),
      subcatFilter: 0
    })
  }
  render() {
    console.log(this.props)
    return <App pathname={this.props.url.pathname} >
      <Form inline>
        <FormGroup controlId="subCatFilter">
          <ControlLabel>Subcategory:</ControlLabel>
          <FormControl componentClass="select" placeholder="0">
            <option value="0">All</option>
            { this.props.subcatItems.map(item => <option value={item.value}>{item.display}</option>) }
          </FormControl>
        </FormGroup>
      </Form>
      <AlertDismissable style="warning">
        <h4>Generated Insight</h4>
        <p>Sales Performance for Activewear is down 10% from last year and is not on track to meet revenue targets.</p>
      </AlertDismissable>
      <ContentBox>
        <iframe frameBorder="0" src={dashboard_url} width="100%" height="380px" allowTransparency="false"></iframe>
      </ContentBox>
    </App>
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