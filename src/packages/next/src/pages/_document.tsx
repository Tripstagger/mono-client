import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='UTF-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
