import Link from 'next/link' // NextJS hyperlink support
import {Nav, Navbar, Row,Col,NavDropdown, MenuItem, NavItem, Button, Image, Glyphicon} from 'react-bootstrap'

export default ({pathname}) => (
  <Row >
    <Col sm={2} className="gd-header-logo">
      <Image responsive alt="Brand" src="/static/images/good_retail_logotype.png" />
    </Col>
    <Col sm={10} className="gd-header-grid">
    <Navbar fluid inverse>
      <Navbar.Text id="product-category" className="gd-custom-heading">Women's Activewear</Navbar.Text>

      <Nav pullRight style={{width: 290}}>
        <Navbar.Text>
          <Image src="/static/images/avatars/67.jpg" id="avatar" circle />
        </Navbar.Text>

          <Navbar.Text id="user">Alan Smith<br /><span id="user_title">Manager</span></Navbar.Text>

        <Navbar.Text>
        <Button href="/">
          Logout{' '}
          <Glyphicon glyph="log-out"/>
        </Button>
        </Navbar.Text>
      </Nav>
    </Navbar>
    </Col>
  </Row>

)
