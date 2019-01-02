---
title: React forms <br/>controlled & uncontrolled components
date: Jan 2, 2019
subtitle: React doesn't implement forms per se, it sets the principles to be done by other devs. Learn how to.
author: alex
imageUrl: https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcontrolled-uncontrolled.jpeg?alt=media
---

React is a tool, not a Framework. React’s job is to render user interfaces. This means that React does not ship any code to make the creation of React forms easy. Other frameworks like Angular provide a form implementation that makes handling forms easier. You might like this or not, but that’s the way it is :) I personally think it’s good. React’s philosophy is to do one thing and do it well, but also and very important, to set the foundation and principles to lay down many other tools around that.

What is a web form? It’s a sort of container that holds some data (state) that can be sent to a server for processing. There are three main concerns forms will have to deal with:

- Handleing **form validation** of the data the user enters. React doesn’t provide any mechanism for this.
- Handling **form submission**. React doesn’t provide any mechanism for this.
- Getting values in and out of **form state**. There are two approaches that React provides to handle the state of the form called controlled and uncontrolled components

## Form state

The state of a form encompasses not only the value of each field (input, select, etc) but also the interaction between the user and the form itself. Here some examples:

- Which field currently has focus?
- Which fields are dirty? Meaning the field has been changed since it was initialized
- Which fields have errors?
- Are we currently submitting?

## Controlled and Uncontrolled components

Heads up! Controlled/uncontrolled is a characteristic that doesn’t only have to do with forms. It has to do with how a component relates to some state. Therefore **controlled and uncontrolled components have to do with components, not only with forms in React**.

The reason I want to emphasize this is because most examples you find on the net use &lt;input/&gt; or &lt;select/&gt; to illustrate the concept, for instance, the [React official documentation](https://reactjs.org/docs/forms.html). I’ve observed that some React devs think that controlled and uncontrolled components only have to do with forms and inputs or selects. I want to make this clear. First, let’s discuss the “classic” controlled and uncontrolled example, and then let’s see other broader examples.

**Uncontrolled component**, the component owns the state.

**Controlled component**, the component does not own the state.

Is the following component controlled or uncontrolled? Can you type "hello" in it?

```.jsx
  <input
    style={{ padding: 8, margin: 8 }}
    placeholder="type here!"
  />
```

The previous input is uncontrolled because we are not setting any state to it. In other words, we are not setting the "value" prop. The value (state) is managed internally by the input.

Is the following component controlled or uncontrolled? Can you type "hello" in it?

```.jsx
  <input
    style={{ padding: 8, margin: 8 }}
    value="type here!"
  />
```

The previous input is controlled because we (some parent component) are setting its state. In other words, we are setting the "value" prop. The value (state) is hardcoded to "type here!" therefore it never changes even when you type on it because we are saying all the time to the input your value is "type here!" regardless of what you type.

Is the following component controlled or uncontrolled? Can you type "hello" in it?

```.jsx
  <input
    style={{ padding: 8, margin: 8 }}
    placeholder="type here!"
    value=""
  />
```

The previous input is controlled because we are setting the "value" prop to an empty string. The value (state) is hardcoded to "" therefore it never changes even when you type on it.

Is the following component controlled or uncontrolled? Can you type "hello" in it?

```.jsx
  <input
    style={{ padding: 8, margin: 8 }}
    defaultValue="type here!"
  />
```

The previous input is uncontrolled because we are not setting the "value" prop. We are setting the defaultValue which is the initial value set internally in the input state. Since we are not controlling the value of the input it changes even when you type on it.

## Example of a Login form with controlled components

<codesandbox id="712kk1y7o1"></codesandbox>

React recommends in most cases to use controlled components to handle a form. It might look like React makes forms harder because all the work we need to do to handle the state. React makes it easier to change the UI - like hiding and displaying divs - and forms seem harder by comparison.

> “React exposed the inherent complexity of forms interactions that was always there” - [Jordan Walke](https://twitter.com/jordwalke), creator of ReactJS.

## Form library

We recommend you to use an external **library to implement forms in React**. The library we recommend at ReactJS Academy and we use at [LeanJS](https://leanjs.com/) with our client work is [Final Form](https://github.com/final-form/react-final-form). The reasons we recommend Final Form over other libraries are:

- Very small. Almost half of the size of Formik or 5 times smaller than Redux Form at the time of this article.
- Pure JavaScript, no dependencies with other libraries
- Very decoupled behavior and UI with simple components and clean APIs.
- Very modular with its built in plugin system
- Subscriptions based. Though this feature is only relevant in cases of extreme performance.

Quoting the React documentation about these form libraries, they are [“built on the same principles of controlled components and managing state — so don’t neglect to learn them (the principles)”](https://reactjs.org/docs/forms.html#fully-fledged-solutions)

## Controlled and uncontrolled beyond forms

Controlled components require more code, while uncontrolled components are the opposite. Let’s have a look at some code and analyze why that’s the case.

The following code is what the documentation of [React Bootstrap](https://react-bootstrap.github.io/components/modal/#modals-live) says we need to do in order to use its modal. Do you think this modal is a controlled or uncontrolled component?

<codesandbox id="9zkqkjn2zy" height="800px"></codesandbox>

The previous Modal is a controlled component.

Now let’s have a look at the following implementation of another modal extending the previous modal thanks to the React composition model. Is the following modal controlled or uncontrolled?

<codesandbox id="30v2n85q55" height="800px"></codesandbox>

The previous Modal is an uncontrolled component.

Which modal is easier to reuse in different projects? The second one (the uncontrolled one). Why? Because the state is handled by the modal itself so we don’t need to do any extra work to reuse the modal.

So which is better, controlled or uncontrolled components? It depends on the use case. Controlled components obviously give you more, well, control. Controlled components give you direct access to the state, so if you need to perform tasks like validating that state, it’s really easy since you own the state. Uncontrolled components are easier to reuse with minimal setup. If your app doesn’t need to know about the state of the component, like in the case of the modal, uncontrolled components will be simpler to use.

A good component is one that can be either controlled or uncontrolled. Think of an &lt;input/&gt; itself. If you provide a value, the input becomes controlled. If you don’t provide a value, the input becomes uncontrolled.

This [burger menu](https://github.com/negomi/react-burger-menu) is a good example. It’s implemented in a way that can be either controlled or uncontrolled.

&lt;Menu/&gt; // [this is uncontrolled](https://github.com/negomi/react-burger-menu#usage)

&lt;Menu isOpen={this.state.isOpen}/&gt; // [this is controlled](https://github.com/negomi/react-burger-menu#open-state)

## Conclusion

- Uncontrolled component, the component owns the state.
- Controlled component, the component does not own the state.
- A form library will help you submit, validate, and manage the state of the form (including user interactions)
- The concept of controlled and uncontrolled component applies to any component, not only form fields like inputs, select, etc
- A well designed component has the flexibility to be used either controlled or uncontrolled, depending on the use case.
