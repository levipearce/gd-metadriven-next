import React from 'react'
import Head from 'next/head' // allows us to modify the HTML header element
import {Button, Grid, Row, Col, Nav, NavItem, Glyphicon} from 'react-bootstrap'
import Header from "../components/Header"
import SideBar from "../components/SideBarExt"


const bootStrapCss = "/static/css/internal/bootstrap-internal.css";
const bootStrapThemeCss = "/static/css/internal/bootstrap-internal.css";

export default ({pathname, children}) => (

    <main>
        <Head>
            <title>GoodData eTail Demo</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
            <link rel="stylesheet" href={bootStrapCss}/>
            <link rel="stylesheet" href={bootStrapThemeCss}/>
        </Head>
        <Header pathname={pathname}/>
        <Grid>
            <Row>
                <Col className="sidebar-area" sm={2}>
                    <SideBar pathname={pathname}/>
                </Col>
                <Col className="content-area" sm={10}>
                    {children}
                </Col>
            </Row>
        </Grid>

        {/*language=CSS*/}
        <style jsx global>{`
            * {
                font-family: "Open Sans", sans-serif;
            }

            body {
                margin: 0;
                padding: 0px 0px;
                background-color: #F8F8F8;
            }

            .container {
                margin: 0;
                padding: 0;
            }

            .row {
                margin: 0;
                padding: 0;
            }

            div.sidebar-area {
                padding: 0;
                background-color: white;
                border-top-color: #44B5F2;
                border-top-style: solid;
                border-top-width: 3px;
            }

            div.panel {
                border-radius: 2px;
                padding: 20px;
                margin: 10px;
            }

            div.panel-body {
                padding: 0;
            }

            div.content-area {
                padding: 0 20px;
            }

            .content-area iframe {
                border-style: none;

            }

            .navbar-inverse .navbar-brand {
                color: white;
            }

            /* Color palette */

            /*:root {
                --steel: #7e859a;
                --warm-pink: #f14d76;
                --dark-sky-blue: #29a9ec;
                --white: #ffffff;
                --charcoal-grey: #313541;
                --dark-blue-grey: #243a57; /* external */
            /*--sun-yellow: #fed331;*/ /* external */
            /*--dodger-blue: #47baf6;*/ /* gradient start */
            /*  --azure: #0b9ae0;*/ /* gradient end */
            /*}*/

            /* Text styles */

            .navbar-brand-label {
                font-family: OpenSans;
                font-size: 20px;
                color: #ffffff;
                /*color: var(--white);*/
            }

            .navbar-page-title {
                font-family: OpenSans;
                font-size: 20px;
                font-weight: 300;
                color: #ffffff;
                /*color: var(--white);*/
            }

            .sidenav-itemtext {
                font-family: OpenSans;
                font-size: 12px;
                font-weight: bold;
                color: #313541;
                /*color: var(--charcoal-grey);*/
            }

            .navbar-username {
                font-family: OpenSans;
                font-size: 12px;
                color: #ffffff;
                /*   color: var(--white);*/
            }

            .dashboard-heading-text {
                font-family: OpenSans;
                font-size: 20px;
                font-weight: 600;
                color: #313541;
                /*color: var(--charcoal-grey);*/
            }

            .dashboard-breadcrumb-text {
                font-family: OpenSans;
                font-size: 10px;
                color: #7e859a;
                /*            color: var(--steel);*/
            }

            .dashboard-panel-title {
                font-family: OpenSans;
                font-size: 12px;
                font-weight: bold;
                color: #ffffff;
                /*            color: var(--white);*/
            }

            .dashboard-metric-box-blue {
                width: 160px;
                height: 100px;
                border-radius: 2px;
                background-image: linear-gradient(72deg, #47baf6, #0b9ae0);
                /*            background-image: linear-gradient(72deg, var(--dodger-blue), var(--azure));*/
                box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.02);
            }

            .dashboard-metric-box-white {
                width: 160px;
                height: 100px;
                border-radius: 2px;
                background-color: #ffffff;
                /*   background-color: var(--white);*/
                box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.02);
                border: solid 1px #e0e3e8;
            }

            .dashboard-metric {
                font-family: Lato;
                font-size: 30px;
                font-weight: 300;
                color: #ffffff;
                /*color: var(--white);*/
            }

            .dashboard-metric-label {
                font-family: OpenSans;
                font-size: 10px;
                color: #ffffff;
                /*color: var(--white);*/
            }

            .button-see-more {
                width: 96px;
                height: 27px;
                border-radius: 100px;
                background-color: #f14d76;
                /*background-color: var(warm-pink);*/
            }

            .navbar-inverse .navbar-nav {
                color: white;
            }
        `}</style>
    </main>
)
