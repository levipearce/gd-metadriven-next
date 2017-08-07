import {Col, NavDropdown,Nav, NavItem, Glyphicon,MenuItem} from 'react-bootstrap'

function handleSelect(selectedKey) {
  console.log('selected ' + selectedKey);
}

export default ({pathname}) => (
  <div>
    <Nav fluid staticTop bsStyle="pills" className="nav-sidebar" stacked activeHref={pathname}>
      <NavItem href="/external/"><Glyphicon bsStyle="larger" glyph="stats"/>Overview</NavItem>
      <NavItem href="/external/sales"><Glyphicon bsStyle="larger" glyph="usd"/>Sales</NavItem>
      <NavItem href="/external/customers"><Glyphicon bsStyle="larger" glyph="user"/>Customers</NavItem>
        <NavDropdown title={<Glyphicon bsStyle="larger" glyph="th-large"><span id="glyphicon-text">Trends</span></Glyphicon>}>
            <MenuItem href="/external/trends_overview.js" eventKey={3.1}>Trends Overview</MenuItem>
            <MenuItem href="/external/trends.js" eventKey={3.1}>Product Trends</MenuItem>
        </NavDropdown>
    </Nav>
  </div>
)
