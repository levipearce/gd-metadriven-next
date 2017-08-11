import App from "../../components/App"
import ContentBox from "../../components/ContentBox"
import DashboardFilterHeader from "../../components/DashboardFilterHeader"
import FilterSelector from "../../components/FilterSelector"
import PanelDismissable from "../../components/PanelDismissable"
import {Breadcrumb,Button, Form} from 'react-bootstrap'
import {ATTR, OPTS} from "../config"

export default class InternalCustomer extends React.Component{
    render() {
    return (<App pathname={this.props.url.pathname} >
      <Breadcrumb className="gd-custom-breadcrumb">
          <Breadcrumb.Item>
              Overview
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
              Customers
          </Breadcrumb.Item>
      </Breadcrumb>

      <DashboardFilterHeader title="Customers">

        <FilterSelector label="Product Line" items={OPTS.PRODLINE} value={OPTS.PRODLINE[0].value}  class="filter-right-align" controlLabelClass="control-label-left-border" />
        <FilterSelector label="Product Type" items={OPTS.PRODTYPES} value={OPTS.PRODTYPES[0].value} class="filter-right-align" controlLabelClass="control-label-left-border" />
        <FilterSelector label="Brand" items={OPTS.BRANDS} value={OPTS.BRANDS[1].value} class="filter-right-align" controlLabelClass="control-label-left-border" />
        <FilterSelector label="Select Period" items={OPTS.QUARTERS} value={OPTS.QUARTERS[1].value} class="filter-right-align"/>
      </DashboardFilterHeader>

      <PanelDismissable header="Alert" bsStyle="info">
        <p>Recommend campaign to offer discount to customers in <b>West Rural</b>.
          Target: <b>Female 50-64 Yrs</b> with income <b>$100K - $249K</b>.
          <br/><a href="#">Launch Campaign</a>
        </p>
      </PanelDismissable>
      <ContentBox>
        <iframe frameborder="0" src="https://whitelabeling.gooddata.com/dashboard.html#project=/gdc/projects/nrjs8u9m5y01o8b3584jrx8rosc0ynhw&dashboard=/gdc/md/nrjs8u9m5y01o8b3584jrx8rosc0ynhw/obj/10591&nochrome=true"
                width="100%" height="630px" allowTransparency="false"></iframe>
      </ContentBox>
  </App>);
    }

}
