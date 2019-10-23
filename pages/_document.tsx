import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import StoryblokService from '../utils/storyblok.service';

/**
 * Custom component used to augment <html> and <body tags>
 * https://nextjs.org/docs/#custom-document
 */
export default class MyDocument extends Document<any> {
  static getInitialProps({ renderPage }) {
    // Emotion Setup
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }


  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
