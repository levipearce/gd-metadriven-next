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
                    <Navbar.Text>
                        <Image src="/static/images/external_logo.png" style={{height: 32}} circle/>
                    </Navbar.Text>
                    <Navbar.Text id="company-name">
                        Fashion Co.
                    </Navbar.Text>
                    <Nav pullRight style={{width: 400}}>
                        <Navbar.Text>
                            <Image src="/static/images/avatars/31.jpg" id="avatar" circle/>
                        </Navbar.Text>

                        <Navbar.Text id="user">Brian Moody<br/>Fashion Co Brand Manager</Navbar.Text>

                        <Navbar.Text>
                            <Button bsStyle="default" href="/">
                                Logout{' '}
                                <Glyphicon glyph="log-out"/>
                            </Button>
                        </Navbar.Text>
                    </Nav>
                </Navbar>
            </header>
        );
    }
}
