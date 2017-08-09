import App from "../../components/App"
import ContentBox from "../../components/ContentBox"
import DashboardFilterHeader from "../../components/DashboardFilterHeader"
import {Breadcrumb, BreadcrumbItem, Grid, Row, Col} from 'react-bootstrap'

export default (props) => (
  <App pathname={props.url.pathname}>
    <Breadcrumb className="gd-custom-breadcrumb">
      <Breadcrumb.Item href="/external">
        Overview
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        Product Trends
      </Breadcrumb.Item>
    </Breadcrumb>
    <DashboardFilterHeader title="Product Trends">
    </DashboardFilterHeader>
    <ContentBox>
      <iframe frameborder="0"
              src="https://whitelabeling.gooddata.com/dashboard.html#project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/10595&tab=9de476cc1f7c&nochrome=true"
              width="100%" height="640px" allowTransparency="false"></iframe>
    </ContentBox>
  </App>
)
