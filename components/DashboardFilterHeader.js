/**
 * Created by lpearce on 7/31/17.
 */
import {Button,Navbar,Nav,Panel} from 'react-bootstrap'

export default class DashboardFilterHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    getNavFilterHeading(filterConfig) {
        return (
            <Navbar.Text className="dashboard-breadcrumb-text">{filterConfig.title}</Navbar.Text>
        );
    }

    getNavFilterDropDown(filterConfig) {
        return (
            <Navbar.Text>FilterDropDown</Navbar.Text>
        );
    }
    getNavFilterSeparator(){
        return (
            <Navbar.Text >|</Navbar.Text>
        );
    }

    render() {
       let navFilter1 = this.getNavFilterHeading(this.props.filter1);
        let navFilter1DD = this.getNavFilterDropDown(this.props.filter1);
        return (<Panel bsClass="gd-custom-dashboard-header">
            <Navbar fluid className="gd-custom-navbar">
                <Navbar.Text>
                    {this.props.title}
                </Navbar.Text>
                <Nav pullRight style={{width: 500}}>
                    {navFilter1}
                    {navFilter1DD}
                    {this.getNavFilterSeparator()}
                    < Navbar.Text className="dashboard-breadcrumb-text">Filter2Title</Navbar.Text>
                    <Navbar.Text>Filter</Navbar.Text>
                    <Navbar.Text>|</Navbar.Text>
                    <Navbar.Text className="dashboard-breadcrumb-text">Filter3Title</Navbar.Text>
                    <Navbar.Text>Filter</Navbar.Text>
                </Nav>
            </Navbar>
        </Panel>);
    }
}