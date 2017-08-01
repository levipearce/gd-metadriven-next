import Head from 'next/head' // allows us to modify the HTML header element
import {Button, Grid, Row, Col, Nav, NavItem, Glyphicon} from 'react-bootstrap'
import Header from "../components/Header"
import SideBar from "../components/SideBar"

export default ({pathname, children}) => (

  <main>
    <Head>
      <title>GoodData eTail Demo</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
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

    { /*language=CSS*/ }
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


    `}</style>
  </main>
)
