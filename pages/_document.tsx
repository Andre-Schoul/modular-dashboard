import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

// import { ServerStyleSheets } from '@material-ui/core/styles';
// import theme from '../components/Theme/theme';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content='#4287f5' />
          <meta name='application-name'                      content='PWA App' />
          <meta name='description'                           content='Best PWA App in the world' />
          <meta name='mobile-web-app-capable'                content='yes' />
              
          <meta name='apple-mobile-web-app-capable'          content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title'            content='PWA App' />

          <meta name='twitter:card'                          content='summary' />
          <meta name='twitter:url'                           content='https://b2ab9ff7.ngrok.io' />
          <meta name='twitter:title'                         content='PWA App' />
          <meta name='twitter:description'                   content='Best PWA App in the world' />
          <meta name='twitter:image'                         content='https://b2ab9ff7.ngrok.io/images/pwa-192.png' />
          <meta name='twitter:creator'                       content='@AndreSchoul' />

          <meta property='og:type'                           content='website' />
          <meta property='og:title'                          content='PWA App' />
          <meta property='og:description'                    content='Best PWA App in the world' />
          <meta property='og:site_name'                      content='PWA App' />
          <meta property='og:url'                            content='https://b2ab9ff7.ngrok.io' />
          <meta property='og:image'                          content='https://b2ab9ff7.ngrok.io/images/pwa-192.png' />

          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/images/pwa-192.png" />
          <link rel='apple-touch-icon' sizes='192x192' href="/images/pwa-192.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
/*
// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};*/