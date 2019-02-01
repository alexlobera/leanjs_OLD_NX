---
title: Server-side rendering SSR <br /> made easy with React
date: 2019-01-27
subtitle: Server-side rendering (SSR) can improve significantly the user experience of you web app. Luckly React has built in SSR support.
author: alex
imageUrl: https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fssr%2Fssr-clouds-min.jpeg?alt=media
order: 8
---

Server-side rendering refers to the technique to which a web server returns dynamic and complete HTML on the HTTP response. By complete HTML I mean the HTML tags that conform an entire web page (html, head, body, etc). By dynamic I mean the HTML on the response varies depending on some variable on the request. Typically the variable is the URL, although it can also be a header.

The idea of a web server that returns dynamic HTML on the HTTP response is nothing new at all; **web servers do SSR since they were created in the last century**. The diffence between the last century and now is that before there was no alternative to SSR due to limited capatilites of web browsers at the time. In the old times, the server was the one doing most of the work. The use of JavaScript on the client was very limited.

## Single-page apps - SPA

In the early 2000's a new approach started to become popular, the single-page app - also known as SPA.

[First version of Gmail]()

The idea of a single-page app is that we try to do as much work as possible on the browser by taking full advantage of modern browser capabilities. In this approach JavaScript becomes the main language to build web applications :D

A single-page app has many advantatges compared to the previous paradigm:

- It improves the user experience by making user interactions much faster by avoiding network round-trips to the server.
- It improves the user experience by enabling new and more sophisticated user interactions.
- It can reduce costs and increase scallability. Think of a SPA connected directly to a Firebase DB.
- No need to maintain two code bases, front and back. I used to write the same view in [JS](TDO ADD mustache) and PHP(TODO ADD TWIG). In a SPA we only write the JS one.

## SPA problems

SPA bring some new issues. Have you seen the following screen:

[Gmail load HTML version]()

Some of the problems we can experience with SPA are:

- Load time. What if the network is slow and it takes 2 seconds to download the initial
- SEO, not anymore
- Social metas

## Implementing SSR in React

React has built in support for SSR. The only thing you need to do is `const { renderToString } = require("react-dom/server")` and then invoke the renderToString function with the Root component of you app.

You can run the next code by clicking on the green "run" button and see how it works:

```runkit
const React = require("react")
const { renderToString } = require("react-dom/server")
const Root = React.createElement(
    "div",
    null,
    "I am the root"
)
console.log(renderToString(Root))
```

The previous example is quite cool, we are running the renderToString from "react-dom/server" on the browser by rendering a node environment via Runkit using React 🤔.

### React libraries with SSR support

This is a list of libraries with great SSR support that you'll probably want to use in combination with react-dom/server:

- React Router for routing both client and server side.
- Styled-components for styling the app.
- React Helmet to add metas to the head.
- GraphQL for data fetching.

## Configuration

### Development

To develop your application using Webpack you'll need at least:

- Webpack, obviously:
  ```
  const webpack = require('webpack');
  ```
- A Webpack compiler based on some Webpack configuration:

  ```
  const webpackConfig = require('./webpack.config.js');
  const compiler = webpack(webpackConfig)
  ```

- A server to serve HTML, JS, and CSS dynamically at dev time:

  ```
  const serverConfig = require('./webpackDevServer.config.js');
  const devServer = new WebpackDevServer(
        compiler, serverConfigs
  );
  ```

  <img src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fssr%2Flocal-env.png?alt=media" alt="Webpack development environment"></img>

Configuring Webpack to bundle your React application and run it during development with a good dev experience is not an easy task. Let's say you use Create React App (CRA) to create apps and you want to add SSR support to it.

First, let's see how Webpack works in CRA. There are 2 parts, configuration and scripts, with a few pieces each that we going to look at:

- Configuration
  - webpack.config.js
  - webpackDevServer.config.js
- Srcipts:
  - start.js

When we run `yarn start` the script/start.js will start a Webpack dev server on our machine.
When you navigate to localhost:300x the Webpack dev server returns static HTML and a bundle.js that contains the JS of your app. Webpack is watching the source code, so when the code is changed the `compiler` will compile the app. Then Webpack dev server will send a message to the browser via websocket to 'update' the UI with the new version of the app.

### Production

- Configuration
  - webpack.config.js
- Srcipts:
  - build.js

<img src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fssr%2Fbuild-and-production.png?alt=media" alt="Webpack built in production"></img>

## react-scripts-ssr

## Frameworks

## SSR and PWA
