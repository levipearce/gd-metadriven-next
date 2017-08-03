import App from "../../components/App"
import DashboardNavHeader from "../../components/DashboardNavHeader"
import {ContextBox, Panel, Breadcrumb} from 'react-bootstrap'

export default (props) => (
  <App pathname={props.url.pathname} >
    <Breadcrumb>
      <Breadcrumb.Item active>
        Overview
      </Breadcrumb.Item>
    </Breadcrumb>
      <DashboardNavHeader title="Sales" path="/internal/sales"/>
      <Panel header="<img> Alert" bsStyle="primary">
          Panel content {props.url.pathname}
      </Panel>
      <iframe frameBorder="0" order="0" src="https://whitelabeling.gooddata.com/dashboard.html#project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/9233" width="100%" height="380px" allowTransparency="false"></iframe>
      <DashboardNavHeader title="Products" path="/internal/products"/>
      <iframe frameborder="0" src="https://whitelabeling.gooddata.com/dashboard.html#project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/9233" width="100%" height="380px" allowTransparency="false"></iframe>
      <DashboardNavHeader title="Customers" path="/internal/customers"/>
      <iframe frameborder="0" src="https://whitelabeling.gooddata.com/dashboard.html#project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/9233" width="100%" height="380px" allowTransparency="false"></iframe>

  </App>
)
