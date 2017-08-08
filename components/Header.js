import Link from 'next/link' // NextJS hyperlink support
import {Nav, Navbar, NavDropdown, MenuItem, NavItem, Button, Image, Glyphicon} from 'react-bootstrap'

export default ({pathname}) => (
  <header >
    <Navbar fluid inverse>
      <Navbar.Text>
        <img alt="Brand" src="/static/images/internal_logo.png"/>
      </Navbar.Text>
      <Navbar.Text id="company-name" className="gd-custom-heading">GoodRetail</Navbar.Text>
      <Navbar.Text id="product-category" className="gd-custom-heading">Women's Activewear</Navbar.Text>

      <Nav pullRight style={{width: 290}}>
        <Navbar.Text>
          <Image src="/static/images/avatars/67.jpg" id="avatar" circle />
        </Navbar.Text>

        <Navbar.Text id="user">Alan Smith<br />Manager</Navbar.Text>

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
