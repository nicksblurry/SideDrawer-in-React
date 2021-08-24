import Head from 'next/head';
import React from 'react';
import GlobalStyle from '../styles/global-styles';


const NextApp = (props) => {

    const { Component, pageProps } = props;

    return (
        <>
            <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
              <title>SideDrawer Example</title>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
  // }
}

export default NextApp;

