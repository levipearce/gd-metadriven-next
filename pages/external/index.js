import App from "../../components/App"
import FilterSelector from "../../components/FilterSelector"
import PanelDismissable from "../../components/PanelDismissable"
import DashboardFilterHeader from "../../components/DashboardFilterHeader"
import {ContextBox, Grid, Row,Col, Breadcrumb} from 'react-bootstrap'

export default (props) => (
  <App pathname={props.url.pathname} >
    <Grid fluid>
      <Row>
        <Breadcrumb className="gd-custom-breadcrumb">
          <Breadcrumb.Item active>
            Overview
          </Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Row>
        <Col sm={12}>
          <DashboardFilterHeader title="Sales & Revenue" path="/external/sales" customClass="button-see-more" class="filter-right-align" >
            <FilterSelector label="Season" items={[]} onChange={null} class="filter-right-align" />
          </DashboardFilterHeader>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <PanelDismissable header="Sales Alert" bsStyle="default">
            <p>Sales Performance for Activewear is down 10% from last year and is not on track to meet revenue targets.</p>
          </PanelDismissable>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <iframe frameBorder="0" src="https://whitelabeling.gooddata.com/dashboard.html#project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/10058&nochrome=true" width="100%" height="1170px" allowTransparency="false"></iframe>
        </Col>
      </Row>
    </Grid>
  </App>
)
