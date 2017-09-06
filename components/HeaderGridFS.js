import Link from 'next/link' // NextJS hyperlink support
import {Nav, Navbar, Row,Col,NavDropdown, MenuItem, NavItem, Button, Image, Glyphicon} from 'react-bootstrap'

export default class HeaderGridFS extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        var avatar=`/static/images/avatars/${this.props.avatar}.jpg`;
       return ( <Row>
            <Col sm={2} className="gd-header-logo">
                <Image responsive alt="Brand" src="/static/images/good_finance_logotype.png"/>
            </Col>
            <Col sm={10} className="gd-header-grid">
                <Navbar fluid inverse>
                    <Navbar.Text id="product-category" className="gd-custom-heading">{this.props.product}</Navbar.Text>

                    <Nav pullRight style={{width: 340}}>
                        <Navbar.Text>
                            <Image src={avatar} id="avatar" circle/>
                        </Navbar.Text>

                        <Navbar.Text id="user">{this.props.username}<br/><span
                            id="user_title">{this.props.title}</span></Navbar.Text>

                        <Navbar.Text>
                            <Button href="/">
                                Logout{' '}
                                <Glyphicon glyph="log-out"/>
                            </Button>
                        </Navbar.Text>
                    </Nav>
                </Navbar>
            </Col>
        </Row>);
    }
}
