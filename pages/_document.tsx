"use client";

import * as React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { Provider as StyletronProvider } from 'styletron-react';
import { Server, Sheet } from 'styletron-engine-atomic';
import { styletron } from '../components/styletron';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
         
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx: any) => {

  const page = await ctx.renderPage({
    // eslint-disable-next-line react/display-name
    enhanceApp: (App: any) => (props: any) =>
    (
      <StyletronProvider value={styletron}>
        <App {...props} />
      </StyletronProvider>
    ),
  });
  const stylesheets = (styletron as any as Server).getStylesheets() || [];
  return { ...page, stylesheets };


}

export default MyDocument;