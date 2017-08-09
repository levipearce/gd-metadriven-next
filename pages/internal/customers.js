import App from "../../components/App"
import ContentBox from "../../components/ContentBox"
import DashboardFilterHeader from "../../components/DashboardFilterHeader"
import FilterSelector from "../../components/FilterSelector"
import {Breadcrumb,Form} from 'react-bootstrap'

export default (props) => (
  <App pathname={props.url.pathname} >
      <Breadcrumb className="gd-custom-breadcrumb">
          <Breadcrumb.Item>
              Overview
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
              Customers
          </Breadcrumb.Item>
      </Breadcrumb>
      <DashboardFilterHeader title="Customers">
        <FilterSelector label="Subcategory" items={[]} onChange={null} class="filter-right-align" controlLabelClass="control-label-left-border"/>
        <FilterSelector label="Product Type" items={[]} onChange={null} class="filter-right-align"  controlLabelClass="" />
      </DashboardFilterHeader>

      <ContentBox>
        <iframe frameborder="0" src="https://whitelabeling.gooddata.com/dashboard.html#project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/10591&nochrome=true"
                width="100%" height="950px" allowTransparency="false"></iframe>
      </ContentBox>
  </App>
)
