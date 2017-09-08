import React from 'react'
import Head from 'next/head' // allows us to modify the HTML header element
import { Grid, Row, Col} from 'react-bootstrap'
import HeaderGridFS from "../components/HeaderGridFS"
import SideBar from "../components/SideBarMeta"
import {LAYOUTS} from "../pages/meta"
/**
 *
 * */
export default class AppMetaDriven extends React.Component {
    getLayoutMetaObject(path){
        return LAYOUTS.filter(
            function(LAYOUTS){
                return path.startsWith(LAYOUTS.NAVPATH);
            }
        );
    }

    render() {
        let LAYOUT = this.getLayoutMetaObject(this.props.pathname)[0];
        let style= null;
        let header =null;
        let sidebar=null;
        let sidebarspan= LAYOUT.SIDEBAR ==null? 2 : LAYOUT.SIDEBAR;
        let totalspan = LAYOUT.TOTALSPAN_SM ==null ? 12 : LAYOUT.TOTALSPAN_SM;
        let contentspan = totalspan-sidebarspan;
            header = (<HeaderGridFS pathname={this.props.pathname} username={LAYOUT.USERNAME} avatar={LAYOUT.AVATAR} title={LAYOUT.TITLE} product={LAYOUT.PRODUCT}/>);
            sidebar = (<SideBar pathname={this.props.pathname} navmenu={LAYOUT.NAVMENU}/>);
            //bootStrapCss= "/static/css/internal/bootstrap.css";
            //bootStrapThemeCss= "/static/css/internal/bootstrap-theme.css";
            style=`/static/css/${LAYOUT.STYLEPATH}/styles.css`;
        let style_override=`/static/css${LAYOUT.NAVPATH}/style-override.css`;
      return (  <main>
            <Head>
                <title>GoodData Financial Services Demo</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
                <link rel="stylesheet"
                      href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
                <link rel="stylesheet" href="/static/css/style-common.css"/>
                <link rel="stylesheet" href={style}/>
                <link rel="stylesheet" href={style_override}/>
            </Head>
            <Grid fluid>
                <Row>
                    <Col sm={totalspan}>
                        {header}
                    </Col>
                </Row>
                <Row>
                    <Col className="sidebar-area" sm={sidebarspan}>
                        {sidebar}
                    </Col>
                    <Col className="content-area" sm={contentspan}>
                        {this.props.children}
                    </Col>
                </Row>
            </Grid>
        </main> );
    }
}
