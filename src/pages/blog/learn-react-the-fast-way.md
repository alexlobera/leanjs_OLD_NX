---
title: Learn React the fast way
subtitle: So you’re looking to learn React, Redux and GraphQL quickly in order to become a sought after front-end engineer?
---

The good news is that learning React fundamentals is achievable quite quickly (assuming you’re already a developer). There are two critical factors that will basically determine how fast you become a good React developer:

1. Motivation

2. Methodology

I’m sure you’re highly motivated ;-) so with that said, let’s lay out what we at ReactJS Academy believe is the fastest path to success in learning and mastering the ecosystem.

### Learn iteratively, one step at a time!

Part of the problem with modern web development is there are many things to learn and people tend to try and tackle them all simultaneously. While this is maybe possible for the talented few, for most people it tends to lead to frustration and in some cases giving up completely.

### Step 0: Learn modern JavaScript

React is written in JavaScript! Without being competent in modern JavaScript you’ll struggle when learning React and what you may think of as a "React problem" will often actually be a JavaScript problem. There is a tendency to just learn a library or framework and expect that the language just kind of _comes along for the ride_, in the case of the React Ecosystem you’ll want to avoid this as it is not an opinionated framework (it’s a library), and unlike other JS libraries it puts you very much in the driving seat.

These are what we consider the crucial parts of modern JavaScript you’ll want to read up on before jumping into React:

- Variable declarations with let and const - take the time to understand block scoping vs function scoping

- Modular JavaScript using, Import / Export - Make sure you understand how to use default exports, named exports etc and their companion imports.

- Array destructuring - understand how array destructuring syntax works and how you can use it to avoid array mutations

- Object destructuring - understand the syntax and then take the time to both look at and experiment with how destructuring from within the parameters of a function works.

- Arrow functions - understand the differences between arrow functions and the old ES5 syntax, in particular, the fact that arrow functions get their "this value" from the context

- Class syntax - understand that this is just a syntax that uses prototypical inheritance under the hood.

- Class properties syntax - understand how to write methods on a class

### Step 0.5: Become familiar with NPM or Yarn

Luckily learning how to use a package manager is not hard, and if you’re already a developer (or learning to be), you have probably already covered this step. That said, it’s worth taking the time to make sure you understand how to install packages in the correct location (dev or production dependencies), and how to make your life easier and save some typing by adding your own scripts to your package.json file.

### Step 1: Learn basic React

Start right at the beginning and build up, probably the best place to start is [free code camps React challenges](https://learn.freecodecamp.org/front-end-libraries/react/) as they take this exact approach!

Next, use the [create-react-app](https://github.com/facebook/create-react-app) to spin up your own react app and play with what you learned. Create React App is a great way to start a new project without initially worrying about configuration, for this stage of your React journey (and beyond), it’s the perfect way to get up and running fast and reduce time to coding 😎

### Step 2: Lean how to think in React

This is a crucial step as React is a paradigm shift from in the way you write your front-end code, you’ll need to understand the difference between the *declarative *and *imperative *style of coding and then understand the concept of state and the reasons of why a component based
architecture is a great solution.

I would highly recommend starting with [this article](https://medium.com/leanjs/introduction-to-react-3000e9cbcd26).

With that covered, I recommend starting by refactoring some code in an already existing codebase to re-enforce this. Here is the one we do in our workshops ;-) Just follow the README! [https://github.com/leanjscom/thinking-in-react](https://github.com/leanjscom/thinking-in-react)

### Step 3: Learn how to use React Router

You’ll probably want the ability for users to move between different pages in your application using browser navigation, and for this you’ll need to use [React Router](https://reacttraining.com/react-router/core/guides/philosophy). As React is not an opinionated library, this router doesn’t come installed out of the box, but it’s a crucial part of the tool-kit and is crucial to understand fully. Learning routing is a step that builds directly upon the first step and now follows the same declarative principle:

[Learn about getting started with React Router with step by step instructions.](https://medium.com/leanjs/declarative-routing-with-react-router-v4-7419c198e93f)

### Step 4: Learn forms, authentication and data fetching

It’s very important to understand how forms work in React and in particular the difference between [controlled and uncontrolled components](https://reactjs.org/docs/uncontrolled-components.html). This is something that will come up again and again in your React journey and it’s important to take the time to understand the concept properly. I recommend starting by reading the docs (above) and then moving swiftly into code, either by setting up and playing with your own forms or have a play with this [sandbox](https://codesandbox.io/s/rj58p6v6n4).

For authentication, we recommend starting with [JWT](https://jwt.io/) as it’s a standard and it’s stateless :-)

To do data fetching in React, you can now use the well supported [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) directly. You’ll want to do your data fetching inside your componentDidMount() [lifecycle method](https://reactjs.org/docs/state-and-lifecycle.html).

### Step 5: Build and deploy a few React apps

At this stage you now have learned all the fundamentals that you know in order to build basic applications so it’s time to practice! I highly recommend building an application that consumes some data from an API, you can implement basic routing in order to give a _list view_ and _detail view_ and then you can add some forms and login to practice those parts. If you’d like some inspiration and a scaffold, [there’s one here](https://github.com/leanjscom/fb-messenger/tree/recap1)! I’m sure you can think of a few other fun ones to make tho, what about using a weather api, or the [Rick and Morty api](https://rickandmortyapi.com/) ?? So many options 😁

### Step 6 and beyond

If you get to this stage you are in good shape to start looking at some of the other tools in the React ecosystem such as Redux and GraphQL. What you may find at this stage in your journey is that the amount of resources start to dry up a bit, as with learning anything in programming it tends to follow this well known graph:

![Coding learning curve](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcoding_learning_curve.png?alt=media)

### How to tackle this

In one word, persistence. Of course there is another option here, which is to join us at one of our [React bootcamps and advanced trainings](https://reactjs.academy/react-redux-graphql-bootcamp/) 😉

Coming back to the advice at the beginning though, take it one step at a time. There is a lot to learn and trying to do it all at once in a non-structured way will be harder. When it comes to the tooling in the React ecosystem, it is very extensive. When assessing whether to learn and use a new tool, the first step is to understand why you may need it. In the case of both Redux and GraphQL this is incredibly important. It’s not worth trying to learn Redux if you don’t understand the problem it’s solving, for example, did you know that the GraphQL apollo client solves a lot of the same problems? As does the new context API in React itself.

The point is, take it one step at a time, learn things on a need-to-know basis and keep pushing forward. If you have focused on the fundamentals outlined here, you’ll be in good shape to learn and implement any other tooling. With practice and persistence though, you’ll be able to build anything you can imagine 😎
