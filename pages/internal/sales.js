import {Breadcrumb, Form, ControlLabel, FormControl, FormGroup, Panel, Button, Glyphicon} from 'react-bootstrap'
import App from "../../components/App"
import ContentBox from "../../components/ContentBox"
import DashboardFilterHeader from "../../components/DashboardFilterHeader";
import FilterSelector from "../../components/FilterSelector"
import PanelDismissable from "../../components/PanelDismissable"
import {ATTR, OPTS} from "../config"

export default class InternalSales extends React.Component {

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
        <FilterSelector label="Product Type" items={OPTS.PRODTYPES} value={OPTS.PRODTYPES[0].value} class="filter-right-align" controlLabelClass="control-label-left-border" />
        <FilterSelector label="Subcategory" items={OPTS.SUBCATS} value={OPTS.SUBCATS[1].value} class="filter-right-align" controlLabelClass="control-label-left-border" />
        <FilterSelector label="Brand" items={OPTS.BRANDS} value={OPTS.BRANDS[1].value} class="filter-right-align" controlLabelClass="control-label-left-border" />
        <FilterSelector label="Select Period" items={OPTS.QUARTERS} value={OPTS.QUARTERS[1].value}  class="filter-right-align" />
      </DashboardFilterHeader>
      
      <PanelDismissable header="Alert" bsStyle="info">
        <p>Sales performance for <b>Low Rise Leggings</b> is well below overall category performance.{' '}
        <a href="/internal/customers">Review sales details.</a></p>
      </PanelDismissable>
      <ContentBox>
        <iframe frameBorder="0" src={this.state.dashboard_url} width="100%" height="790px" allowTransparency="true"></iframe>
      </ContentBox>
    </App>
  }

  handleFilterChange (e) {

    let new_value = e.target.value

    let host = "https://whitelabeling.gooddata.com/dashboard.html"
    let fragment = "project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/9894"
    let attribute = "label.subcategory.subcategorycp"
    let filter = ( new_value != 0 ? `?${attribute}=${new_value}` : '' )
    let full_url = `${host}${filter}#${fragment}&nochrome=true`

    this.setState({dashboard_url: full_url})
  }
}