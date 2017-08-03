import App from "../../components/App"
import ContentBox from "../../components/ContentBox"
import DashboardFilterHeader from "../../components/DashboardFilterHeader"
import {Breadcrumb} from 'react-bootstrap'

export default (props) => (
  <App pathname={props.url.pathname} >
      <Breadcrumb className="gd-custom-breadcrumb">
          <Breadcrumb.Item href="/internal">
              Overview
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
              Products
          </Breadcrumb.Item>
      </Breadcrumb>
      <DashboardFilterHeader title="Products" filter1={{title:'Filter1Title'}} filter2={{title:'Filter1Title'}} />

      <ContentBox>
      <iframe frameBorder="0" src="https://whitelabeling.gooddata.com/#s=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw|projectDashboardPage|/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/9233|8bb5cbce4779" width="400px" height="300px" allowTransparency="false"></iframe>
    </ContentBox>
  </App>
)
