import Link from 'next/link'
import {Col, Nav, NavItem, Glyphicon} from 'react-bootstrap'


export default class SideBarMeta extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const NavItems = ({navarray}) => (
            <Nav bsStyle="pills" stacked>
                {navarray.map((nav,index) => (
                    <NavItem key={index} href={nav.navpath}><Glyphicon bsStyle="larger" glyph={nav.glyph}/>{nav.text}</NavItem>
                ))}
            </Nav>
        );
        return (<div><NavItems navarray={this.props.navmenu}/></div>);
    }
}
