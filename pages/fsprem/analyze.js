import App from "../../components/AppMetaDriven"
import {Breadcrumb} from 'react-bootstrap'

export default (props) => (
  <App pathname={props.url.pathname}>
    <Breadcrumb className="gd-custom-breadcrumb">
      <Breadcrumb.Item href="/fsprem">
        Analytical Designer
      </Breadcrumb.Item>
    </Breadcrumb>
      <iframe frameborder="0"
              src="https://secure.gooddata.com/analyze/embedded/#/u72gr8lshicm52o96ntcju2m0n542vdh/reportId/edit"
              width="100%" height="800px" scrolling="no" allowTransparency="false"></iframe>
  </App>
)
