import App from "../../components/App"
import ContentBox from "../../components/ContentBox"
import FilterSelector from "../../components/FilterSelector"
import PanelDismissable from "../../components/PanelDismissable"
import DashboardFilterHeader from "../../components/DashboardFilterHeader"
import {ContextBox, Grid, Row,Col, Breadcrumb} from 'react-bootstrap'
import {ATTR, OPTS} from "../config"

export default (props) => (
  <App pathname={props.url.pathname} >

        <Breadcrumb className="gd-custom-breadcrumb">
          <Breadcrumb.Item active>
            Overview
          </Breadcrumb.Item>
        </Breadcrumb>

          <DashboardFilterHeader title="Sales & Revenue" path="/external/sales" customClass="button-see-more" class="filter-right-align" >
            <FilterSelector label="Season" items={OPTS.SEASONS} value={OPTS.SEASONS[0].value} class="filter-right-align" />
          </DashboardFilterHeader>

          <PanelDismissable header="Sales Alert" bsStyle="default">
            <p>Projected orders for Activewear is less than actual in-store sales.</p>
          </PanelDismissable>

    <ContentBox>
          <iframe frameBorder="0" src="https://whitelabeling.gooddata.com/dashboard.html#project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/10058&nochrome=true"
                  width="100%" height="960" allowTransparency="false"></iframe>
    </ContentBox>
  </App>
)
