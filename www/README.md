[![CircleCI](https://circleci.com/gh/reactgraphqlacademy/reactgraphqlacademy.svg?style=svg)](https://circleci.com/gh/reactgraphqlacademy/reactgraphqlacademy)

# React GraphQL Academy website

## Install

Clone the root repository to your local machine and run from the root repository:

```sh
yarn bootstrap
```

### We have several scripts in place:

- To run the site, use `npm run start` from the root repository. It will build the dependencies from the packages folder before starting the website.
- To run the tests first you need to build the design system packages. To do that run `npm build:packages` from the root repository. Then use `npm run test` or `npm run testw` for watch mode from this repository
- To generate a code coverage report use `npm run coverage` from this repository
- To run storybook to visually see the components, use `npm run storybook` from this repository

There are a few other scripts in the package.json that are used for formatting via [prettier](https://prettier.io/) and to spin up production builds of the site, please refer to the [gatsby docs](https://v1.gatsbyjs.org/) for further reading on the later.

## Our Testing

We use [Jest](https://jestjs.io/) for testing. As the site is content heavy, we use snapshot tests for parts with little or no logic and write full unit and integration tests for mission critical parts such as `src/components/payment/payment.test.js`

## Our Deploy and Hosting

We use [Google's firebase platform](https://firebase.google.com/) for hosting the site. There is a generous free layer and so the site does not cost anything to host. This also allows for the rapid addition of features that you need a backend for (such as contact forms etc), for which we use [cloud functions](https://firebase.google.com/products/functions/).
