import App from "../../components/App"
import DashboardNavHeader from "../../components/DashboardNavHeader"

import AlertDismissable from "../../components/AlertDismissable"
import {ContextBox, Panel, Breadcrumb} from 'react-bootstrap'

export default (props) => (
  <App pathname={props.url.pathname} >
    <Breadcrumb className="gd-custom-breadcrumb">
      <Breadcrumb.Item active>
        Overview
      </Breadcrumb.Item>
    </Breadcrumb>
      <DashboardNavHeader title="Sales" path="/internal/sales"/>
      <AlertDismissable>
          <h4>Generated Insight</h4>
          <p>Sales Performance for Activewear is down 10% from last year and is not on track to meet revenue targets.</p>
      </AlertDismissable>
      <iframe frameBorder="0" order="0" src="https://whitelabeling.gooddata.com/dashboard.html#project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/9233" width="100%" height="380px" allowTransparency="false"></iframe>
      <DashboardNavHeader title="Products" path="/internal/products"/>
      <iframe frameBorder="0" src="https://whitelabeling.gooddata.com/dashboard.html#project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/9233" width="100%" height="380px" allowTransparency="false"></iframe>
      <DashboardNavHeader title="Customers" path="/internal/customers"/>
      <iframe frameBorder="0" src="https://whitelabeling.gooddata.com/dashboard.html#project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/9233" width="100%" height="380px" allowTransparency="false"></iframe>

  </App>
)
