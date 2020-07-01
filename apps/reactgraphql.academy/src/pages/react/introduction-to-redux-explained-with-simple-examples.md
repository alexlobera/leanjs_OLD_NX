---
contentType: blog
title: Introduction to Redux
date: 2018-10-04
subtitle: From Redux for dummies to building Redux from scratch
author: alex-lobera
imageUrl: https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fredux%2Fone-way-min.jpeg?alt=media
order: 6
tags: ['redux', 'beginner']
---

There is a fundamental question you should know how to respond before learning Redux, the question is: What is the state of an app?

Let’s try to answer that question with plain English, let’s not think of React or Redux for a moment, all in all, any app has state regardless of the technology. To help us understand what the state of an app is, we are going to ask two simple questions:

- Is the selected tab in the following image of an application part of the state?
- Is the data that makes the chart (which probably comes from an API) part of the state of the app?

<img placeholder-height="px" alt="What is the state of an app?" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fredux%2Fwhats-state-of-app-min.png?alt=media"></img>

In my experience teaching Redux at [reactgraphql.academy](https://reactgraphql.academy/) I’ve found cases where everyone in a workshop seemed to agree that just the selected tab is part of the state, and in other workshops, everyone seemed to agree that the only thing that was part of the state was the data that came from the API 😲

It might be obvious to you, or it might not, but I always find very useful to make sure we are all on the same "state" before moving forward.

To answer the two previous questions, imagine that when a user runs the app shown above, by default the selected tab is “Day”. When the user selects “month” then the app requests the data for a given month to an API and displays the new chart. Now if we tell the user that if she/ he switches to another app, and when she/ he comes back the app will be in the same “state”, what do you think the user expects to see? The answer is tab selected equals month and the corresponding chart. So the answer to the original question is both, tab and chart, are part of the state.

Traditionally, in front-end, we would store the selected tab using metadata in the UI (example an “active” CSS class, or a “data-” attribute), and the data from the API in a JavaScript variable. That’s problematic because we are storing the state in two very different places, HTML for the active item and JS for the data of the items. That’s a bad idea in a declarative paradigm like the one React embraces (check [this link to learn more about React and the declarative paradigm](/react/introduction-to-thinking-in-react/)).

<img placeholder-height="px" alt="State stored on the UI" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fredux%2Fui-state-min.png?alt=media"></img>

## What is Redux? Imagine Redux was a box

<img placeholder-height="px" alt="Redux represented as a box" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fredux%2Fthe-box-min.png?alt=media"></img>

Any questions? Hopefully, it was simple enough. Let’s zoom in more to look at the different things the box can do for us.

## Redux principles

### First principle

The whole state of the application is represented in a single JS object, called the state tree.

### Second principle

The state tree is read-only. The only way to change the state tree is by dispatching an action.

- An action is a JavaScript object that describes the minimal representation of the change of state
- Any data that gets into the state gets there via actions.
- The action (JS object) requires a property called type. Example:
  `{ type: RECEIVE_THREAD }`

### Third Principle

Wait a moment, before talking about the 3rd principle, we need to understand what we’re referring to when talking about pure functions:

#### Pure functions <a name="pure-functions"></a>

- The value a pure function returns depends solely on the value of the input parameters.
- Every time you call a pure function with the same set of arguments they produce the same result
- Pure functions don’t modify the input parameters. In other words, they don’t mutate the arguments.
- Pure functions don’t have side effects

OK now we are ready, the **third principle**:

#### Redux reducer <a name="redux-reducer"></a>

The state mutations in your app need to be described as a pure function called **reducer** that takes the current state and an action and returns a new state:

<img placeholder-height="px" alt="Reducer function signature" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fredux%2Freducer-function-min.png?alt=media"></img>

A reducer has 3 responsibilities:

- Set the default state.
- Handle an action if the received action is relevant to the reducer. By handling an action I mean checking the action type and computing a new state if the action type is a concern of the reducer. This is very important because in a real-world application there are many reducers, and every time an action is dispatched all the reducers are invoked and receive that action.
- Return the current state if the action is not relevant to the reducer. This is important because every time an action is dispatched, Redux will update the current state with the output of the reducer. So if the reducer does not return anything then the current state will become undefined.

The following CodeSandbox is a reducer that implements a counter. The state is an integer that can be incremented or decremented

<codesandbox id="vvyq825z23"></codesandbox>

## Redux store

It glues the 3 principles together. You can think of the store as the previous “box” example.

- When you create it, you specify the reducer/s
- It lets you dispatch actions
- It holds the state of the application

The store is a JavaScript object that implements 3 methods:

- getState
- dispatch
- subscribe

### You could implement the Redux store with 20 lines of code

This is a simplified version of Redux, and although it works there are optimizations that have been removed for simplicity.

```runkit
const createStore = reducer => {
  let state = reducer(undefined, { type: "@INIT" });
  let listeners = [];

  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action); // line 8
    listeners.forEach(listener => listener());
  };

  const subscribe = listener => {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter(item => item !== listener);
    };
  };

  return { getState, dispatch, subscribe };
};

const reducer = (state = 1, action) => state + 1
console.log(createStore(reducer).getState())
```

On line 8 of the gist above you can see why a reducer must always return some state. As we mentioned earlier, every time an action is dispatched all the reducers are invoked and receive that action. If the action type is not relevant to the reducer, the reducer must return the current state otherwise the state in the store will become undefined (line 8).

You can see a working example of our simplified version of Redux in the following CodeSandbox

<codesandbox id="00o0lr67lp"></codesandbox>

## Combining reducers

Wait, so far all the examples use one reducer, but I said that real-world applications have many reducers; would our simplified Redux work in a real-world application with many reducers? The answer is yes.

That’s one of the things that makes Redux so powerful, every piece of the puzzle works in isolation. If we have many reducers we don’t have to change our Redux implementation to receive many reducers. We just need to combine all our reducers into one. That combined reducer is the parameter of the createStore.

So how do we combine all the reducers? we just need to add another piece to the puzzle, a combineReducers function:

```
// The combineReducers is the other piece along with createStore you will use to
// implement Redux in your application. The combineReducers will combine all the
// reducers into one and then you'll pass it to createStore.
// Check this video to see an in detail explanation of how it works:
// https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch

export const combineReducers = (reducers) => {
  return (state = {}, action) => {
    // for every reducer (don't confuse our "reducer" functions with the
    // array.reduce method we are using below) we combine the state that every
    // reducer returns
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](
          state[key],
          action
        )
        return nextState
      },
      {}
    )
  }
}
```

One of the two co-authors of Redux, Dan Abramov, explains the combineReducers function step by step in [this video](https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch)

In the next Codesandbox we are our previous createStore function with the combineReducers to combine two reducers:

<codesandbox id="j2r609z399"></codesandbox>

## Redux is UI library agnostic

Redux can manage the state of any application, not just React. You can see this in the previous CodeSandbox example where Redux is used in a Vanilla web application, there is no React.

<marketingcard text="🎉 New Remote GraphQL Training! 🎉" to="/graphql/training/part-time/remote/" button-text="Learn GraphQL"></marketingcard>

## Common misconceptions about React and Redux

- Both React and Redux are one-way data flow. Check this link to [learn more about React and the one-way-data-flow](/react/introduction-to-thinking-in-react/).
- Both React and Redux should have a “unique source of truth”. “Unique source of truth” doesn’t mean having all the state in a single store, it means there is only one place/ variable that stores a value. A mistake I’ve seen few times is to store some data that is in the URL (e.g. an ID, username, etc) into the state of a React component or in Redux, by doing so you’ll end up with two sources of truth — that’s also a big source of bugs. Another example, Redux doesn’t stop you from storing the same value in two different reducers, for instance, a “user” reducer could have state.cart = […] and a checkout reducer state.cart = […]. Which cart is the one?
- Mutations. Not mutating the state is very useful, but those ideas also exist in React, and it’s explained in the [official React documentation](https://facebook.github.io/react/docs/optimizing-performance.html#the-power-of-not-mutating-data).

## Recap

- Redux organises the state of your app in a single place (called store), making it much easier to manage and to reason about the state.
- The store glues the 3 Redux principles together and implements 3 functions: getState, dispatch, and subscribe.
- In Redux you are in charge of writing the code that updates the state, called reducers. One of the criticisms about Redux is that you end up writing a lot of code. On the other hand, it makes it very explicit how the state is changed, making it very easy to reason about it.
- In a real-world application, we’ll have many reducers which we can combine into a single reducer. Notice that the Redux store is a tree, and so we can combine reducers multiple times down the tree.
- Every time an action is dispatched, all the reducers are invoked and receive that action.
- Redux is UI library agnostic and so it can be used in Vanilla JavaScript, React or any other UI library.

## Further learning

I recommend watching the following videos from Dan Abramov, co-author of Redux, which explain Redux in more detail [https://egghead.io/courses/getting-started-with-redux](https://egghead.io/courses/getting-started-with-redux)
