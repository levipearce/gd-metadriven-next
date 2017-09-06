import React from 'react'
import Head from 'next/head' // allows us to modify the HTML header element
import Router from 'next/router'
import { Grid, Row, Col} from 'react-bootstrap'
import Header from "../components/Header"
import HeaderGridFS from "../components/HeaderGridFS"
import SideBar from "../components/SideBarMeta"
import HeaderExt from "../components/HeaderExt"
import SideBarExt from "../components/SideBarExt"
import {LAYOUTS} from "../pages/meta"

export default class AppFS extends React.Component {
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
            header = (<HeaderGridFS pathname={this.props.pathname} username={LAYOUT.USERNAME} avatar={LAYOUT.AVATAR} title={LAYOUT.TITLE} product={LAYOUT.PRODUCT}/>);
            sidebar = (<SideBar pathname={this.props.pathname} navmenu={LAYOUT.NAVMENU}/>);
            //bootStrapCss= "/static/css/internal/bootstrap.css";
            //bootStrapThemeCss= "/static/css/internal/bootstrap-theme.css";
            style=`/static/css/${LAYOUT.STYLEPATH}/styles.css`;

      return (  <main>
            <Head>
                <title>GoodData Financial Services Demo</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
                <link rel="stylesheet"
                      href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
                <link rel="stylesheet" href="/static/css/style-common.css"/>
                <link rel="stylesheet" href={style}/>
            </Head>
            <Grid fluid>
                <Row>
                    <Col sm={12}>
                        {header}
                    </Col>
                </Row>
                <Row>
                    <Col className="sidebar-area" sm={2}>
                        {sidebar}
                    </Col>
                    <Col className="content-area" sm={10}>
                        {this.props.children}
                    </Col>
                </Row>
            </Grid>
        </main> );
    }
}
