/* Simplified App component for the login page */

import React from 'react'
import Head from 'next/head' // allows us to modify the HTML header element
import {Image, Grid, Row, Col, Panel} from 'react-bootstrap'

export default ({pathname, children}) => (

  <main>
    <Head>
      <title>GoodData eTail Demo</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
      <link rel="stylesheet" href="/static/css/style-login.css"/>
    </Head>

    <div className="gd-login-header">
          <Image responsive alt="Brand" src="/static/images/good_retail_logotype.png"/>
    </div>
    <div className="gd-login-body">
      {children}
    </div>

  </main>
)
