import App from "../../components/App"
import ContentBox from "../../components/ContentBox"
import DashboardFilterHeader from "../../components/DashboardFilterHeader"
import FilterSelector from "../../components/FilterSelector"
import {Breadcrumb,Form} from 'react-bootstrap'

import {ATTR, OPTS} from "../config"

export default class InternalCustomer extends React.Component{
    render() {
    return (<App pathname={this.props.url.pathname} >
      <Breadcrumb className="gd-custom-breadcrumb">
          <Breadcrumb.Item>
              Overview
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
              Customers
          </Breadcrumb.Item>
      </Breadcrumb>
      <DashboardFilterHeader title="Customers">
          <FilterSelector label="Select Period" items={OPTS.QUARTERS} value={OPTS.QUARTERS[1].value} onChange={this.handleFilterChange.bind(this)} class="filter-right-align"/>
          <FilterSelector label="Brand" items={OPTS.BRANDS} value={OPTS.BRANDS[1].value} onChange={this.handleFilterChange.bind(this)} class="filter-right-align" />
          <FilterSelector label="Subcategory" items={OPTS.SUBCATS} value={OPTS.SUBCATS[1].value} onChange={this.handleFilterChange.bind(this)} class="filter-right-align" />
          {/*<FilterSelector label="Product Type" items={OPTS.PRODTYPES} value={OPTS.PRODTYPES[0].value} onChange={this.handleFilterChange.bind(this)} class="filter-right-align" />*/}
          <FilterSelector label="Product Line" items={OPTS.PRODLINE} value={OPTS.PRODLINE[0].value} onChange={this.handleFilterChange.bind(this)} class="filter-right-align" />
      </DashboardFilterHeader>

      <ContentBox>
        <iframe frameborder="0" src="https://whitelabeling.gooddata.com/dashboard.html#project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/10591&nochrome=true"
                width="100%" height="950px" allowTransparency="false"></iframe>
      </ContentBox>
  </App>);
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
