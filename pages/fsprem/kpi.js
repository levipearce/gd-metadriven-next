import App from "../../components/AppMetaDriven"
import {Breadcrumb} from 'react-bootstrap'

export default (props) => (
  <App pathname={props.url.pathname}>
    <Breadcrumb className="gd-custom-breadcrumb">
      <Breadcrumb.Item href="/fsprem">
        KPI Dashboard
      </Breadcrumb.Item>
    </Breadcrumb>
      <iframe frameborder="0"
              src="https://secure.gooddata.com/dashboards/embedded/#/project/u72gr8lshicm52o96ntcju2m0n542vdh/dashboard/abL4CrRhfxTU"
              width="100%" height="800px" scrolling="no" allowTransparency="false"></iframe>
  </App>
)
