import Link from 'next/link' // NextJS hyperlink support
import {Nav, Navbar, NavDropdown, MenuItem, NavItem, Button, Image, Glyphicon} from 'react-bootstrap'

export default ({pathname}) => (
  <header >
    <Navbar fluid inverse>
      <Navbar.Text>
        <Image responsive alt="Brand" src="/static/images/good_retail_logotype.png" />
      </Navbar.Text>
      <Navbar.Text id="product-category" className="gd-custom-heading">Portfolio Management System</Navbar.Text>

      <Nav pullRight style={{width: 310}}>
        <Navbar.Text>
          <Image src="/static/images/avatars/67.jpg" id="avatar" circle />
        </Navbar.Text>

        <Navbar.Text id="user">Alan Smith<br />Regional Manager</Navbar.Text>

        <Navbar.Text>
        <Button href="/">
          Logout{' '}
          <Glyphicon glyph="log-out"/>
        </Button>
        </Navbar.Text>
      </Nav>
    </Navbar>
  </header>
)
