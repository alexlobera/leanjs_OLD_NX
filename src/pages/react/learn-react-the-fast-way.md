---
title: Learn React the fast way
date: 2018-10-04
subtitle: So you’re looking to learn React, Redux and GraphQL quickly in order to become a sought after front-end engineer?
author: richard
imageUrl: https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcoding_learning_curve.png?alt=media
order: 7
---

The good news is that learning React fundamentals is achievable quite quickly (assuming you’re already a developer). There are two critical factors that will basically determine how fast you become a good React developer:

1. Motivation

2. Methodology

I’m sure you’re highly motivated ;-) so with that said, let’s lay out what we at React GraphQL Academy believe is the fastest path to success in learning and mastering the ecosystem.

### Learn iteratively, one step at a time! <a name="learn-iteratively"></a>

Part of the problem with modern web development is there are many things to learn and people tend to try and tackle them all simultaneously. While this is maybe possible for the talented few, for most people it tends to lead to frustration and in some cases giving up completely.

### Step 0: Learn modern JavaScript <a name="learn-modern-js"></a>

React is written in JavaScript! Without being competent in modern JavaScript you’ll struggle when learning React and what you may think of as a "React problem" will often actually be a JavaScript problem. There is a tendency to just learn a library or framework and expect that the language just kind of _comes along for the ride_, in the case of the React Ecosystem you’ll want to avoid this as it is not an opinionated framework (it’s a library), and unlike other JS libraries it puts you very much in the driving seat.

These are what we consider the crucial parts of modern JavaScript you’ll want to read up on before jumping into React:

- Variable declarations with let and const - take the time to understand block scoping vs function scoping

- Modular JavaScript using, Import / Export - Make sure you understand how to use default exports, named exports etc and their companion imports.

- Array destructuring - understand how array destructuring syntax works and how you can use it to avoid array mutations

- Object destructuring - understand the syntax and then take the time to both look at and experiment with how destructuring from within the parameters of a function works.

- Arrow functions - understand the differences between arrow functions and the old ES5 syntax, in particular, the fact that arrow functions get their "this value" from the context

- Class syntax - understand that this is just a syntax that uses prototypical inheritance under the hood.

- Class properties syntax - understand how to write methods on a class

### Step 0.5: Become familiar with NPM or Yarn <a name="npm-yarn"></a>

Luckily learning how to use a package manager is not hard, and if you’re already a developer (or learning to be), you have probably already covered this step. That said, it’s worth taking the time to make sure you understand how to install packages in the correct location (dev or production dependencies), and how to make your life easier and save some typing by adding your own scripts to your package.json file.

### Step 1: Learn basic React <a name="basic-react"></a>

Start right at the beginning and build up, probably the best place to start is [free code camps React challenges](https://learn.freecodecamp.org/front-end-libraries/react/) as they take this exact approach!

Next, use the [create-react-app](https://github.com/facebook/create-react-app) to spin up your own react app and play with what you learned. Create React App is a great way to start a new project without initially worrying about configuration, for this stage of your React journey (and beyond), it’s the perfect way to get up and running fast and reduce time to coding 😎

### Step 2: Lean how to <a href="/react/introduction-to-thinking-in-react/">think in React</a> <a name="think-in-react"></a>

This is a crucial step as React is a paradigm shift in the way you write your front-end code, you’ll need to understand the difference between the _declarative_ and _imperative_ style of coding and then understand the concept of state and the reasons of why a component based
architecture is a great solution.

I would highly recommend starting with [this article](/react/introduction-to-thinking-in-react/).

With that covered, I recommend starting by refactoring some code in an already existing codebase to re-enforce this. Here is the one we do in our workshops ;-) Just follow the README! [https://github.com/reactgraphqlacademy/thinking-in-react](https://github.com/reactgraphqlacademy/thinking-in-react)

### Step 3: Learn how to use React Router <a name="react-router"></a>

You’ll probably want the ability for users to move between different pages in your application using browser navigation, and for this you’ll need to use [React Router](https://reacttraining.com/react-router/core/guides/philosophy). As React is not an opinionated library, this router doesn’t come installed out of the box, but it’s a crucial part of the tool-kit and is essential to understand fully. Learning routing is a step that builds directly upon the first step and follows the same declarative principle:

[Learn about getting started with React Router with step by step instructions.](https://medium.com/leanjs/declarative-routing-with-react-router-v4-7419c198e93f)

### Step 4: Learn forms, authentication and data fetching <a name="forms-auth"></a>

It’s very important to understand how forms work in React and in particular the difference between [controlled and uncontrolled components](/react/react-forms-controlled-and-uncontrolled-components/). This is something that will come up again and again in your React journey and it’s important to take the time to understand the concept properly. I recommend starting by reading the docs (above) and then moving swiftly into code, either by setting up and playing with your own forms or have a play with this [sandbox](https://codesandbox.io/s/rj58p6v6n4).

For [authentication](/react/secure-react-apps-using-JWT-and-react-router#authentication-vs-authorization), we recommend starting with [JWT](/blog/secure-react-apps-using-JWT-and-react-router#jwt) as it’s a standard and it’s stateless :-)

To do data fetching in React, you can now use the well supported [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) directly. You’ll want to do your data fetching inside your componentDidMount() [lifecycle method](https://reactjs.org/docs/state-and-lifecycle.html).

### Step 5: Build and deploy a few React apps <a name="build-and-deploy"></a>

At this stage you now have learned all the fundamentals that you know in order to build basic applications so it’s time to practice! I highly recommend building an application that consumes some data from an API, you can implement basic routing in order to give a _list view_ and _detail view_ and then you can add some forms and login to practice those parts. If you’d like some inspiration and a scaffold, [there’s one here](https://github.com/reactgraphqlacademy/fb-messenger/tree/recap1)! I’m sure you can think of a few other fun ones to make tho, what about using a weather api, or the [Rick and Morty api](https://rickandmortyapi.com/) ?? So many options 😁

<marketingcard text="🎉🎉 New course - GraphQL Bootcamp! 🎉🎉" to="/graphql/training/bootcamp/" button-text="Learn GraphQL"></marketingcard>

### Step 6 and beyond <a name="beyond"></a>

If you get to this stage you are in good shape to start looking at some of the other tools in the React ecosystem such as Redux and GraphQL. What you may find at this stage in your journey is that the amount of resources start to dry up a bit, as with learning anything in programming it tends to follow this well known graph:

<img placeholder-height="368px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcoding_learning_curve.png?alt=media" alt="Coding learning curve"></img>

### How to tackle this <a name="how-to-tackle-this"></a>

In one word, persistence. Of course there is another option here, which is to join us at one of our [React bootcamps and advanced trainings](/react/training/bootcamp/) 😉

Coming back to the advice at the beginning though, take it one step at a time. There is a lot to learn and trying to do it all at once in a non-structured way will be harder. When it comes to the tooling in the React ecosystem, it is very extensive. When assessing whether to learn and use a new tool, the first step is to understand why you may need it. In the case of both Redux and GraphQL this is incredibly important. It’s not worth trying to learn Redux if you don’t understand the problem it’s solving, for example, did you know that the GraphQL apollo client solves a lot of the same problems? As does the new context API in React itself.

The point is, take it one step at a time, learn things on a need-to-know basis and keep pushing forward. If you have focused on the fundamentals outlined here, you’ll be in good shape to learn and implement any other tooling. With practice and persistence though, you’ll be able to build anything you can imagine 😎
