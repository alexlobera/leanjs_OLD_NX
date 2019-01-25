---
title: Styling in React
date: 2019-01-25
subtitle: Styling apps is an important and sometimes underestimated task. Let's learn how to do it right following the React philosophy.
author: alex
imageUrl: https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fstyling%2Fstyling.jpeg?alt=media
order: 5
---

Let’s start by questioning some design principles that have dominated the way we’ve styled websites for the last few decades.

## Separation of concerns <a name="front-tend-old-school-separation-of-concerns"></a>

We are not going to question separation of concerns, we think it’s a great design principle. We are going to question the way we have interpreted it for many years in front-end applications. Hopefully, you’ll agree about the new angle from which we look at it.

The following image illustrates how we previously separated the concerns in the front-end:

<img placeholder-height="259px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fstyling%2Fseparation-of-concerns-min.png?alt=media" alt="Old separation of concerns approach in front-end development "></img>

One of the most amazing examples of this separation that I’ve seen is CSS Zen Garden. With various designs based on the **same HTML** and one stylesheet targeting the HTML elements, by applying **different CSS** to them, we can create completely different websites.

<img placeholder-height="376px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fstyling%2Fzen-garden-min.png?alt=media" alt="CSS Zen Garden"></img>

You can visit [http://www.csszengarden.com/](http://www.csszengarden.com/),check some designs, and compare the HTML of some. You’ll see that the only line that changes is the one that imports the CSS. Impressive from the CSS and HTML separation of concerns point of view.

## Global styles <a name="global-styles"></a>

One of the problems you might have with the previous way of separating concerns is maintainability of the code base. In the following example, you can see how a button is styled differently using rules based on sign-up, btn-facebook, chart-view, search, etc. The example is probably very extreme, but it makes the point.

<img placeholder-height="367px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fstyling%2Fcss-hell-min.png?alt=media" alt="CSS hell"></img>

## Choosing the right concern <a name="choosing-the-right-concern"></a>

Separating concerns is good, but we need to choose the right concerns. For many years the norm was to separate things based on some technical aspect, like CSS, JS, HTML, views, controllers, etc. In this “old” approach when you look at the source code of a project you see things like the following:

```
/src/css/index.css
/src/css/button.css
/src/css/alert.css
/src/css/…css
/src/views/alert.html
…
/src/controllers/alert.js
…
```

CSS, controllers, views, etc, are implementation details. If you think of the user or the business, they don’t use techie words like CSS, JS, etc, they say “checkout”, “message”, “button”, etc. These are the first concerns we should think of. Then, of course, each “message” or “button” will have different technical aspects depending on the implementation.

<img placeholder-height="230px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fstyling%2Falert-button-component-min.png?alt=media" alt="Button and Alert component with CSS co-located"></img>

As the following image illustrates we are still separating concerns, but we have given a **different angle** to the definition.

<img placeholder-height="347px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fstyling%2Fsep-concerns-diff-angle-min.png?alt=media" alt="Separation on concerns from a different angle"></img>

Change is the only constant, therefore it's good to [revise our concerns](#front-tend-old-school-separation-of-concerns) from time to time.

## create-react-app

If you have used [create-react-app](https://github.com/facebook/create-react-app) you’ve seen that it creates a separate file for App.js and for App.css, and for index.js and index.css. Do you think create-react-app promotes separating the concerns in a way that makes it easier to maintain our code?

<img placeholder-height="312px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fstyling%2Fcreate-react-app-min.png?alt=media" alt="Create React App css  approach"></img>

I think it does. It follows the co-location principle, it co-locates the JS and the CSS close together. Note, we also apply the co-location principle in React Router and GraphQL for instance.

So, are we done with styling? Well, there is another issue created by global styles. That folder structure separates the code by concern, but nothing stops us from creating an “active” class in Button.css, and an “active” class in Alert.css with different values. What do you think is going to happen if we have an active button and an active alert in the same view?

<img placeholder-height="298px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fstyling%2Fcollision-min.png?alt=media" alt="CSS collision"></img>

<img placeholder-height="247px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fstyling%2Fblue-or-orange-min.png?alt=media" alt="Blue button or orange button?"></img>

## Naming conventions

The solution to the style collision is to use naming conventions in our CSS classes. There are a few different popular conventions. The problem with naming conventions is that humans must implement them. That’s more work, and it’s error-prone.

<img placeholder-height="172px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fstyling%2Fnaming-conventions-min.png?alt=media" alt="CSS naming conventions"></img>

A better approach is to automate that CSS naming. You can use CSS modules for this:

<img placeholder-height="254px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fstyling%2Fcss-modules-min.png?alt=media" alt="CSS modules"></img>

[css-loader](https://github.com/webpack-contrib/css-loader) is the loader that makes CSS modules work. css-loader is installed and configured by default when using create-react-app.

## Styled-components <a name="styled-components"></a>

[Styled-components](https://www.styled-components.com/) is the library we use at [LeanJS](https://leanjs.com) (ReactJS Academy's parent company) to style our React components. Why? It's a single library that elegantly solves all the problems I’ve mentioned.

<img placeholder-height="329px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fstyling%2Fstyled-components-check-list-min.png?alt=media" alt="Styled-components features"></img>

The [documentation of styled-components](https://www.styled-components.com/docs) is great, very clear and with good examples. So there is not much we can add in this post that is not already well explained in the official docs.

### Conditional rendering <a name="conditional-rendering"></a>

However, let me point out one feature that is quite important and I don’t want you to miss if you are new to React. Styled-components, apart from solving all the problems we’ve mentioned, does something that SASS, LESS, BIM, SMACSS, and other approaches can’t do. Styled-components allows for conditional rendering. This means it can decide a style at render time based on some props. That’s very powerful and you should definitely leverage this feature.

The following image shows a button with conditional rendering based on a prop called “primary”. Depending on the value of “primary” it will render a different style.

```.jsx-inline
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ?
    "palevioletred" : "white"
  };
  color: ${props => props.primary ?
    "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

render(
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);
```

You can edit the previous code by removing 'primary' from the last button. Try it! The style will react and change the color.

### CSS optimization <a name="css-optimization"></a>

Another amazing feature you get from using styled-components is that it will only generate the CSS required for a given page. The way it works is the following, when React traverses the tree rendering components, styled-components adds to the head of the page the `<style>` tag containing only the CSS of the components that were rendered. This works very well on server-side rendering or static site generators like Gatsbyjs,so it optimizes the first page load by reducing the CSS load.

This website uses styled-components, so you can see an example of the CSS injected by looking at the `<head>` in the source code of this page.

<img placeholder-height="391px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fstyling%2Fstyled-components-head-min.png?alt=media" alt="styled-components head page"></img>

## Components everywhere <a name="components-everywhere"></a>

Everything on the UI can be a component (including the metas in the head! when we say everything it means everything :). Therefore you can define all your styles using styled-components. That means no need for SASS, LESS, or other CSS pre-processors.

You can see an example in the ReactJS Academy website, where **EVERYTHING is a component**:

- [Some basic components](https://github.com/reactjsacademy/reactjsacademy/tree/master/src/components/text)
- [Default page layout](https://github.com/reactjsacademy/reactjsacademy/blob/master/src/layouts/index.js)
- [Home page](https://github.com/reactjsacademy/reactjsacademy/blob/master/src/pages/index.js)

That being said, I often see that many developers new to React are used to the "old .css" and find it very difficult to only use component based styles. Some common cases they mention:

- They want font colours and sizes in SASS or LESS variables. If you use component based styles those colours, fonts, etc become [simple JavaScript variables](https://github.com/reactjsacademy/reactjsacademy/blob/master/src/config/styles.js).
- Styling "default/ generic" h1, h2, h3, h4, h5, h6, p…. No problem, they can also be [components](https://github.com/reactjsacademy/reactjsacademy/tree/master/src/components/text).
- Default paddings and margins. You can elegantly solve it by using [theming](https://github.com/reactjsacademy/reactjsacademy/blob/master/src/layouts/index.js#L24).

As you can see, in all those cases we can use a component, and so you can co-locate the style in that component. I know, it might not seem that obvious at the beginning, especially if you are very used to SASS, LESS, or “classic” CSS.

## Component libraries <a name="component-libraries"></a>

There are different libraries (AKA component toolkits) that you can use to speed up the development of a UI. What I mean by component library is a set of React components that follow some design system and provide an implementation for common UI patterns such as Text, Button, Dropdown, Tabs,Datapicker, etc.

These are some of the most popular component libraries in React:

- [MaterialUI](https://material-ui.com/)
- [SemanticUI](https://semantic-ui.com/)
- [Reactstrap (Bootstrap v4)](https://reactstrap.github.io/)
- [Antd](https://ant.design/)
- [Rebass](https://rebassjs.org/)

The component library that we use at [LeanJS](https://leanjs.com) when we want to speed up the development of a new React app is Rebass, here is why:

Rebass is based on styled-components. Since we use styled-components to build React apps, Rebass integrates very well with the rest of the style and optimizes bundle size. The other reason we use Rebass is because it's wonderfully designed. It's based on [styled-system](https://github.com/jxnblk/styled-system), an elegant responsive, theme-based style props for building design systems with React. Styled-system is part of our [advanced React training](/curriculum/?tab=advanced-react) and [bootcamp](https://reactjs.academy/curriculum/?tab=bootcamp) curriculum.

Reactstrap current version (v7) uses one global CSS :(

SemanticUI current version (2.4) uses LESS, therefore no access to props in that style to use the powerful [conditional rendering](#conditional-rendering) that we explained before :(

There is an important consideration when choosing a component library: how easy it's going to be in the future to replace it with something else. One of the libraries that provides a lot of ([highly-coupled](/blog/unit-testing-fundamentals-explained-using-javascript/#coupling)) functionality is Antd - at least the current version (3.12). For instance, the behavior of the form is highly-coupled to how form field components look. In this case, a good alternative is to use Rebass in combination with [final-form](/blog/react-forms-controlled-and-uncontrolled-components/#form-library) to decouple the behavior of the form and how the form fields look.

### Abstract components <a name="abstract-components"></a>

Good developers plan for successful change. Whatever component library you use you should make it as easy as possible to change it in the future.

A good practice in this regard is to abstract any component library into your own components. This a small amount of work up-front but brings a lot of value in the future. For instance, if you use Rebass, you wouldn't `import { Button } from "Rebass"` everywhere you want to use a button. Instead, you would create your own Button that exports the Rebass Button:

```
// src/components/Button.js
export { default as Button } from 'rebass'
```

Then you can import your Button everywhere you need a button in your app. This might look very simple, but creating this abstraction is very important. When we created the first version of the ReactJS Academy website we used Rebass and we created this [abstraction on top of the Rebass button in the first commit](https://github.com/reactjsacademy/reactjsacademy/blob/e9f2699ade8f0c37dcdc1513ae8b68bd6a285349/src/components/buttons/Button.js).

We built the first prototype in React in a few days using Rebass and we were able to test it immediately with real users. The reason we are called LeanJS is evident :D
<img src="https://cdn-images-1.medium.com/max/1800/1*xHeXQyA_vTS3IAU4UQVb1A.gif" alt="ReactJS Academy React prototype"></img>

Then we added custom styles to the Button incrementally. Two weeks after we had completely removed Rebass from the app. [Removing Rebass from the package.json was a piece of cake](https://github.com/reactjsacademy/reactjsacademy/commit/b4b132ab6849461d40024b4fd2991a5984517d1e). That's amazing considering that the initial version was entirely built with Rebass. Hopefully, I've convinced you of the advantages of creating these abstractions.

<img src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fstyling%2Fremoves-rebass-min.png?alt=media" alt="Commit that removes Rebass from ReactJS Academy"></img>

If you want to know more about how [LeanJS](https://leanjs.com) designed, built, and tested in a month the MVP for this website check out this [blog post](https://medium.com/leanjs/reactjs-academy-2018-website-design-case-study-4b2074dc4e5d)

## Pro-tip <a name="pro-tip"></a>

Add a global and generic CSS like [normalize.css](https://necolas.github.io/normalize.css/) to remove all the custom browser styling (paddings, margins, etc). Then use only styled-components to style your app.

If you really think you need to create a separate SASS or LESS file and you need to define variables there, you can export those variables to JavaScript using CSS Modules so you don’t have to define them twice. For instance variables for colors. You can see an [example here](https://github.com/reactjsacademy/fb-messenger/blob/styling-in-react-leanjs/src/styles/export/colours.scss).

## Conclusion

- [Separate your CSS concerns in a way](#choosing-the-right-concern) that makes it easier to maintain and reuse your code by co-locating the CSS and JS of your components.
- [Styled-components](#styled-components) will help you easily style any React component and avoid common CSS pitfalls.
- In React everything can be a component. [Components everywhere!](#components-everywhere)
- Avoid [global styles](#global-styles) as they can create side effects that are difficult to predict and fix. Everything can be a component, therefore you don’t need any global CSS.
- If you find that you really need to create some global CSS and [include variables](#pro-tip) using SASS or LESS, you can share those variables between CSS and JavaScript using CSS modules
- Create [abstract components](#abstract-components) when using component libraries to plan for successful change.
