/**
 * Created by lpearce on 7/31/17.
 */
import {Button,Navbar,Nav,Panel} from 'react-bootstrap'

export default class DashboardFilterHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("Path", this.props.path);
        let button = this.props.path !== null && this.props.path!== undefined? (<Button bsStyle={this.props.style} bsSize="small" href={this.props.path} className={this.props.customClass}>See
            More</Button>):null;
        return (<Panel bsClass="gd-custom-dashboard-header">
            <Navbar fluid className="gd-custom-navbar">
                <Navbar.Text className="gd-custom-navbar-text">
                    {this.props.title}
                </Navbar.Text>
                <Navbar.Text>{button}</Navbar.Text>
                <Nav pullRight >
                  {this.props.children}
                </Nav>
            </Navbar>
        </Panel>);
    }
}