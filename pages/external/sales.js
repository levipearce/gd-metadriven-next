import App from "../../components/App"
import DashboardNavHeader from "../../components/DashboardNavHeader"
import AlertDismissable from "../../components/AlertDismissable"
import {Breadcrumb,Grid,Col,Row} from 'react-bootstrap'


export default (props) => (
  <App pathname={props.url.pathname} >

      <Grid fluid>
          <Row>
              <Breadcrumb className="gd-custom-breadcrumb">
                  <Breadcrumb.Item>
                      Overview
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>
                      Sales
                  </Breadcrumb.Item>
              </Breadcrumb>
          </Row>
          <Row>
              <Col sm={5}>
                  <DashboardNavHeader title="Sales & Revenue"  button="false" path="/external/sales" customClass="button-see-more"/>
              </Col>
              <Col sm={5}>
                  Filters go here
              </Col>
          </Row>
          <Row><Col sm={10}>
              <AlertDismissable style="primary">
                  <h4>Generated Insight</h4>
                  <p>Sales Performance for Activewear is down 10% from last year and is not on track to meet revenue targets.</p>
              </AlertDismissable>
          </Col></Row>
          <Row>
              <Col sm={4}>
                  <Row><Col>Expected Revenue/Orders</Col></Row>
                  <Row><Col>Expected Sales/Purchase</Col></Row>
              </Col>
              <Col sm={6}>
                  <iframe frameBorder="0" src="https://whitelabeling.gooddata.com/dashboard.html#project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/9233" width="100%" height="380px" allowTransparency="false"></iframe>
              </Col>
          </Row>
          <Row>
              <Col sm={10}>
                  <DashboardNavHeader title="Benchmarks" button="false" path="/external/trends"  customClass="button-see-more"/>
              </Col>
          </Row>
          <Row>
              <Col sm={5}>Sales Revenue <iframe frameBorder="0" src="https://whitelabeling.gooddata.com/dashboard.html#project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/9233" width="100%" height="380px" allowTransparency="false"></iframe></Col>
              <Col sm={5}>Market Share <iframe frameBorder="0" src="https://whitelabeling.gooddata.com/dashboard.html#project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/9233" width="100%" height="380px" allowTransparency="false"></iframe></Col>
          </Row>
      </Grid>
  </App>
)
