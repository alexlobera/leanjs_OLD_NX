---
contentType: blog
title: React is all about <br />composition
date: 2019-01-30
subtitle: Understanding React Hooks, Render Props, HoCs, and the React composition model
author: alex-lobera
imageUrl: https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2Fkid-lego-2-min.jpeg?alt=media
authorTwitter: alex_lobera
order: 15
tags: ['react', 'advanced']
---

Software development is, in essence, the process of breaking a problem down into smaller problems, implementing solutions for those smaller problems, and then **composing** those solutions to form partial solutions, and so on, until eventually completing the whole solution.

What do React components do? Components break down the UI into smaller independent components. Components are **composed with** other components to create greater components, and so on until they eventually complete the whole UI.

## What is composition?

**Composition is the act of combining parts or elements to form a whole**.

Components are the UI building blocks in React applications, like [pure functions](/react/unit-testing-fundamentals-explained-using-javascript#pure-functions) are the building blocks of function composition.

## Function composition <a name="function-composition"></a>

Function composition is the act of applying a function to the output of another function. In algebra, given two functions, f and g, (f ∘ g)(x) = f(g(x)). The circle is the composition operator and it's commonly pronounced "f composed with g" or "f after g". I pronounce it "composed with", maybe because in React I often see code like the following where I literally read “compose with”:

```
export default compose(
	withRouter,
	withApollo,
	withEtcEtc,
)(Component)
```

You can compose functions as long as the output of one function is the expected input of the next function. You can’t compose two functions if one returns an array and the next one’s input expects a string. We can illustrate this idea with the following image:

<img placeholder-height="176px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2Ffunction-composition-min.png?alt=media" alt="diagram function composition"></img>

Considering that the output of g is the input of f, which function do you think is executed first, f or g? g is executed first. Imagine you are the JS runtime and try to run the following code f(g(x)). You can’t run f until you resolve its argument.

```runkit
function f() {
    console.log("f")
}
function g() {
    console.log("g")
}
// run the following code to see which
// console.log is displayed first, f or g?
f(g())
```

We can use a compose function to declaratively compose (f ∘ g)(x)

```
h = compose(f,g)
```

One of the fundamental concepts in React is the declarative approach. Composition can be very declarative, but as in many cases, it's up to us. We could also code some imperative composition (don’t do it). Example:

```
// don’t do this!
const compose = Component => {
    const afterG = withRouter(Component);
    const afterF = withApollo(afterG);
    return afterF;
};
```

When we use **declarative composition `h = compose(f,g)` we can state that f doesn't know g exists and g doesn't know f exists**.

You can apply composition in pure JavaScript code in your React real-world applications. For example to compose the validators of a form field. We use [function composition to validate forms in our website](https://github.com/reactgraphqlacademy/reactgraphqlacademy/blob/master/src/components/payment/checkout/CheckoutForm.js#L230). Applying composition in your real-world JavaScript projects is very powerful. Composition is not an academic or theoretical concept that you can’t explicitly apply in your JavaScript code. We cover this case in the [function composition exercise](https://advanced-react-patterns.reactjs.academy/composition) of our advanced hands-on React training.

## React composition model <a name="react-composition-model"></a>

In React there is the notion of a tree made up of components. In this tree of components the following rules define the components’ relationship:

- The parent may or may not know who the children are ahead of time.
- Children never know who is the parent
- Children never know who are the siblings
- The relationship has a well-defined interface, AKA props.

Since function composition uses a circle as operator, I'm also going to use circles to represent this composition model. There are two different perspectives I can think of to illustrate it:

### Side perspective of a n-children per node tree

<img placeholder-height="387px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2Fside-perspective-many-children-min.png?alt=media" alt="React component tree side perspective many children"></img>

### "Top" perspective of the previous tree

<img placeholder-height="507px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2Ftop-perspective-many-children-min.png?alt=media" alt="React component tree top perspective many children"></img>

I guess the first one makes more sense in this case because every parent has more than one child. But, what if parents have only one child?

### Tree side perspective of a one-child per node tree

<img placeholder-height="577px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2Fside-perspective-min.png?alt=media" alt="React component tree side perspective one children"></img>

### "Top" perspective of the previous tree

<img placeholder-height="559px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2Fconcentric-hoc-fun.png?alt=media" alt="React component tree top perspective one children"></img>

To me, in this case, the second image (concentric circles) illustrates better the case.

Common sense tip. Looking from different perspectives when trying to understand something is very useful. Using the same lens is likely to show the same views.

### Well defined interfaces

Components have well-defined interfaces that enable explicit interactions between components. Those well-defined interfaces are called props. Props are the mechanism a component has to interact with the outer world - by outer world I mean the parent component.

### props.children

Components have a prop called children. Because it is a prop, given this component `const User = props => <p>{props.children}</p>`, we can do either:

```
<User children="@alex_lobera" />
```

or

```
<User>@alex_lobera"</User>
```

You can see the later as syntactic sugar of the former. Of course, you can also do this (or any prop name variation you can think of)

```
const User = props => <p>{props.name}</p>
```

and so

```
<User name="@alex_lobera" />
```

Based on my experience teaching React at the React GraphQL Academy, I've seen many developers missing part of what the React composition model is and misunderstanding the “children” prop.

If we look at the following code:

```
const TwitterProfile = props => (
  <section>
    <Text>
      	Username
    </Text>
    <Text>
	@alex\_lobera
    </Text>
  </section>
)
```

we can state:

- TwitterProfile has one child, section. We can also say TwitterProfile is composed with a section.
- section has two children, Text and Text. We can also say section is composed with two Text components.
- The first Text has one child, "username". We can also say Text one is composed with the string "username"
- The second Text has one child. We can also say Text two is composed with the string \@alex_lobera
- We don't know who is TwitterProfile's parent.

<img placeholder-height="241px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2Fchildren-example2-min.png?alt=media" alt="Example TwitterProfile"></img>

If we look at the following component in isolation

```
const Text = props => <p>{props.children}</p>
```

we can state:

- Text has one child, p.
- p has one child.. many children? **we don't know ahead of time who is p's children** from the Text perspective.
- We don't know who is Text's parent.

There is something very nice about “children”, it makes composition more declarative in the component tree.

<tweet id="1021850499618955272" placeholder-height="1054px"></tweet>

## Composition via Higher-Order components (HoCs) <a name="composition-via-hocs"></a>

HoCs is a pattern for reusing component logic. **Component logic means logic that has to do with lifecycle methods and/or state and/or context**.

Heads up! You don’t need a HoC if the logic you want to reuse doesn’t use lifecycle methods and/or component state and/or context.

A typical use case for using HoCs is fetching some data on componentDidMount and store it in the state. Here there is [an example called withData that we use in our advanced material](https://advanced-react-patterns.reactjs.academy/higher-order-components#withdata).

HoCs are functions that receive a component as an argument and return a new component.

In the following example withRouter is the HoC function and Threads is the component we are enhancing

```
export default withRouter(Threads)
```

You can compose a component with as many HoCs as you need, for instance:

```
export default withRouter(
    withApollo(QUERY)(
        connect(mapStateToProps)(Threads)
    )
)
```

If you find it hard to read the previous example, you can rewrite it using a compose function as follows:

```
export default compose(
	withRouter,
	withApollo(QUERY),
    connect(mapStateToProps),
)(Threads)
```

There are many libraries, like recompose or react-apollo, that implement a compose function. The compose function is very simple, you can implement it yourself with a few keystrokes:

```
export const compose = (...functions) => component =>
  functions.reduceRight(
    (enhancedComponet, func) => func(enhancedComponet),
    component
  );
```

Notice the reduceRight in the compose function. **Composition goes from right to left, or you can also see it as from inside out**. connect’s input is the Threads component. The output of connect is a new component which is the input of withApollo. The output of withApollo is a new component that is the input of withRouter. The output of withRouter is a new component composed with the previous components. That’s the reason we need to reduce the arguments of the compose function in the reverse order, and for that purpose we used reduceRight.

HoCs return one component, that's why concentric circles is the prefered way by many people to illustrate the previous example.

<img placeholder-height="559px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2Fconcentric-hoc-fun.png?alt=media" alt="React component tree top perspective one children"></img>

Notice the previous concentric circles represent the higher-order component functions but not the output of those functions (meaning the components that are rendered). We said that a higher-order component is a function that returns a new component, but that new component can contain other new components itself. That’s the case of withRouter and withApollo.

###withApollo added two new components in the hierarchy

<img placeholder-height="255px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2Fapollo-min.png?alt=media" alt="withApollo added two new components in the hierarchy"></img>

###withRouter added two new components in the hierarchy

<img placeholder-height="257px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2FwithRouter-min.png?alt=media" alt="withRouter added two new components in the hierarchy"></img>

###connect only added a new component in the hierarchy

<img placeholder-height="247px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2Fconnect-min.png?alt=media" alt="connect only added a new 1 component in the hierarchy"></img>

###Threads is the enhanced component.

<img placeholder-height="247px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2FThreads-min.png?alt=media" alt="Threads is the enhanced component"></img>

Wait, HoCs are functions, not components so how can we compose them? Same as the function composition we explained at the beginning of the article, although in this case the input & output of all the HoCs are always components:

<img placeholder-height="200px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2Fhoc-composition.png?alt=media" alt="HoC composition"></img>

Do you think the order of the HoCs matter? For instance, do the following two cases work the same:

Case A

```
export default compose(
	withRouter,
	withApollo(QUERY),
    connect(mapStateToProps),
)(Threads)
```

Case B

```
export default compose(
    connect(mapStateToProps),
	withRouter,
	withApollo(QUERY),
)(Threads)
```

From a composition perspective both cases are the same since all the HoCs’ input & output are components. Now from a React implementation perspective there are a few considerations:

- Prop name collision, meaning two HoCs inject a prop with the same name. In the previous example it doesn’t happen.
- Performance. Imagine Threads is a form connected to ReduxForm. Everytime the user press a key it would cause a rerender of all the components in case B but not in case A. The reason is props need to be propagated down the composition to Threads through all the components in between.

If you are interested in checking the material we use to teach HoCs click on this [link](https://advanced-react-patterns.reactjs.academy/higher-order-components). We cover these and similar cases in more detail in any of the in-person React training we run, such as the [React bootcamp](/react/training/bootcamp/), [advanced React training](/react/training/advanced/), [part-time React course](/react/training/part-time-course/), and of course the [on-site corporate React training](/react/training/corporate/).

<marketingcard text="🎉🎉 New course - GraphQL Bootcamp! 🎉🎉" to="/graphql/training/bootcamp/" button-text="Learn GraphQL"></marketingcard>

## Composition via Render Props <a name="composition-via-render-props"></a>

Render Props, like HoC, helps us reusing component logic (again! **only logic that has to do with lifecycle methods and/or component state and/or context**). The different is in the way they do it.

With HoCs composition happens all in one place, typically at the bottom of the file where we define the component:

```
export default withRouter(
    withApollo(QUERY)(
        connect(mapStateToProps)(Threads)
    )
)
```

A problem some people observe with HoCs is that composition doesn’t look very declarative from a React perspective. In React we tend to declare intent using components in JSX. In some cases, Render Props can make the code more readable. For instance:

```
const CoolComponent = () => (

  {/* some cool JSX here */}

  {/* With Render Props we can apply the Measure logic
  only to the figure. With HoC we would need to
  wrap the entire CoolComponent */}

  <Measure>
    {(width, height) => (
      <figure>
        <img alt="dog" style={{ width }} src="/dog.jpg" />
        <figcaption>My width is {width}px</figcaption>
      </figure>
    )}
  </Measure>

  {/* some JSX below */}
)
```

With Render props we are composing with the logic we want to reuse, just for the components that are interested in that logic. In the previous example, only the image is composed with the Mesure logic. The HoC approach is composing the entire set of components with the mesure logic.

Render Props is defined inside a method that is rendered, this means **composition with Render Props happens at render time, not at run time like HoCs**. This feature gives composition via Render Props access to props out of the box, which is very powerful. In HoC to get access to props you need to implement some code yourself to handle that case. You can see an [example in connect from react-redux](https://react-redux.js.org/api/connect#the-arity-of-maptoprops-functions) with the called ‘ownProps’.

## Composition via React Hooks <a name="composition-via-react-hooks"></a>

Before Hooks, composition in React happened only vertically (bottom-up) between components in the tree. Heads up, I'm specifically talking about composition in the component tree and not data flow. Data flow in the component tree is top-down

<img placeholder-height="396px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2Freact-components-composition-model-min.png?alt=media" alt="React component composition model"></img>

> Hooks allows composition perpendicular to the tree. - Sebastian Markbåge (author of the Hooks proposal)

<tweet id="1057392329739296768" placeholder-height="253px"></tweet>

Composition perpendicular to the tree means that now we can **reuse component logic inside different components**. This is genius.

<img placeholder-height="365px" src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2Freact-hooks-composition-model-min.png?alt=media" alt="React Hooks composition model"></img>

I find brilliant the atom and electron analogy that Dan Abramov used to describe React Components and React Hooks.

> When scientists discovered the atom they thought they were the smallest thing we are going to find. But later they discover the electron, which is a **smaller part inside the atom**. It turns out that the electrons explain a lot about **how atoms work**. - Dan Abramov.

There are countless advantages of using Hooks compared to HoC and Render Props. Here are some that I find very relevant for the subject of this article:

- Hooks don’t create new components in the three. This makes our tree more readable and performant (bye bye wrapper hell!) since Hooks don’t change our component hierarchy when we use them.
- Hooks let you split one component into smaller functions that can be reused across different components.
- Hooks remove the cognitive overhead that [Render Props](#composition-via-render-props) and [HoC](#composition-via-hocs) add when reusing component logic.

If you are excited about composition (you probably should) and you want to learn more about it, I recommend you watching my video about composition

<video youtube-id="DSlFlks7R0g"></video>

## Composition versus inheritance in React <a name="composition-vs-inheritance-in-react"></a>

The principles behind composition and inheritance in React don’t differ from composition and inheritance in general software development terms. That being said, there are some small considerations in React, for instance the bundle size which would not matter much in a server-side environment.

Inheritance is a rigid, [tightly-coupled](/react/unit-testing-fundamentals-explained-using-javascript#coupling) approach. Every ancestor in the hierarchy adds a coupling layer.

When we reuse a use case of a given class by inheriting from it, we also bring all the implicit code from the ancestors, even the code from the use cases we don’t use. In JavaScript that means more code to bundle. This extra code is also more difficult to optimize and reduce the size by for instance reducing the number of characters of method names or class properties.

Due to tight coupling, changes to the base class could potentially break any of the descendant classes. The probability of breaking changes increases when you extend a class implemented by a third-party author. That’s **the reason you should never extend a class that extends React.Component; your component extends React.Component and inheritance should stop there.**

## Recap

- [Pure functions](/react/unit-testing-fundamentals-explained-using-javascript#pure-functions) are the building block of [function composition](#function-composition). Components are the building block of the UI composition model in React.

- Components can be composed with one or many other components.

- Components never know who are their parents.

- In the [React composition model](#react-composition-model) some components don't know who are their children ahead of time (we could also say at implementation time). The children prop enhances the [React declarative approach](/react/introduction-to-thinking-in-react/).

- Composition in React is everywhere, not only when we "compose" [higher-order components](#composition-via-hocs).

- With [HoC](#composition-via-hocs) composition happens at runtime, with [Render Props](#composition-via-render-props) composition happens at render time. Render Props gives you access to the component props out of the box

- [React Hooks](#composition-via-react-hooks) allow composition perpendicular to the tree by enabling reusing component logic inside different components. This way, we don’t change the component hierarchy when reusing component logic.

- [React Hooks](#composition-via-react-hooks) let you split one component into smaller functions that can be reused across different components.

- [React Hooks](#composition-via-react-hooks) remove the cognitive overhead that [Render Props](#composition-via-render-props) and [HoC](#composition-via-hocs) add when reusing component logic.

- Composition will make your code more reusable, easier to maintain, and easier to test. Long live composition!
