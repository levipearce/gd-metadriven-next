import React from 'react'
import Head from 'next/head' // allows us to modify the HTML header element
import Router from 'next/router'
import {Button, Grid, Row, Col, Nav, NavItem, Glyphicon} from 'react-bootstrap'
import Header from "../components/Header"
import SideBar from "../components/SideBar"
import HeaderExt from "../components/HeaderExt"
import SideBarExt from "../components/SideBarExt"

export default class App extends React.Component {

    render() {
        Router.onRouteChangeStart = (url) => {
            console.log('AppLogin is changing to: ', url)
        }
        console.log('AppLogin Render');
        console.log(this.props.pathname.indexOf('external'));
        let bootStrapCss= null;
        //let bootStrapThemeCss= null;
        let style= null;
        let header =null;
        let sidebar=null;
        if(this.props.pathname.indexOf('internal')>-1){
            console.log('Using Internal Components')
            header = (<Header pathname={this.props.pathname}/>);
            sidebar = (<SideBar pathname={this.props.pathname}/>);
            //bootStrapCss= "/static/css/internal/bootstrap.css";
            //bootStrapThemeCss= "/static/css/internal/bootstrap-theme.css";
            style="/static/css/internal/styles.css";
        }else{
            console.log('Using External Components');
            header = (<HeaderExt pathname={this.props.pathname}/>);
            sidebar = (<SideBarExt pathname={this.props.pathname}/>);
           // bootStrapCss= "/static/css/internal/bootstrap.css";
           // bootStrapThemeCss= "/static/css/internal/bootstrap-theme.css";
            style="/static/css/external/styles.css";
        }
      return (  <main>
            <Head>
                <title>GoodData eTail Demo</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
                <link rel="stylesheet"
                      href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
                <link rel="stylesheet" href="/static/css/style-common.css"/>
                <link rel="stylesheet" href={style}/>
            </Head>
          {header}
            <Grid>
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
