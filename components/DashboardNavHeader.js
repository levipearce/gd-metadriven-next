/**
 * Created by lpearce on 7/31/17.
 */
import {Button,Navbar,Nav,Panel} from 'react-bootstrap'

export default ({title, path}) => (
    <Panel className="gd-custom-panel-navigation">
        <Navbar fluid className="gd-custom-navbar">
            <Navbar.Text className="gd-custom-navbar-text">
                {title} <Button bsStyle="danger" bsSize="small" href={path}>See More</Button>
            </Navbar.Text>
        </Navbar>
    </Panel>
)