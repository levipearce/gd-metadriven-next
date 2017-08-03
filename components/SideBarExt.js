import Link from 'next/link'
import {Col, Nav, NavItem, Glyphicon} from 'react-bootstrap'

function handleSelect(selectedKey) {
  console.log('selected ' + selectedKey);
}

export default ({pathname}) => (
  <div>
    <Nav bsStyle="pills" className="nav-sidebar" stacked activeHref={pathname}>
      <NavItem href="/external/overview"><Glyphicon bsStyle="larger" glyph="stats"/>Overview</NavItem>
      <NavItem href="/external/sales"><Glyphicon bsStyle="larger" glyph="usd"/>Sales</NavItem>
      <NavItem href="/external/customers"><Glyphicon bsStyle="larger" glyph="user"/>Customers</NavItem>
      <NavItem href="/external/trends"><Glyphicon bsStyle="larger" glyph="th-large"/>Trends Test</NavItem>
    </Nav>
  </div>
)
