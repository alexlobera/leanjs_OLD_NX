---
contentType: blog
title: Introduction to <br />Thinking in React
date: 2018-10-17
subtitle: React is a library -not a framework- that creates user interfaces; and it does in a predictable, efficient, and declarative way
author: alex-lobera
imageUrl: https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fintro-thinking-in-react%2Fthink-outside-box.jpeg?alt=media
authorTwitter: alex_lobera
order: 1
tags: ['react', 'beginner']
---

In this post we are going focus on the declarative part of React.

If you look at the following code, can you try to imagine this app?

<img placeholder-height="248px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fintro-thinking-in-react%2Fcan-you-imagine-this.png?alt=media" alt="Can you imagine this React app"></img>

It could be something like the image below. It has a navigation bar, a header, some filter (it might look like tabs), there is a list of books, etc.

<img placeholder-height="417px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fintro-thinking-in-react%2Freactjs-academy-exercise.png?alt=media" alt="Screenshot of the Thinking in React exercise of React GraphQL Academy"></img>
_You can see a live version [here](https://thinking-in-react.reactjs.academy/)_

The point is that you read the code, and it told you something. Each “piece” is declaring what it is, we’ll call them **components**.

**Declarative code describes what** we want, as oposed to **imperative code that describes how** to do it. We prefer to write declarative code. Why? Let me give you a real-world example.

Imagine you go to a restaurant, you could say, option A: “Steak well done, please”. Option B: “Wash and rinse a steak. Rub the steak with olive oil. Season with the salt and pepper, put aside. Add 1 tbsp butter to skillet, and add steak. Fry each side for 8 minutes on med low heat. If the pan begins to dry time after time, add water, NOT OIL. Please”

Which option do you prefer? Which option is more declarative? Option A.

So, why declarative UIs are better?:

- Less code
- Less bugs
- Easier to understand
- Easier to change

## Componentization

A React app is made of many components. Looking at the following image, which data structure do you think represents the components in a React app?

<img placeholder-height="301px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fintro-thinking-in-react%2Fscreenshot-component-tree.png?alt=media" alt="Screenshot component tree of a React app"></img>

It’s a tree. We think of UIs as hierarchical structures, it’s a very natural mental model for humans. The DOM is also a tree.

<img placeholder-height="302px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fintro-thinking-in-react%2Fcomponent-tree.png?alt=media" alt="Example React component tree"></img>

I always find it very useful to think of my React apps as simply trees, not as a set of pages or views, as I did at the beginning when I moved from MVC frameworks to React (that might be your case). If you are just getting started with React, I recommend you draw out on paper (or any other fancy tool) the component tree of your app, just like the image above.

<img placeholder-height="241px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fintro-thinking-in-react%2Fcomponent-tree-comparison.png?alt=media" alt="Component tree comparison"></img>
_Components can “contain” other components. Intentionally avoided the word “compose” at this point. [We explain composition in another post](/react/react-is-all-about-composition-react-hooks-render-props-hocs)</a>_

## State

In a declarative world, the state of the world is king. Let’s forget about React for a second. If you look at the image below, is the current selected tab (3rd from left) part of the state of the app? Is the data that comes from the API to display the chart part of the state of the app?

<img placeholder-height="266px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fintro-thinking-in-react%2Fapp-state.png?alt=media" alt="What is the state of an app"></img>

Imagine the user navigates to the 3rd tab, then the app fetches some data and it displays a different chart. Then the user switches to a different app. If we tell the user that when she or he comes back to our app it will have the same “state”, what do you think she or he expects to see?
The selected tab and the data from the API are part of the state.

**State is the representation of the app at a given point in time.** You can also think of state as a snapshot of the app at a given point in time.

In a declarative UI a developer is not in charge of changing the UI when something happens. We don’t have to worry about hiding or showing divs, etc.

<img placeholder-height="330px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fintro-thinking-in-react%2Fno-jquery.png?alt=media" alt="In React dev's job is not to add or remove divs"></img>

In a declarative UI we are in charge of receiving state and rendering what the UI needs to be, given that particular state.

**Example**
Let’s consider an app that displays a list of books, each book displays the current stock and has a buy button. There is also a shopping cart in the navbar.

In an **imperative UI (like jQuery)**, when a user clicks on the buy button we have to:

- Find on the screen the book that the user is buying, then get the current stock of that book, subtract one, and then update the stock of that particular book in the UI. Then if the stock is 0 we have to find the parent div of the stock and add a “sold-out” CSS class.
- Then we need to find the cart icon in the navbar, get the number displayed on the right of the icon, increment that number by one, and then update the number on the right of the icon.

In a **declarative UI (like React)**, when a user clicks on the buy button we have to:

- The Book component, which renders a single book, receives a prop with a book. It displays the stock of the book. When there is no stock it includes a CSS class “sold-out”.
- The Cart component receives a prop with the number of books in the basket. It renders that number.

Notice two things in the example. i) In the imperative UI we had to do more things, ii) in the declarative UI we didn’t use the word “then”. Why didn’t we use “then”? Because the state is a snapshot at **a given point in time**. Events can produce new state, but they are not the state of the app itself.

<marketingcard text="🎉🎉 New course - GraphQL Bootcamp! 🎉🎉" to="/graphql/training/bootcamp/" button-text="Learn GraphQL"></marketingcard>

## Components

Components are made of two main ingredients, state and props. We know that state tells the app what to be at a given point in time. State is very important, so we should think carefully what is the minimal (but complete) representation of UI state. Obviously we don’t want to store the same state in two different places — imagine we had two different variables telling our app which tab is selected, what a mess!

Considering the following component tree, if we have an array of books that is part of the state of the app, which component should be in charge of managing the books array? In other words, in which component does the books state live?

<img placeholder-height="331px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fintro-thinking-in-react%2Flifting-state-1.png?alt=media" alt="One-way React data flow model AKA 1-way data binding"></img>

What if we tell you that:

- Cars component and its children have nothing to do with the books array.
- BookFilter component has to filter the books array.
- BookList component has to display the books array.
- Components can share state with their children but not with their parent.

<img placeholder-height="303px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fintro-thinking-in-react%2Flifting-state-2.png?alt=media" alt="One-way React data flow model AKA 1-way data binding component owns state"></img>

In this case, Books component should own the state of the books array. Now, how do we pass down the books array from Books component to BookList component? We use something called **props**.

Props can be any JavaScript type: number , undefined , null , string, object, function (yes, let’s say it again, function), etc. So if BookList component needs to display books, then Books component will pass down a prop to BookList component with the array of books. If BookFilter component needs to filter books, then Books component will pass down a prop to BookFilter with a function (AKA callback) that can update the state of the books. The function that updates the state should be colocated close to the state, in this case in Books component.

When a component receives a prop with data that is part of some state, the component won’t update that data it has received. Instead, the data will be updated in the state (some parent component), and then the child component will automatically receive the updated version of the data via props again. Remember, if children need to update data, they can always receive a prop with a function that can update it. Updating state in React is explicit, there is no data binding between models and views like in other paradigms. This is what we call **one-way data flow** or **one-way data binding**.

<img placeholder-height="295px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fintro-thinking-in-react%2Flifting-state-3.png?alt=media" alt="In the one-way React data flow model data flows top-down"></img>

Components are reusable UIs that encapsulate implementation details like behavior and visuals. Components are independent of each other, but they have well-defined interfaces so they can be composed together to create complex UIs easily.

## Components everywhere

Everything on the UI can be a component (including the metas in the head! when we say everything it means everything :). You can learn more about using [components everywhere in this article](/react/styling-in-react/#components-everywhere).

## Let's practice

Here is the [exercise for this part](https://github.com/reactgraphqlacademy/thinking-in-react) which is based on this article that we use in our training. You can give it a try to practice what you just learned in this article. [The solution of the exercise is deployed here](https://thinking-in-react.reactjs.academy). Alternatively, you are welcome to join any of our in-person trainings. Looking forward to meeting you :)
