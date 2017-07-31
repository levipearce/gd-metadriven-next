import Link from 'next/link'
import {Col, Nav, NavItem, Glyphicon} from 'react-bootstrap'

function handleSelect(selectedKey) {
  console.log('selected ' + selectedKey);
}

export default ({pathname}) => (
  <div>
    <Nav bsStyle="pills" className="nav-sidebar" stacked activeHref={pathname}>
      <NavItem href="/"><Glyphicon glyph="signal"/>Overview</NavItem>
      <NavItem href="/sales"><Glyphicon glyph="earphone"/>Sales</NavItem>
      <NavItem href={'/customers'}><Glyphicon glyph="user"/>Customers</NavItem>
      <NavItem href={'/categories'}><Glyphicon glyph="usd"/>Categories</NavItem>
      <NavItem href={'/channels'}><Glyphicon glyph="comment"/>Channels</NavItem>
      <NavItem href={'/stores'}><Glyphicon glyph="shopping-cart"/>Stores</NavItem>
    </Nav>

    { /*language=CSS*/ }
    <style jsx global> {`

        span.glyphicon {
            padding-right: 10px;
        }

        .nav-stacked li {
            border-bottom-color: lightgray;
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
            color: #007BB5;
            border-top-color: #007BB5;
            border-top-style: solid;
            border-top-width: 2px;
        }
    `}</style>

  </div>
)
