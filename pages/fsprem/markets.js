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
            <iframe frameborder="0" src="https://secure.gooddata.com/reportWidget.html#project=/gdc/projects/u72gr8lshicm52o96ntcju2m0n542vdh&report=/gdc/md/u72gr8lshicm52o96ntcju2m0n542vdh/obj/5091&title=yes&transparentBackground=yes" width="50%" height="200px" allowTransparency="true"></iframe>
        </ContentBox>
  </AppFS>);
    }

}
