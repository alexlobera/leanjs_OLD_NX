---
contentType: blog
title: What's the difference between React & React Native?
date: 2018-11-07
subtitle: If you’re new to React, it won’t be long before you come across React Native.
author: horacio
imageUrl: https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Freact-native-differences%2FreactNative_differences2.jpg?alt=media
authorTwitter: hhg2288
order: 15
---

The two share a lot in common, but you’re going to want to take a minute before you dive in and create your first React Native app. There are important differences between React and React Native you need to know about!

### Reminder: What is ReactJS?

To start off, let’s make sure you’re up to speed on what ReactJS is. React is a JavaScript library used to create user interfaces (UI) in a predictable and declarative way. It allows you to build UI component hierarchies with support for both front-end and server-side. It’s an efficient tool that saves you time and money on development.

You can find out more about React in our blog: [Introduction to thinking in React](https://reactgraphql.academy/react/introduction-to-thinking-in-react/).

### What is React Native?

React Native is a little different. First introduced in 2015, React Native gave developers the chance to build native mobile apps using JavaScript. This was great because it meant any front-end developer could, in theory, develop mobile apps too.

One of its greatest features, however, is the ‘Learn once, write anywhere’ principle. This means you don’t have to learn several technologies to develop apps across platforms. You can re-use a lot of the same code to develop an app in both iOS and Android, for instance.

<iframe width="560" height="315" src="https://www.youtube.com/embed/2IC0rXKfchU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_Enjoying this blog? Check out our accompanying video, presented by our React Native guru [Horacio Herrera](https://reactgraphql.academy/about-us/#horacio-herrera)._

### How does React Native work?

React Native is a framework, not a library like React, and the differences don’t stop there. While React uses a DOM, React Native does not. It also requires a range of different tools to make the UI work on a native platform, which we’ll cover in more detail below when we compare tools between React and React Native.

The other thing you need to know is that React Native works in two threads: the JavaScript thread and the native UI thread. React Native uses a bridge between React and the native UI, translating JavaScript into native components that can be easily rendered.

React Native uses utilities like Stylesheet, Dimension and AsyncStorage to retrieve information from the native device so it knows how to render the UI. In particular, the Platform utility is used to tell which platform is targeted so you can change the interface to suit the user’s needs better.

<img placeholder-height="259px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Freact-native-differences%2FreactNative_eventBridge.jpg?alt=media" alt="The threads and event bridge in React Native and Android"></img>

### Who uses React Native?

Needless to say, React Native has a lot of business potential. The likes of Facebook, Instagram, Skype, Wallmart, Tesla, and more all use it. That’s because React Native:

- Renders components using native APIs that improve performance

- Allows developers to re-use large amounts of code so they don’t have build the same app several times for different platforms

- Utilises a component-based structure so developers can build apps in an agile way

### React vs React Native

In React, you need to account for HTML and the DOM. So when you code, you’re going to use components like `<div>`, `<p>`, and `<input/>`. But React Native doesn’t use HTML or the DOM.

| HTML (React) | React Native   |
| ------------ | -------------- |
| `<div>`      | `<View>`       |
| `<p>`        | `<Text>`       |
| `<input/>`   | `<TextInput/>` |
| `<a>`        | `<Touchable/>` |
| `<button>`   | `<Button/>`    |

These differ from React in logical ways. The `<a>` command can’t be translated to a native mobile app because you don’t click on a smartphone, you touch, which is why you have the <Touchable/> component instead.

### How are React and React Native’s tools different?

It’s not just the code itself that’s different - the tools differ too, though they both harness JavaScript of course!

| HTML (React)          | React Native         |
| --------------------- | -------------------- |
| Browser               | Mobile/Simulators    |
| Webpack               | Metro bundler / Haul |
| React Chrome devtools | RN Chrome devtools   |
| Codesandbox           | snack                |
| Gatsby                | Expo / Ignite        |

### Learn React Native today

The likes of Facebook, Microsoft, Bloomberg, Wix and more are already benefitting from React Native, so there’s no better time than now to learn it too!

At React GraphQL Academy, you’ll find a range of courses to help you harness the power of React Native today. We train teams throughout Europe - find out more [here](https://reactgraphql.academy/react/training/workshops/)!

We’ll also be at [React Amsterdam this April](https://reactgraphql.academy/react/leanjs-react-amsterdam/)! If you’re there, sign up to our React Native workshop to get a kickstart in the field.
