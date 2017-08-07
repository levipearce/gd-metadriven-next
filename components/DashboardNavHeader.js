/**
 * Created by lpearce on 7/31/17.
 */
import {Button,Navbar,Panel} from 'react-bootstrap'


export default class DashboardNavHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.path);
        let button = this.props.path !== null && this.props.path!== undefined? (<Button bsStyle={this.props.style} bsSize="small" href={this.props.path} className={this.props.customClass}>See
            More</Button>):null;
        return (<Panel className="gd-custom-panel-navigation">
            <Navbar fluid className="gd-custom-navbar">
                <Navbar.Text className="gd-custom-navbar-text">
                    {this.props.title} {button}
                </Navbar.Text>
            </Navbar>
        </Panel>);
    }
}