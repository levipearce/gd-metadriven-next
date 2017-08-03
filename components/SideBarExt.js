import Link from 'next/link'
import {Col, Nav, NavItem, Glyphicon} from 'react-bootstrap'

function handleSelect(selectedKey) {
  console.log('selected ' + selectedKey);
}

export default ({pathname}) => (
  <div>
    <Nav bsStyle="pills" className="nav-sidebar" stacked activeHref={pathname}>
      <NavItem href="/external"><Glyphicon bsStyle="larger" glyph="stats"/>Overview</NavItem>
      <NavItem href="/external/sales"><Glyphicon bsStyle="larger" glyph="usd"/>Sales</NavItem>
      <NavItem href="/external/customers"><Glyphicon bsStyle="larger" glyph="user"/>Customers</NavItem>
      <NavItem href="/external/products"><Glyphicon bsStyle="larger" glyph="th-large"/>Trends Test</NavItem>
    </Nav>

    { /*language=CSS*/ }
    <style jsx global> {`

        span.glyphicon {
            padding-right: 10px;
        }

        .glyphicon-larger {
            font-size: 20px;
        }

        .nav-stacked li {
            border-bottom-color: #EEEEEF;
            border-bottom-style: solid;
            border-width: 1px;
            height: 50px;
            margin-top: 2px;

        }

        .nav-stacked li.active {
            margin-top: 0px;
        }

        .nav-stacked li a {
            text-transform: uppercase;
            border-radius: 0;
            font-weight: Bold;
            font-size: 12px;
            color: #313541;
        }

        .nav-stacked li a:hover, .nav-stacked li.active a:hover {
            background-color: white;
            color: #007BB5;
        }

        .nav-stacked li.active a {
            background-color: white;
            color: #29A9EC;

        }
    `}</style>

  </div>
)
