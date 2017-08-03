import App from "../../components/App"
import ContentBox from "../../components/ContentBox"
import {Breadcrumb,BreadcrumbItem} from 'react-bootstrap'


export default (props) => (
  <App pathname={props.url.pathname} >
      <Breadcrumb className="gd-custom-breadcrumb">
          <Breadcrumb.Item href="/external">
              Overview
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
              Sales
          </Breadcrumb.Item>
      </Breadcrumb>
      <ContentBox>
      <iframe frameBorder="0" src="https://whitelabeling.gooddata.com/#s=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw|projectDashboardPage|/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/9233|8bb5cbce4779" width="400px" height="300px" allowTransparency="false"></iframe>
    </ContentBox>
  </App>
)
