import {Breadcrumb, Form, ControlLabel, FormControl, FormGroup, Panel, Button, Glyphicon} from 'react-bootstrap'
import App from "../../components/AppMetaDriven"
import ContentBox from "../../components/ContentBox"
import DashboardFilterHeader from "../../components/DashboardFilterHeader";
import FilterSelector from "../../components/FilterSelector"
import PanelDismissable from "../../components/PanelDismissable"
import {ATTR, OPTS} from "../config"

export default class InternalSales extends React.Component {

  render() {
    return <App pathname={this.props.url.pathname} >
      <Breadcrumb className="gd-custom-breadcrumb">
        <Breadcrumb.Item active>
          Trends
        </Breadcrumb.Item>
      </Breadcrumb>
      <ContentBox>
        <iframe frameborder="0" src="https://secure.gooddata.com/reportWidget.html#project=/gdc/projects/u72gr8lshicm52o96ntcju2m0n542vdh&report=/gdc/md/u72gr8lshicm52o96ntcju2m0n542vdh/obj/3586&title=yes" width="100%" height="380px" allowTransparency="true"></iframe>
      </ContentBox>
    </App>
  }

}