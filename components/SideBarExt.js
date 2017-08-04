import Link from 'next/link'
import {Col, Nav, NavItem, Glyphicon, Dropdown,MenuItem} from 'react-bootstrap'

function handleSelect(selectedKey) {
  console.log('selected ' + selectedKey);
}

export default ({pathname}) => (
  <div>
    <Nav bsStyle="pills" className="nav-sidebar" stacked activeHref={pathname}>
      <NavItem href="/external/"><Glyphicon bsStyle="larger" glyph="stats"/>Overview</NavItem>
      <NavItem href="/external/sales"><Glyphicon bsStyle="larger" glyph="usd"/>Sales</NavItem>
      <NavItem href="/external/customers"><Glyphicon bsStyle="larger" glyph="user"/>Customers</NavItem>
        <Dropdown>
            <Dropdown.Toggle>
            <Glyphicon glyph="th-large" />
            Trends
        </Dropdown.Toggle>
            <Dropdown.Menu title="Trends">
            <MenuItem href="/external/trends_overview.js" eventKey={3.1}>Trends Overview</MenuItem>
            <MenuItem href="/external/trends.js" eventKey={3.1}>Product Trends</MenuItem>
        </Dropdown.Menu>
        </Dropdown>
    </Nav>
  </div>
)
