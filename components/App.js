import Head from 'next/head' // allows us to modify the HTML header element
import {Button, Grid, Row, Col, Nav, NavItem, Glyphicon} from 'react-bootstrap'
import Header from "../components/Header"
import SideBar from "../components/SideBar"

export default ({props, children}) => (

  <main>
    <Head>
      <title>GoodData eTail Demo</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
    </Head>
    <Header pathname={props.url.pathname}/>
    <Grid>
      <Row>
        <Col sm={2}>
          <SideBar pathname={props.url.pathname}/>
        </Col>
        <Col sm={10}>
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

        .btn-custom {
            background-color: #FF4D74;
            color: white;
        }

        .container {
            width: 100%;
            padding: 0;
        }

        .row {
            margin: 0;
            padding: 0;
        }
    `}</style>
  </main>
)
