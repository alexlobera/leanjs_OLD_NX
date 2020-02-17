---
contentType: blog
title: Secure React apps <br />using JWT and React Router
date: 2018-11-07
subtitle: Being able to secure certain parts of your app is very important. In this article we'll cover the two most important layers
author: alex-lobera
imageUrl: https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fauth%2Farrow-wall-min.jpeg?alt=media
authorTwitter: alex_lobera
order: 3
tags: ['react', 'beginner']
---

You should protect your React app at two different layers:

- At the API layer, the data that the user can read or change.
- At the React layer, the paths of the React app that the user can access.

Protecting the data is really the key one. If there is a bug in your React app, and a user can navigate to a view that he or she should not be able to access, the API should not return any data. In other words, if authorization failed at the React layer but authorization didn’t fail at the API level, then the user will only see a screen with no data.

In this article we are going to explain how to secure both layers focusing on the client-side of the application.

## Session state <a name="session-state"></a>

Either your app uses REST or GraphQL for the API, both cases work over the HTTP protocol. This means that your API is stateless at the protocol layer.

If you want to authorize users first you need to keep track of them. There are two approaches in a client/ server application to keep the state of the session:

- You can store the **state of the session on the server**. This gives you a lot of control but is less scalable because the more clients, the more resources you need to allocate to store the sessions.
- You can store the **state of the session on the client side**. In this case having more clients doesn’t impact the resources we need to allocate because the state is distributed among the clients. You get more scalability but less control.

There is no one solution that fits all. I always say that we, developers, are paid to make decisions, not to use tools that we know or find cool. In most applications we judge the simplicity we gain from using stateless servers overcomes the control we lose - but this will depend on your particular scenario.

So how does this client-side state work? Cryptography. The client stores the state, but it’s the server who has the (private) key to validate the session the client claims to be. For this we are going to use JWT.

## JWT <a name="jwt"></a>

JWT (JSON Web Token) is an open, **industry standard** RFC 7519 method for representing **claims securely** between two parties.

We are not going to get into much detail about JWT in this article, but we want to make sure a few things are pretty clear regarding these JSON Web Tokens:

- The tokens can contain data, like user_id or username, that will be stored on the client and shared with the server.
- The data in the token is signed. This means, the data can’t be changed without knowing it was altered. This way a client can claim “I’m user X”.
- The data in the token is not private. This means the data is public and anyone can read it (and as we just said, the server can change it). So don’t store private user data like an email or a credit card in the token.

The [JWT website](https://jwt.io/) has a debugger tool on the home page and you can paste tokens and visualize the content. Have a look, it’s fun to play with it if you haven’t yet.

<marketingcard text="🎉 New Online GraphQL Course! 🎉" to="/graphql/training/part-time-course/online/" button-text="Learn GraphQL"></marketingcard>

## Storing the state on the client <a name="storing-state-on-the-client"></a>

OK we go for JWT, now the next question is “where do I store the token on the client”? There are typically two places on your web app you can use i) local storage or ii) cookies. If you can (meaning the server and the client are in the same domain/ subdomain) I recommend to use cookies. The reason is that your application won’t have to manage the token. The token will be managed at the browser level, so it makes it more difficult to create a bug that can potentially open some security vulnerability.

In the end, where you store the token is an implementation detail. In our [React training](https://reactgraphql.academy/react/curriculum/) we always use cookies also for the sake of simplicity. Since the browser takes care of it, we implement less code and so move faster through the curriculum (which is quite dense!).

First part, protecting the data, done! What did we have to implement on our React app for this? Nothing. The API will set a cookie, and the API will read and verify the cookie on every request before returning or manipulating any data. We told you it was going to be fast. The token is managed by the browser not by your React app.

## Authentication vs Authorization <a name="authentication-vs-authorization"></a>

Authentication is the act of matching a session with a given user. Example, given a session I can securely identify the user is user_id 123.

Authorization is the act determining if a given user can access a given resource. Example, given two users, an admin and a super admin; admins are authorized to see invoices but can’t delete them; super admins are authorized to see and delete invoices.

Obviously authentication must happen before authorization.

Authentication starts by having a mechanism for users to get a valid token they can use when accessing different resources in the app. Typically this will be a form that will submit the credentials (e.g. username and password) to an API. You can see how to create a React login form in this article https://reactgraphql.academy/react/react-forms-controlled-and-uncontrolled-components/.

## Protecting routes on the client <a name="protecting-routes-on-the-client"></a>

This part is about deciding in your React code what views a given session can access to. As we discussed, we secure the data properly at the API layer, therefore the React layer does not add extra security but better user experience navigating the site.

There is mainly one task your React app needs to take care of, to stop the user from navigating a given path if the current session (or lack of it) can’t access to it.

Example, given a website with public and private routes, if the user is not authenticated then redirect the user to the login page otherwise display the App.

<img placeholder-height="256px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fauth%2Fpriate-branch.jpeg?alt=media" alt="React component tree private branch with React Router"></img>

You can implement that easily by adding a condition at the Root level in the component tree making the App branch (left branch) render only if the condition is true (e.g there is a valid token)

<img placeholder-height="241px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fauth%2Fconditional-rendering.jpeg?alt=media" alt="React Router conditional rendering in the component tree"></img>

The following is an example of how to implement that conditional rendering in your React component

<img placeholder-height="320px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fauth%2Fconditional-rendering-code-2.jpg?alt=media" alt="Conditional rendering code example with React Router"></img>

In the previous example we’ve seen the Redirect component. The Redirect component is a declarative way to take the user to a different path. Internally the Redirect component is doing “history.push(path)”. The React component encapsulates some imperative code so we can be declarative. [Declarative is the prefered choice in React](/react/introduction-to-thinking-in-react/) so you should try to avoid using history.push(path).

If we use a cookie to store the JWT, then the getSession function implementation in that example could be this

```
import Cookies from 'js-cookie'

export const getSession = () => {
  const jwt = Cookies.get('__session')
  let session
  try {
    if (jwt) {
      const base64Url = jwt.split('.')[1]
      const base64 = base64Url.replace('-', '+').replace('_', '/')
      // what is window.atob ?
      // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob
      session = JSON.parse(window.atob(base64))
    }
  } catch (error) {
    console.log(error)
  }

  return session
}

export const logOut = () => {
  Cookies.remove('__session')
}
```

If your application has different routes that can be public or private, you can create a generic component that will take care of redirecting as we did in the previous example. This is an example from the React Router official documentation:

```
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
```

You can use the PrivateRoute to redirect the user to the login page for any path the user must be logged in. Here is an example:

```
import { Switch, Route } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"
// other required imports like Auth, Onboarding, etc

// some component wrapping this return ...
return (
    <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/onboarding" component={Onboarding} />
        <ProtectedRoute
        path="/customer-error/"}
        component={ExistingCustomerError}
        />
        <ProtectedRoute
        path="/discrete-loan"
        component={DiscreteLoan}
        />
        <Route component={NotFound} />
    <Switch>
)
```

## Let’s recap <a name="recap"></a>

- You can store the user’s session either on the client or on the server. On the server gives you more control but less scalability, the opposite is true on the client.
- JWT is the de facto choice for storing the state on the client. JWT is secured but the payload is not private.
- On the client you can store the session using either local storage or cookies. Because cookies are managed by the browser, they require less work on your app and can be more secure.
- If your API and frontend are on the same domain/ subdomain you can store the token using a cookie.
- You can use the React Router Redirect component along with conditional rendering to easily implement protected routes in your React app.
