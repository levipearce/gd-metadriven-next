import App from "../../components/App"
import DashboardNavHeader from "../../components/DashboardNavHeader"
import ContentBox from "../../components/ContentBox"
import PanelDismissable from "../../components/PanelDismissable"
import {ContextBox, Panel, Breadcrumb} from 'react-bootstrap'

export default (props) => (
  <App pathname={props.url.pathname} >
    <Breadcrumb className="gd-custom-breadcrumb">
      <Breadcrumb.Item active>
        Overview
      </Breadcrumb.Item>
    </Breadcrumb>
      <DashboardNavHeader title="Sales" path="/internal/sales" customClass="button-see-more"/>
      <PanelDismissable header="Alert" link="/internal/sales" bsStyle="info">
          <p>Sales Performance for Activewear is down 10% from last year and is not on track to meet revenue targets.</p>
      </PanelDismissable>
      <ContentBox>
      <iframe frameborder="0" src="https://whitelabeling.gooddata.com/dashboard.html#project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/9233&nochrome=true" width="100%" height="480px" allowTransparency="false"></iframe>
      </ContentBox>
  </App>
)
