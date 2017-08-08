import App from "../../components/App"
import DashboardNavHeader from "../../components/DashboardNavHeader"
import DashboardFilterHeader from "../../components/DashboardFilterHeader"
import ContentBox from "../../components/ContentBox"
import FilterSelector from "../../components/FilterSelector"
import PanelDismissable from "../../components/PanelDismissable"
import {Button, ContextBox, Panel, Breadcrumb} from 'react-bootstrap'

const buttonSeeMore = () =>
  (<Button className="button-see-more" bsSize="small">See More</Button>)

export default (props) => (
  <App pathname={props.url.pathname}>
    <Breadcrumb className="gd-custom-breadcrumb">
      <Breadcrumb.Item active>
        Overview
      </Breadcrumb.Item>
    </Breadcrumb>

    <DashboardFilterHeader title="Sales">
      <FilterSelector label="Select Period" items={[]} onChange={null} />
    </DashboardFilterHeader>
    <PanelDismissable header="Alert" link="/internal/sales" bsStyle="info">
      <p>Sales Performance for Activewear is down 10% from last year and is not on track to meet revenue targets.</p>
    </PanelDismissable>
    <ContentBox>
      <iframe frameborder="0"
              src="https://whitelabeling.gooddata.com/dashboard.html#project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/9233&tab=8bb5cbce4779&nochrome=true"
              width="100%" height="340px" allowTransparency="true"></iframe>
    </ContentBox>

    <DashboardFilterHeader title="Product" button={buttonSeeMore} />
    <ContentBox>
      <iframe frameborder="0"
              src="https://whitelabeling.gooddata.com/dashboard.html#project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/9233&tab=ab986eb84dbb&nochrome=true"
              width="100%" height="360px" allowTransparency="true"></iframe>
    </ContentBox>

    <DashboardFilterHeader title="Customer" button={buttonSeeMore} />
    <ContentBox>
      <iframe frameborder="0"
              src="https://whitelabeling.gooddata.com/dashboard.html#project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/9233&tab=a8cda3468f25&nochrome=true"
              width="100%" height="300px" allowTransparency="true"></iframe>
    </ContentBox>
  </App>
)
