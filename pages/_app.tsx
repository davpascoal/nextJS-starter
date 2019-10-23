import App from 'next/app';
import React from 'react';

/**
 * Configurable component used to control page initialization
 * https://nextjs.org/docs/#custom-app
 */
class MyApp extends App<any> {
  static async getInitialProps({ Component, ctx, router }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {
      pageProps,
    };
  }

  render() {
    const { Component, pageProps } = this.props;


    return (
      <main>
        <Component {...pageProps} />
      </main>
    );
  }
}

export default MyApp;
