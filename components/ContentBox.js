/**
 * Created by orourke on 7/31/17.
 */

import Link from 'next/link' // NextJS hyperlink support
import {Nav, Navbar, NavDropdown, MenuItem, NavItem, Panel, Button, Image, Glyphicon} from 'react-bootstrap'

export default ({children}) => (
  <div>
    <div className="contentBox">
      {children}
    </div>
    <style jsx>{`
              div {
                    width: 942px;
                    margin-top: 10px;
                    margin-bottom: 10px;
               }
            `}</style>
  </div>
)