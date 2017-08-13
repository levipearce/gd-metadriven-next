import App from "../../components/App"
import {Breadcrumb} from 'react-bootstrap'

export default (props) => (
  <App pathname={props.url.pathname}>
    <Breadcrumb className="gd-custom-breadcrumb">
      <Breadcrumb.Item href="/external">
        Analytical Desginer
      </Breadcrumb.Item>
    </Breadcrumb>
      <iframe frameborder="0"
              src="https://whitelabeling.gooddata.com/analyze/embedded/#/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/reportId/edit"
              width="100%" height="800px" scrolling="no" allowTransparency="false"></iframe>
  </App>
)
