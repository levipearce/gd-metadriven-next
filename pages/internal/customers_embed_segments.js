import App from "../../components/App"
import ContentBox from "../../components/ContentBox"
import DashboardFilterHeader from "../../components/DashboardFilterHeader"
import FilterSelector from "../../components/FilterSelector"
import {Breadcrumb,BreadcrumbItem} from 'react-bootstrap'

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
        <FilterSelector label="Subcategory" items={[]} onChange={null} />
        <FilterSelector label="Product Type" items={[]} onChange={null} />
      </DashboardFilterHeader>

      <ContentBox><iframe frameborder="0" src="https://whitelabeling.gooddata.com/dashboard.html#project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/9233&nochrome=true" width="100%" height="380px" allowTransparency="false"></iframe>
    </ContentBox>
  </App>
)