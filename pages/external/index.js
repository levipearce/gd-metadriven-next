import App from "../../components/App"
import {ContextBox, Panel, Breadcrumb} from 'react-bootstrap'

export default (props) => (
  <App pathname={props.url.pathname} >
    <Breadcrumb>
      <Breadcrumb.Item active>
        Overview
      </Breadcrumb.Item>
    </Breadcrumb>
      <h3>Sales</h3>
      <Panel header="<img> Alert" bsStyle="primary">
          Panel content {props.url.pathname}
      </Panel>
      <iframe frameBorder="0" src="https://whitelabeling.gooddata.com/dashboard.html#project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/9233" width="100%" height="380px" allowTransparency="false"></iframe>

      <h3>Customers</h3>
      <iframe frameBorder="0" order="0" src="https://whitelabeling.gooddata.com/dashboard.html#project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/9233" width="100%" height="380px" allowTransparency="false"></iframe>

      <h3>Trends</h3>

      <iframe frameBorder="0" src="https://whitelabeling.gooddata.com/dashboard.html#project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/9233" width="100%" height="380px" allowTransparency="false"></iframe>

  </App>
)
