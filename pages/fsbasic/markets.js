import AppFS from "../../components/AppMetaDriven"
import ContentBox from "../../components/ContentBox"
import DashboardFilterHeader from "../../components/DashboardFilterHeader"
import FilterSelector from "../../components/FilterSelector"
import PanelDismissable from "../../components/PanelDismissable"
import {Breadcrumb,Button, Form} from 'react-bootstrap'
import {ATTR, OPTS} from "../config"

export default class InternalCustomer extends React.Component{
    render() {
    return (<AppFS pathname={this.props.url.pathname} >
      <Breadcrumb className="gd-custom-breadcrumb">
          <Breadcrumb.Item active>
              Markets
          </Breadcrumb.Item>
      </Breadcrumb>
        <ContentBox>
            <iframe frameBorder="0" src="https://secure.gooddata.com/dashboard.html?label.csv_demodata_c.region=Southwest#project=/gdc/projects/u72gr8lshicm52o96ntcju2m0n542vdh&dashboard=/gdc/md/u72gr8lshicm52o96ntcju2m0n542vdh/obj/4912&tab=86313f845042&nochrome=true" width="100%" height="480px" allowTransparency="false"></iframe>
        </ContentBox>
  </AppFS>);
    }

}
