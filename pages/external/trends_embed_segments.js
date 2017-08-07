import App from "../../components/App"
import DashboardNavHeader from "../../components/DashboardNavHeader"

import {Breadcrumb,BreadcrumbItem, Grid,Row, Col} from 'react-bootstrap'
export default (props) => (
  <App pathname={props.url.pathname} >
      <Grid fluid>
          <Row>
              <Breadcrumb className="gd-custom-breadcrumb">
                  <Breadcrumb.Item  href="/external">
                      Overview
                  </Breadcrumb.Item>
                  <Breadcrumb.Item href="/external/trends_overview.js">
                      Trends Overview
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>
                      Product Trends
                  </Breadcrumb.Item>
              </Breadcrumb>
          </Row>
          <Row>
              <Col sm={5}>
                  <DashboardNavHeader title="Top 10 Activewear trends at GoodRetail" customClass="button-see-more"/>
              </Col>
              <Col sm={5}>
                  Filters go here
              </Col>
          </Row>
          <Row>
              <Col sm={4}>
                  <iframe frameBorder="0" src="https://whitelabeling.gooddata.com/dashboard.html#project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/9233" width="100%" height="380px" allowTransparency="false"></iframe>
              </Col>
              <Col sm={6}>
                  <iframe frameBorder="0" src="https://whitelabeling.gooddata.com/dashboard.html#project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/9233" width="100%" height="380px" allowTransparency="false"></iframe>
              </Col>
          </Row>
      </Grid>
  </App>
)
