import React from 'react'
import Head from 'next/head' // allows us to modify the HTML header element
import {Panel} from 'react-bootstrap'

export default ({pathname, children}) => (

    <main>
        <Head>
            <title>GoodData eTail Demo</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
        </Head>
            {children}
    </main>
)
