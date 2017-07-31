import Link from 'next/link' // NextJS hyperlink support
import {Nav, Navbar, NavDropdown, MenuItem, NavItem, Button, Image, Glyphicon} from 'react-bootstrap'

export default ({pathname}) => (
  <header>
    <Navbar fluid inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <Glyphicon glyph="equalizer"/>{' '}
          <a href="#">GoodRetail</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider/>
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>

      <Nav pullRight style={{width: 270}}>
        <Navbar.Text>
          <Image src="/static/images/avatars/67.jpg" id="avatar" style={{height: 32}} circle />
        </Navbar.Text>

        <Navbar.Text style={{marginLeft:0, fontSize: "80%"}}><span style={{color: "#fff"}}>Alan Smith</span><br />Manager</Navbar.Text>

        <Navbar.Text>
        <Button bsStyle="custom">
          Logout{' '}
          <Glyphicon glyph="log-out"/>
        </Button>
        </Navbar.Text>
      </Nav>
    </Navbar>

    { /*language=CSS*/ }
    <style jsx global>{`
      .navbar-inverse {
        background-color: #313541;
        color: white;
        margin-bottom: 0px;
        border-radius: 0;
        height: 60px;
      }
      p.navbar-text {
        margin-top: 6px;
        margin-bottom: 6px;
      }
    `}</style>
  </header>
)
