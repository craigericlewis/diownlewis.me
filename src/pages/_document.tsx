// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document'
import styled, { ServerStyleSheet }from 'styled-components';

const DocumentHtml = styled(Html)`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100%;
`;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <DocumentHtml>
        <Head>
        <link
            href="/fonts/style.css"
            rel="stylesheet"
          />
          <link
            rel="preload"
            href="/fonts/LexendExa-Regular.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body style={{margin: "0"}}>
          <Main />
          <NextScript />
        </body>
      </DocumentHtml>
    )
  }
}

export default MyDocument