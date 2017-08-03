/**
 * Created by lpearce on 7/31/17.
 */
import {Button,Navbar,Nav,Panel} from 'react-bootstrap'

export default ({title, path}) => (
    <Panel bsClass="gd-custom-dashboard-header">
        <Navbar fluid className="gd-custom-navbar">
            <Navbar.Text>
                {title} <Button bsStyle="custom" className="button-custom button-see-more" href={path}>See More</Button>
            </Navbar.Text>
        </Navbar>
    </Panel>
)