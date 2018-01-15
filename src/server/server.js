import Express from 'express';
import Webpack from 'webpack';
import WebpackConfig from '../../webpack.config';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebPackHotMiddleware from 'webpack-hot-middleware';
import React from 'react';

const PORT = 3000;
const app = Express();
const webpackCompiler = Webpack(WebpackConfig);
app.use(WebpackDevMiddleware(webpackCompiler, {
  publicPath: WebpackConfig.output.publicPath,
  noInfo: true,
  quiet: false
}));
app.use(WebPackHotMiddleware(webpackCompiler));

const mockDelayMs = 1300;
const mockDbRequest = queryDescription => new Promise(res => {
  setTimeout(() => res(queryDescription), mockDelayMs); // simulate database latency
});

app.get('/api/registerUser', async (req, res) => {
  const result = await mockDbRequest('user registered');
  res.json(result);
});

app.get('/api/placeOrder', async (req, res) => {
  const result = await mockDbRequest('order placed');
  res.json(result);
});

app.get('/api/emailReceipt', async (req, res) => {
  const result = await mockDbRequest('receipt emailed');
  res.json(result);
});

app.use((req, res) => {
  const htmlString = `<!DOCTYPE html>
    <html>
         <head>
            <title>Async Generator Function Demo</title>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1">
          </head>
          <body>
            <div id="reactDiv"/>
            <script src="/dist/bundle.js"></script>
          </body>
    </html>`;

  res.send(htmlString);
});

app.listen(PORT, () => {
  console.log(`Started async generator function demo on localhost:${PORT}...`);
});
