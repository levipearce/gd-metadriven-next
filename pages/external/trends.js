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
              <Col sm={12}>
                  <iframe frameBorder="0" src="https://whitelabeling.gooddata.com/dashboard.html#project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/10594" width="100%" height="440px" allowTransparency="false"></iframe>
              </Col>
          </Row>
      </Grid>
  </App>
)
