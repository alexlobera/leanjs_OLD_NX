---
title: Server-side rendering SSR <br /> made easy with React
date: 2019-01-27
subtitle: Server-side rendering (SSR) can improve significantly the user experience of you web app. React has built-in SSR support.
author: alex
imageUrl: https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fssr%2Fssr-clouds-min.jpeg?alt=media
order: 8
---

Server-side rendering refers to the technique to which a web server returns dynamic HTML on the HTTP response. By dynamic I mean the HTML on the response varies depending on some variable on the request. Typically the variable is the URL.

The idea of a web server that returns dynamic HTML on the HTTP response is nothing new at all; **web servers do SSR since they were created in the last century**. The difference between the last century and now is that before there was no alternative to SSR due to limited capabilities of web browsers at the time. In the old times, the server was the one doing most of the work. The use of JavaScript on the client was very limited.

## Single-page apps - SPA

In the early 2000s a new approach started to become popular, the single-page app - also known as SPA.

<img src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fssr%2Fgmail-min.png?alt=media" alt="First version of Gmail"></img>

The idea of a single-page app is that we try to do as much work as possible on the browser by taking full advantage of modern browser capabilities. In this approach, JavaScript becomes the main language to build web applications.

If you use Create React App (CRA) to create React apps then you are creating SPAs.

### SPA advantatges

A single-page app has many advantages compared to the previous paradigm:

- It improves the user experience by making user interactions much faster avoiding network round-trips to the server.
- It improves the user experience by enabling new and more sophisticated user interactions.
- It can reduce costs and increase scalability. Think of a SPA connected directly to a Firebase DB.
- No need to maintain two different code bases, front and back.

### SPA problems

SPA bring some new issues. Have you seen the following screen:

<img src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fssr%2Fgmail-html5-min.png?alt=media" alt="Gmail load HTML version"></img>

Some of the problems we can experience with SPA are:

- What if the network is slow and it takes 5 seconds to download the initial JavaScript bundle? The user won't see anything until then.
- Social metas. Some like the Facebook metas don't work on SPA.
- SEO? This is not a problem anymore, as you can see in the following image Google can read SPA:

<img src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fssr%2Freact-router-seo-min.png?alt=media&token=6f709d18-8f65-4bc0-b24d-58e282d4fa48" alt="React Router SPA Google indexed"></img>
If you disable JS and navigate to the React Router site you'll see an empty blank page. Therefore Google can execute and read React SPAs.

## Server-side rendering

<img src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fssr%2Fssr-intersection.png?alt=media" alt="SSR the intersection server and client"></img>

With SSR most of our code runs both on the server and on the client. Obviously, we can't run 100% of the code on both server and client because there is code that only concerns to the server and code that only concerns to the client.

It doesn't make sense to run the following code on the server since there is no DOM:

`ReactDOM.render(<App />, document.getElementById("root"));`

And you can't run a server on the browser:

```
const server = express()
server.listen(8889, () => {
  console.log(`Running an Express server`)
})
```

### Improving performance

One of the main advantages of rendering the page on the server is that we can improve the render time of the app, and so the user experience.

```
1 -> HTML Request
2 <- HTML Response
3     -> JS Request
4     <- JS Response
5         - JS executed and UI rendered without data
6             -> API request
7             <- JSON response
8                 - UI rendered with data
```

The time it takes to # 1,2,3 and 4 to complete depends on the network and the server. It will be very fast in the case of a CDN, although in SSR only # 3 and 4 will benefit from a CDN.

The time it takes to # 5 to complete depends on the client device.

The time it takes to # 6 and 7 to complete depends on the network and the server (more unlikely than # 1 to 4 to be in a CDN)

The time it takes to # 8 to complete depends on the client device.

Long story short, looking at the previous sequence, in a SPA the user needs to complete # 5 to see the UI and to complete # 8 to see the UI populated with data. In SSR the user can see the UI populated with data at the end of # 2

## Implementing SSR in React

This is the easy part since React has built-in support for SSR (except Suspense, which is coming soon!). The only thing you need to do is to `import { renderToString } from "react-dom/server"` and invoke the renderToString function with the Root component of your app.

You can run the next code by clicking on the green "run" button and see how it works:

```runkit
const React = require("react")
const { renderToString } = require("react-dom/server")
const Root = React.createElement(
    "div",
    null,
    "Hello SSR"
)
console.log(renderToString(Root))
```

The previous example is quite cool, we are running the renderToString function from "react-dom/server" on your browser to render HTML dynamically in node (server) environment via Runkit using React 🤔 🤯.

### React libraries with SSR support

This is a list of libraries with great SSR support that you'll probably want to use in combination with react-dom/server:

- [React Router](https://reacttraining.com/react-router/web/guides/server-rendering) for routing both client and server side.
- [Styled-components](https://www.styled-components.com/docs/advanced#server-side-rendering) for styling the app.
- [React Helmet](https://github.com/nfl/react-helmet#server-usage) to add metas to the head.
- [GraphQL](https://www.apollographql.com/docs/react/features/server-side-rendering.html) for data fetching.

## Configuration

In the previous section, we saw how easy it is to render React on the server. Modern real-world web apps are more complicated than the "Hello SSR" example we run, and we require extensive configuration to develop and build them.

[Webpack](https://webpack.js.org/) is nowadays the industry standard to develop and bundle web applications. Webpack does a lot of good things to help us bundle web apps, although configuring Webpack can be a tedious and ungrateful task for many developers. Fortunately, there are many tools and frameworks to help us with the set-up. Unfortunately, not all of them support SSR.

Let me give you an overview of how Webpack works to understand the different SSR alternatives.

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
  const WebpackDevServer = require('webpack-dev-server');
  const devServer = new WebpackDevServer(
        compiler, serverConfigs
  );
  ```

  <img src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fssr%2Flocal-env-min.png?alt=media"></img>

The most popular tool to create React apps is [Create React App (CRA)](https://github.com/facebook/create-react-app). Unfortunately, CRA doesn't support SSR. Let's see how we could add SSR support to CRA.

First, we should understand how Webpack is set in CRA. There are 2 parts i) configuration and ii) scripts, that we need to understand:

- Configuration
  - [webpack.config.js](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpack.config.js)
  - [webpackDevServer.config.js](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpackDevServer.config.js)
- Scripts:
  - [start.js](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/scripts/start.js)

When we run `yarn start` the script/start.js starts a Webpack dev server on our machine. After, when we navigate to localhost:300X Webpack dev server will return static HTML and a bundle.js that contains the JS of the app. In this post, I refer to port 300X as the port CRA has found available to run the WebpackDevServer.

Webpack is watching the source code of the app, so everytime you edit and save any code the `compiler` compiles the app. When that happens, Webpack dev server sends a message to the browser via websocket to say 'there is a new version of the UI' so it can be updated. This way CRA enables a good dev experience.

### Production build

Before deploying your application to production you need to run the `build` process. The build in CRA executes the script/build.js which uses the webpack.config.js, both part of [react-scripts](https://www.npmjs.com/package/react-scripts), to package the source code of your app into something optimal that can be distributed to the Web.

- Configuration
  - [webpack.config.js](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpack.config.js)
- Scripts:
  - [build.js](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/scripts/build.js)

Once you run the build script, locally or ideally in a CI (Continous Integration), you can deploy your web app.

Deploying a CRA is straightforward because the app is made of **static assets** like HTML, JS, and CSS. We don't need a server to run the app in production because the app we send to all the browsers is the same for all of them. You can serve your static app from a CDN.

<img src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fssr%2Fno-ssr-build-and-production-min.png?alt=media" alt="Webpack built in production"></img>

## react-scripts-ssr

If you, like most people, use Create React App to create a React app and now you want to add SSR support to it, you'll have to make some significant changes. I see two paths to make those changes. One is to [eject](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-eject) your app (which is a one-way, not recommended operation), and replace WebpackDevServer by a production-ready server that can handle dev and production. The other path I see is not to eject your app and instead to add another "box" to the picture that you can easily remove at any point.

I think good software is such that it's designed in a way so we can make decisions in the now and easily change our minds in the future. In other words, good software is [composable software](/blog/react-is-all-about-composition-react-hooks-render-props-hocs).

### The server

Let's see how to compose CRA with SSR, and what I mean by adding another "box" to the picture:

<img src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fssr%2Fssr-dev-2-min.png?alt=media" alt="Create React App running with another Express server"></img>

First, we add another server, an Express server running on port 8888 in this case. This server will be responsible for generating the HTML dynamically instead of returning always the same index.html.

When we navigate to localhost:8888 the new server will invoke renderToString with the root component of the React app and send that string in the HTTP response. The server should only do that if the request is not trying to access CSS or JS assets from the React app.

If the request is trying to access CSS or JS assets from the React app then the server will proxy the request to the WebpackDevServer that is running on port 300X.

What we are doing with this approach is to let the new server take care of what it's concerned about (HTML), and let CRA continue taking care of the rest. Implementing this is quite straightforward with Express by adding the following middleware:

```
const port = process.env.REACT_APP_WEBPACK_DEV_SERVER_PORT
router.use(
  ["/static", "/sockjs-node"],
    proxy({
      target: `http://localhost:${port}`,
      ws: true
    })
);
```

A few notes on that snippet:

- The env variable `process.env.REACT_APP_WEBPACK_DEV_SERVER_PORT` is not part of CRA. We'll need to modify the scripts/start.js to add that variable.
- CRA places all the static resources under localhost:300X/static so it's easy to proxy them.
- The proxy we use is [http-proxy-middleware](https://www.npmjs.com/package/http-proxy-middleware). We only `use` the proxy in dev environment.
- [Webpack HMR](https://webpack.js.org/concepts/hot-module-replacement/) uses websockets to notify the browser that the app has changed. The path it uses is localhost:300X/sockjs-node.

<img src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fssr%2Fssr-hmr-min.png?alt=media" alt="Webpack Hot Module Replacement (HMR) with Create React App (CRA)"></img>

You will add this proxy in every CRA that you want to add SSR. Therefore you can [extract it into an Express middleware](https://github.com/reactjsacademy/react-scripts-ssr/blob/master/src/middlewares.js) that you can reuse across different apps.

#### index.html

CRA has an [index.html template](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/public/index.html) which is used to:

- Inject some data like the title of the page at build time .
- Inject the HTML of the React app in `<div id="root"></div>` at runtime.

Our server also needs an HTML template to inject the HTML from `renderToString(<App />);`. To continue composing CRA with SSR capabilities we are going to use the same template.

In this post, I'm not going to discuss the implementation details of how to use the same template. As you might see, that implementation is going to be the same in every app, so we can abstracted into some [functions that we can reuse](https://github.com/reactjsacademy/react-scripts-ssr/blob/master/src/render.js). Which I already did, [feel free to use](https://www.npmjs.com/package/react-scripts-ssr).

### App specific server code

**There is some concrete code that belongs to each app, and so it can't be abstracted into a generic middleware**.

The following app only requires React:

```
const html = renderToString(<App />);
```

While the next app uses GraphQL, React-Router, and StyledComponents. All these libraries have SSR support and require some small set-up on the server.

```
const sheet = new ServerStyleSheet();
const graphqlClient = new ApolloClient({
  link: createHttpLink({
    uri: `${API_BASE_URL}/api/graphql`,
    fetch
  }),
  cache: new InMemoryCache()
});

let html;
const App = (
  <StyleSheetManager sheet={sheet.instance}>
    <Router context={{}} location={req.url}>
      <Root graphqlClient={graphqlClient} />
    </Router>
  </StyleSheetManager>
);
await getDataFromTree(App);
html = renderToString(App);
```

### Scripts

The final two-way step towards adding SSR capabilities to CRA takes us to the start and build script:

#### scripts/build.js

The build script that bundles the app on the client in production is the same since we have not changed they way CRA operates.

#### scripts/build-server.js

We need to create a build script to transform our code like JSX into some JS that can run on the server. I already [implemented that](https://github.com/reactjsacademy/react-scripts-ssr#step-1) if you want to use it.

#### scripts/start.js

We need to change the way CRA start scripts works since now it also needs to start the server that renders HTML. Yes, it's [implemented](https://github.com/reactjsacademy/react-scripts-ssr#step-1) in the same package.

## Frameworks

Now the big question, should I use a framework, or should I use a tool like react-scripts-ssr that adds SSR support to CRA?
