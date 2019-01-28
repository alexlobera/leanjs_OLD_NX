---
title: Server-side rendering SSR <br /> made easy with React
date: 2019-01-27
subtitle: Server-side rendering (SSR) can improve significantly the user experience of you web app. Luckly React has built in SSR support.
author: alex
imageUrl: https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fstyling%2Fstyling.jpeg?alt=media
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
- --SEO-- Not anymore
- Social metas

## Implementing SSR in React

### React

### Routing

### Styling

### Data fetching

### Code splitting

## Configuration

### Frameworks

### Create React App configuration

### react-scripts-ssr

## SSR and PWA
