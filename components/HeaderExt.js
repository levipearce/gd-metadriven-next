import Link from 'next/link' // NextJS hyperlink support
import {Nav, Navbar, NavDropdown, MenuItem, NavItem, Button, Image, Glyphicon} from 'react-bootstrap'

export default class HeaderExt extends React.Component {
    constructor (props){
        super(props);
    }
    render() {
        return (

            <header>
                <Navbar fluid inverse>
                    <Navbar.Text>Company Name</Navbar.Text>

                    <Nav pullRight style={{width: 290}}>
                        <Navbar.Text>
                            <Image src="/static/images/avatars/67.jpg" id="avatar" style={{height: 42}} circle/>
                        </Navbar.Text>

                        <Navbar.Text style={{marginLeft: 0, fontSize: "12px"}}>Alan Smith<br/>Manager</Navbar.Text>

                        <Navbar.Text>
                            <Button>
                                Logout{' '}
                                <Glyphicon glyph="log-out"/>
                            </Button>
                        </Navbar.Text>
                    </Nav>
                </Navbar>

                <style jsx global>{`
    .navbar-inverse {
        background-color: #313541;
        color: white;
        margin-bottom: 0px;
        border-radius: 0;
        height: 60px;
    }

    /*p.navbar-text {
      margin-top: 12px;
      margin-bottom: 15px;
    }*/

    /* Color palette */

    :root {
        --steel: #7e859a;
        --warm-pink: #f14d76;
        --dark-sky-blue: #29a9ec;
        --white: #ffffff;
        --charcoal-grey: #313541;
        --dark-blue-grey: #243a57; /* external */
        --sun-yellow: #fed331; /* external */
        --dodger-blue: #47baf6; /* gradient start */
        --azure: #0b9ae0; /* gradient end */
    }

    /* Text styles */

    .navbar-brand-label {
        font-family: OpenSans;
        font-size: 20px;
        color: #ffffff;
        color: var(--white);
    }

    .navbar-page-title {
        font-family: OpenSans;
        font-size: 20px;
        font-weight: 300;
        color: #ffffff;
        color: var(--white);
    }

    .sidenav-itemtext {
        font-family: OpenSans;
        font-size: 12px;
        font-weight: bold;
        color: #313541;
        color: var(--charcoal-grey);
    }

    .navbar-username {
        font-family: OpenSans;
        font-size: 12px;
        color: #ffffff;
        color: var(--white);
    }

    .dashboard-heading-text {
        font-family: OpenSans;
        font-size: 20px;
        font-weight: 600;
        color: #313541;
        color: var(--charcoal-grey);
    }

    .dashboard-breadcrumb-text {
        font-family: OpenSans;
        font-size: 10px;
        color: #7e859a;
        color: var(--steel);
    }

    .dashboard-panel-title {
        font-family: OpenSans;
        font-size: 12px;
        font-weight: bold;
        color: #ffffff;
        color: var(--white);
    }

    .dashboard-metric-box-blue {
        width: 160px;
        height: 100px;
        border-radius: 2px;
        background-image: linear-gradient(72deg, #47baf6, #0b9ae0);
        background-image: linear-gradient(72deg, var(--dodger-blue), var(--azure));
        box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.02);
    }

    .dashboard-metric-box-white {
        width: 160px;
        height: 100px;
        border-radius: 2px;
        background-color: #ffffff;
        background-color: var(--white);
        box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.02);
        border: solid 1px #e0e3e8;
    }

    .dashboard-metric {
        font-family: Lato;
        font-size: 30px;
        font-weight: 300;
        color: #ffffff;
        color: var(--white);
    }

    .dashboard-metric-label {
        font-family: OpenSans;
        font-size: 10px;
        color: #ffffff;
        color: var(--white);
    }

    .button-see-more {
        width: 96px;
        height: 27px;
        border-radius: 100px;
        background-color: #f14d76;
        background-color: var(--warm-pink);
    }
`}</style>
            </header>
        );
    }
}
