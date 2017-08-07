/**
 * Created by lpearce on 7/31/17.
 */
import {Button,Navbar,Nav,Panel} from 'react-bootstrap'

export default class DashboardFilterHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Panel bsClass="gd-custom-dashboard-header">
            <Navbar fluid className="gd-custom-navbar">
                <Navbar.Text className="gd-custom-navbar-text">
                    {this.props.title}
                </Navbar.Text>
                <Nav pullRight>
                  {this.props.children}
                </Nav>
            </Navbar>
        </Panel>);
    }
}