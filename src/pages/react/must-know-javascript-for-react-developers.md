---
title: Must know JavaScript for React developers
date: 2019-02-24
subtitle: Understanding ES6 key features for React is crucial to rapidly learning the React ecosystem
author: richard
imageUrl: https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fes6%2Freact_code_laptop.jpg?alt=media
order: 7
---

React is written in JavaScript (JS), and not just any JS, modern JS.

At React GraphQL Academy the thing that we often see students struggling with most is understanding the syntax of modern JS and applying it correctly in the context of React, often times what may seem like an "Understanding React issue" is actually a misconception about JS. So let’s take a look at the **essential JS features all React devs should know**.

## ES = ECMAScript

First up, there’s more than one way to refer to JavaScript! When people say "ES5, ES6, ES7 etc" they are referring to a standard called ECMAScript which JavaScript is based on. Why the weird name? It’s a long story involving the Swiss, let’s move on as it’s not important 😆

The important thing to know is that ES6 is the addition number and [ECMAScript 2015 ](https://www.ecma-international.org/ecma-262/6.0/)

is the specification. So just to confuse things you may hear people refer to it either way but the most common way is to use the addition number.

### Why is ES6 so important?

Basically it was a very big update when it was released, between 2009 and 2015 there was not much change in the language. After ES6 the language is now being incrementally updated every year so we have ES7, ES8, ES9 (currently). The subsequent updates though are much smaller so the vast majority of things you need to be familiar with were things that became standardized with ES6:

ES5 < 2015 (from 2009)

ES6 = 2015

ES7 = 2016 (small update)

ES8 = 2017

ES9 = 2018

ESNEXT > 2018

What is ESNEXT? It’s the future, everything that is not in a current release and is a proposal (at whatever stage) is referred to as ESNEXT.

What version should React developers use??

![image of babel logo](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fes6%2Fimage_0.jpg?alt=media)

Babel is a transpiler for JavaScript. This means going from one version of the language to another version (unlike a compiler where you change language). We use babel as JavaScript is an evolving language, not all of the newest updates are supported, both by browsers (client-side) and node (server-side). If you’d like to understand how babel works and watch it work it’s magic, check out this quick session: [https://github.com/reactgraphqlacademy/babel-exercise#babel-exercise](https://github.com/reactgraphqlacademy/babel-exercise#babel-exercise)

You see the point? If you didn’t do it no problem as this is normally a configuration step and is done for you if you are using create- react-app to spin up a React project. However, we do recommend understanding how it works as babel is an essential piece of the mix for React apps:

![ingredients of a react app, es6, react, webpack, babel](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fes6%2Fimage_1.png?alt=media)

## Let’s look at some ES6 must know features

### Let & Const

In older JavaScript when we declared a new variable we used var. ES6 introduced two new ways to declare variables, let and const.

The two key reasons that it’s good to use these new variable declarations are:

1. Let and const can only be declared once in the same scope

2. Let and const are block scoped

![image of if statement with block scoped variable](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fes6%2Fimage_2.png?alt=media)

Simply put, scope is where something is available. In the example above where is c available? Inside the { } This is a block. What about if we used var here? Then c would be available in the global scope. It’s also important to remember that JavaScript is function scoped, meaning is there was a function in the code above and we used var, it’d be available inside that function.

This feature is great as it stops our variables "leaking" into the global scope.

### Should I use let or const?

Two things to bear in mind:

- Const cannot be updated but let is made to be updated

- Const is not immutable

If you are declaring a variable and are not going to mutate it, use const. Otherwise use let. This is the standard usage in an up-to-date React project.

The console will throw an error if you mutate const. That said, const is not fully immutable (like in other languages) since you can declare an array with const and then mutate that array by using array.prototype.push for example, so you should be aware of this. When declaring a variable with const you are signalling you are not planning on mutating it (hence the name), in JS we don’t have out of the box immutability so we are responsible for that!

### Arrow functions

There are three main advantages to arrow functions:

1. They are more concise

2. They allow for implicit returns

3. They get their "this" value from the context, this means it keeps the context from where it is defined

An implicit return means you don’t have to write the return keyword:

![es6 arrow function with implicit return](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fes6%2Fimage_3.png?alt=media)

In this example we are using the implicit return in the function passed to array.prototype.map

You could also do this:

![es6 arrow function with explicit return](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fes6%2Fimage_4.png?alt=media)

If you are writing an inner function or declaring a variable inside your function you’ll want to take this approach. This is why the implicit return is also known as a _one-liner syntax_ as generally you’ll use it on one line to make the code more concise.

Probably the most important thing to know about arrow functions is that they **get their binding from the context.** This means their `this` value is going to point to whoever is the caller. We recommend looking at this example to help understand this:

[https://jsbin.com/caxuceg/edit?html,js,console](https://jsbin.com/caxuceg/edit?html,js,console)

Also, we previously wrote a more in-depth article on arrow functions, I do recommend it 😉

[JavaScript: The beauty of arrow functions](https://medium.com/leanjs/javascript-the-beauty-of-arrow-functions-2970efe5b4db)

### Destructuring

Destructuring allows us to extract values from arrays and objects and store them in variables with a more convenient syntax.

You can destructure arrays:

![example of array destructuring in JS](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fes6%2Fimage_5.png?alt=media)

And also objects:

![example of object destructuring in JS](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fes6%2Fimage_6.png?alt=media)

The most important thing to remember when first getting started is that **everything to the left of the `=`is destructuring syntax and everything to the right is the object or array being destructured**. So in the example above, we assign two variables, leanjs and reactgraphqlacademy from the object at the nested point of apiData.links.websites

So the values of those newly declared variables will be equal to the values of the key’s (the two urls). Another way of declaring and assigning the variable leanjs would be:

`const leanjs = apiData.links.websites.leanjs`

This is a convenient way to assign variables. With ES6 we can also assign variables in this way directly inside function parameters if you know the keys of the object passed in, this is very common in React:

![react components with props, one with optional destructuring the the parameters](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fes6%2Fimage_7.png?alt=media)

### Default params, rest, and spread

You can assign default values to function parameters using "=", for example:

`const getArea = (x=400, y=500) => x*y`

Try it out here: [https://jsbin.com/kederum/3/edit?js,console](https://jsbin.com/kederum/3/edit?js,console)

We can rename variables when destructuring using ":" and assign a new name. At React GraphQL Academy we like to ask people this head scratcher that combines a few of these concepts togther:

`const { w: width = 400, h: height = 500 } = { w: 800 }`

What are the variables and what are their values here?

Have a look for yourself if you’re struggling: [https://jsbin.com/kederum/7/edit?js,console](https://jsbin.com/kederum/7/edit?js,console)

In reality you’re not likely to see code like this as it’s confusing (not a great quality for code), but it’s interesting to think about what’s going on and why 🤔

### The spread operator

This allows us to "spread" a set of values from a data structure inside another data structure:

![example of ES6 spread operator with arrays](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fes6%2Fimage_8.png?alt=media)

In this case we have declared a new array called `allLanguages` which is the result of _spreading_ the values of `languages` and `dsl`. This is incredibly useful for helping us to avoid mutations, and it works the same way with objects, consider the following:

![example of using spread operator to avoid mutations with objects in ES6](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fes6%2Fimage_9.png?alt=media)

By using spread on line 8 we avoid mutating. Why is this useful? In a nutshell state mutations make it incredibly hard to keep track of values at a given time, we recommend reading what the React docs say on [the power of not mutating data](https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data).

### The rest operator

The rest operator has similar syntax to spread but does the opposite. It allows us to pass an indefinite amount of arguments:

![example of the rest operator in ES6 with arrays](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fes6%2Fimage_10.png?alt=media)

In this example we are doing some array destructuring, what value do you think additionalInfo is?

_It’s an array of the REST of the values_

When used with destructuring, the rest operator will scope up the rest of the values. The rest operator must of course always be used last, otherwise we could simply assign the values.

Here’s an example of how we commonly use the rest operator in React along with some destructuring in the parameters:

![example of a react component with parameter destructuring and rest operator for props](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fes6%2Fimage_11.png?alt=media)

### The class syntax

There are two very important points to bear in mind with classes in JS.

1. It’s a syntax that makes JavaScript more like other languages

2. Under the hood however JS is doing [prototypical inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) so classes are just syntactic sugar

Why was this introduced? Basically to make JS more approachable to developers from and object oriented background. Classes were at the time of the ES6 release and are still currently a somewhat contentious topic in JS as they are obfuscating what’s actually happening.

Consider the following code:

![Basic example of class syntax in JS with constuctor and super](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fes6%2Fimage_12.png?alt=media)

This should look familiar if you’ve used an OOP language before. We have a constructor which is called upon instantiation of the class, we can write class variables, and we can define class methods. Simple stuff I hope 😎

However, be aware that what’s happening under the hood in JS is this:

![example of a class written with functions in es5 and prototypical inheritence](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fes6%2Fimage_13.png?alt=media)

As the MDN docs point out:

_"When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its."_

If you wanted to extend a class, you can now do this also with the class syntax as you can imagine. However, we won’t delve into that here as **when using React, you should never use inheritance beyond extending** `React.Component`

On that note, have you ever heard the phrase _favour composition over inheritance_? Well, [react is all about composition](https://reactgraphql.academy/react/react-is-all-about-composition-react-hooks-render-props-hocs/).

![image alt text](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fes6%2Fimage_14.png?alt=media)

If you’d like to get started writing React components using the class syntax, check out our article on [thinking in react](https://reactgraphql.academy/react/introduction-to-thinking-in-react/) and it’s[ exercise repo](https://github.com/reactgraphqlacademy/thinking-in-react).

<marketingcard text="🎉🎉 New course - GraphQL Bootcamp! 🎉🎉" to="/graphql/training/bootcamp/?utm_medium=direct&utm_source=blog&utm_campaign=graphql_exp" button-text="Learn GraphQL"></marketingcard>

### Template literals

Template literals, also called "string literals" are a great new way to use strings in our JS. Let’s consider the old way we used to do things:

`animal.name + ‘is a’ + animal.species`

Can you spot the error in the above code? There is a spacing issue! And that’s not something immediately obvious which demonstrates just how error prone this way of concatenating strings was. Now we can do this:

`` `${animal.name} is a ${animal.species}` ``

The key thing to know is that now we can use ` `` ` (back ticks) to create a string and then everything inside the `${ }` is JavaScript. This is incredibly useful as we can do things like this:

![es6 template literal used inside a map function](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fes6%2Fimage_15.png?alt=media)

The other key features of template literals are:

- We can use special characters without explicit escape

- New lines are preserved

- They accept expressions

### Modular JavaScript

Models are something that those coming from other languages should already be very familiar with. In JS they were only introduced in ES6 making them quite new! Modules help us to make our code more organized and easier to reason about. It also means that we are able to isolate our code by easily creating different scopes.

Before modules we used to do things like this:

![Example of an immediately invoked function](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fes6%2Fimage_16.png?alt=media)

Why? Here we are using the fact that JS is function scoped and writing and [immediately invoked function](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) in order to ensure that variables do not leak into the global scope. If this doesn’t make sense to you, no problem! Now we have modules so you won’t be using it!

Just as in other languages modules can be imported and exported, and there are a few ways of expressing these depending on the use case.

### Exports

When exporting, the most common thing to do is create a default export. This should be done at the bottom of your file and when working with React will be the way you export your components:

![example of using the default export syntax in JS](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fes6%2Fimage_17.png?alt=media)

Sometimes you may want to export multiple values from a modules, a good example of this is a utils file.

In this case you can either write the keyword export in-front of the function(s):

```
export function sumTwo(a, b) {
    return a + b
}
```

Alternatively you can declare your functions and export them at the bottom of the file with the named export syntax:

`export { sumTwo, sumThree }`

### Imports

When importing there are a few different options and we need to think about what exacty we want to import, is it the whole module? Is it a names export?

The most common case is importing the default export, in this case the name that we give the import does not actually matter, however it’s best not to change it to avoid confusion, so if you’re importing MyComponent then you should maintain the same name 😉

Here are all the options:

- Import the default export: `import test from './test';`

- Import the whole file: import `'./math';`

- Named imports: `import { sumTwo, sumThree } from './math';`

- Rename the imports:

```
import {
    sumTwo as addTwoNumbers,
    sumThree as sumThreeNumbers
} from 'math/addition';
```

- Import all: `import * as util from './math';`

- Import a list of values from a module:
  `const { sumTwo, sumThree } = util;`

- Importing a default export and named imports from our node_modules:
  `import React, { Component } from 'react';`

### Promises

What is a promise? Simply put, a promise is something that will happen in the future but maybe not immediately. It’s a way to help us handle asynchronous code such as network calls.

The most important thing you’ll need to do as a React developer is understand how to consume promises, why? Because when you call an api it’s going to return a promise. The easy way to know that something is a promise is that you can call .then() on it.

So you may do something like this:

![Example of using fetch to call an api and handling the promise to extract a sessionID](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fes6%2Fimage_18.png?alt=media)

So what’s happening here? First up we call an API using [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) (check out the link). That call returns a promise which we can call `then()` on. We then parse the response to json and that returns another promise where we can then extract the session. If something goes wrong, we use `catch()` to handle the error. You’ll need to be comfortable with consuming promises as a React developer so take your time and don’t forget to consult the docs: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

**So how do I write my own promise?**

Promises are global functions in modern JS and can be declared like this:

```
New Promise((resolve, reject) => {

…

resolve() or reject()

})
```

In the case of an API, in the resolve you would return the data itself and in the reject you would return an error object with a status. You probably won’t have to write your own promises but it’s worth understanding how to, as you will be working with them a lot.

A new feature was added in ES8 which builds on top of the idea of promises called [async await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await). This builds on top of promises and you can refactor in either direction, so it’s important to first understand the concept of promises before using this alternative syntax.

### That’s all for now!

Of course there are many more features in ES6 that were not covered here. This article does not aim to be exhaustive, but rather give you a good idea about what we consider to be the **most important ES6 features** you must know to use React well. When we see people struggling with JS on one of our [intensive react developer courses](https://reactgraphql.academy/react/training/bootcamp/) 99% of the time it’s something that was covered here. Of course, in order to get familiar with the language the only way is to practice! We recommend trying out some of [these exercises](https://github.com/reactgraphqlacademy/es6-exercise) to expand your understanding of ES6.

Looking forward to seeing you soon in a meetup or training ;-)
