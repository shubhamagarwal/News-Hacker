import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
// import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { Helmet } from 'react-helmet';
import Routes from '../client/Routes';

export default (req, store, context) => {
  // const sheet = new ServerStyleSheet();
  const content = renderToString(
    // <StyleSheetManager sheet={sheet.instance}>
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
    // </StyleSheetManager>
  );
  const helmet = Helmet.renderStatic();
  return `<!DOCTYPE html>
          <html lang="en">
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <style>
                  body{
                    font-family: sans-serif;
                  }
                  .container{
                    width: 1140px;
                    margin: 0 auto;
                    text-align: center;
                    background: #f6f6ef;
                  }
                  @media only screen and (min-width: 768px) and (max-width: 991px) {
                    .container{
                      width: 991px;
                    }
                  }
                  @media only screen and (max-width: 767px) {
                    .container{
                      width: 100%;
                    }
                  }
                </style>
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${serialize(store.getState()).replace(
                      /</g,
                      '\\u003c'
                    )}
                </script>
                <script src="/bundle.js"></script>
            </body>
    </html>`;
};
