/**
 * Created by orourke on 7/31/17.
 */

import Link from 'next/link' // NextJS hyperlink support
import {Nav, Navbar, NavDropdown, MenuItem, NavItem, Panel, Button, Image, Glyphicon} from 'react-bootstrap'

export default ({children}) => (
  <Panel>
    {children}
  </Panel>
)