---
title: Unit testing <br/>explained with JavaScript
date: Nov 7
subtitle: Before writing unit tests for your React project, you should have a good foundation on unit testing
author: alex
imageUrl: https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fside-effect.png?alt=media
authorTwitter: alex_lobera
---

This article is meant to show you two things:

- What is a good unit test
- What is a bad unit test

## What is a unit test?

I find useful to start explaining unit tests using the following example. Once I was hired to work on a big project for a company. I said during the interview that I was used to writing unit tests, and they really liked that since they were not writing any. So the first task I was assigned, was to write some unit tests on their existing code base. After seeing the code base I turned to my manager and said “I can’t write unit tests”. He said “Why? You said you knew how to write unit tests?”. I replied “well, you don’t have units”.

I’m not sure there is a consensus on what a unit is but it’s for sure not a “controller” with hundreds of lines of code.

Would you say that the following code is a unit?

```
function getAvailableProducts(products) {
    let availableProducts = []
    for (var i = 0; i < products.length; i++) {
        if (products[i].quantity > 5) {
            availableProducts.push(products[i])
        }
    };
    let i, len = availableProducts.length, el, j;
    for(i = 1; i<len; i++){
        el = availableProducts[i];
        j = i;
        while(j>0 && availableProducts[j-1]>toInsert){
            availableProducts[j] = availableProducts[j-1];
            j--;
        }
        availableProducts[j] = el;
    }

    return availableProducts
}
```

I define a unit as a piece of code that is isolated from the rest of the program and which can easily be reused in other parts of the program.

A unit can be a function, class, module, etc. A function, or any of those previously mentioned, does not create a unit by definition. The unit is defined by two different axis, therefore the “unity” of the function depends on the degree to which it is isolated and reusable.

The following code does the same that the previous does, but the following code is more reusable (and testable!):

```
const atLeast5InStock =  product => product.quantity > 5

const byExpirationDate = (productA, productB)
        => productA.expiresOn - productB.expiresOn

const availableProducts = products
    .filter(atLeast5InStock)
    .sort(byExpirationDate)
```

If your code is modular and simple (**simple !== easy**) it should be easy to test.

```runkit
const atLeast5InStock =  product => product.quantity > 5

const expected = false
const actual = atLeast5InStock({ quantity: 2})

if (actual !== expected) {
    throw new Error(`${actual} is not ${expected}`)
}

console.log('It works!')
```

In case you didn't know, all the test frameworks like Jest simply throw Errors when the actual value from the test is not the expected one. To see how it fails, change the quantity to 6 in the test above and run it again:
`const actual = atLeast5InStock({ quantity: 6})`

Unit tests are tests which test individual units in isolation from the rest of the program. Code should by definition become more readable, flexible, and maintainable when you make it more testable.

# White-box testing Vs. black-box testing

A concept I find key when it comes to writing good tests is the idea of white-box testing and black-box testing.

White-box testing is a software testing method that tests **how** the code we are testing works. In other words, the test knows the implementation details of the code being tested.

Black-box testing is a software testing method that tests **what** the code does. The test has no clue about how the code being tested does what it does.

Black-box testing leads to less fragile tests. If you change the implementation details of the code and the code still does what is was doing before the refactoring, then, ideally you should not have to update the corresponding test.

Have you heard the mantra “do it, then do it right, then do it better”?

<tweet id="314785735171518464"></tweet>

If you write tests that are likely to be refactored everytime the code it tests is refactored, then it’s likely you are not going to refactor your code that often. Meaning you are likely to just “do it”. I don’t know about you, but most developers I know, including myself, don’t “do it right” in the first iteration. A senior developer will plan for future refactoring.

This is a fundamental problem in unit tests, if you test how the code is implemented instead of what the code should do, then you are not testing the right thing.

That being said, sometimes testing the right way is not easy. In order to write black-box tests we need to make sure that the code we want to test is written in a way that it always produces the same output given the same input. To test that type of code we don’t need to know any implementation detail to assert the code to be tested does **what** it is supposed to do. We only need to set the input parameters, run the code, and assert that the output parameters are the expected ones. We need pure functions.

#Pure functions <a name="pure-functions"></a>

Pure functions are functions that:

**Are predictable**. It means given the same input, always produce the same output. This means pure functions don’t access global values, or in other words they only read values that are input parameters.

**Produce no side-effects**. Side effects have to do with mutating data and async code. If a function changes a variable while another function is reading it, that could generate unexpected results. To avoid side-effects pure functions don’t mutate data. In the case of JavaScript where data can be mutated, if a pure function needs to change an input parameter it first makes a copy of the parameter. The only observable effect of a pure function is the output parameter.

## sum(a, b)

A function that adds two numbers is a classic example when it comes to explaining unit tests. The function is also a pure function:

```
const sum = (a,b) => a + b
```

We also use this example when we start teaching testing in JavaScript 😛. People tend to find it obvious that it’s **predictable and doesn’t produce side-effects**. They also find it very easy to test.

The problem they often find is that it doesn’t quite look like the code they write in real-world applications. They say the sum function is too simple compared to the code in real-world applications. I observe two main differences between the sum function and the real-world code:
Real world code is made of many units, not just one. Those units might have dependencies between each other.
Real world code has side-effects. I/O operations are side-effects. Therefore all applications have side effects by nature. Let me get philosophical, if a program has no side-effects at all, does the program exist if you can’t see or communicate with it? If a tree falls in a forest with no side-effects… did it fall?

!["Apps with no side-effects?"](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fside-effect.png?alt=media)

The issue that I observe is that the code they write is:
Too complex. It has too much unpredictable code or predictable and unpredictable code is not clearly separated.
Too complicated. The units are tightly coupled.

## Coupling <a name="coupling"></a>

Coupling is the degree of interdependence between units. Tight coupling makes code more rigid and fragile. Rigid because the more dependencies a unit has, the more work we need to do to reuse the unit. Fragile because the more dependencies, the more likely a unit is to break when changes are made to its dependencies.

## Redux reducers

The challenge we often face when we learn a new skill is to go from the classroom/tutorial examples to the real-world everyday practice. Using pure functions takes practice.

To me, one of the great successes of Redux is that it made the use of pure functions in real-world JavaScript applications something quotidian, at least in the front-end space.

```runkit
function menuReducer(state = false, action) {
    switch (action.type) {
        case "TOGGLE_MENU":
            return !state
        default:
            return state
    }
}

const actual = menuReducer(undefined, { type: "?" })
const expected = false

if (actual !== expected) {
    throw new Error(`${actual} is not ${expected}`)
}

console.log('It works!')
```

Reducers are pure functions whose output is combined to produce a single JavaScript object. Reducers are independent and don’t know anything about other reducers. In fact, reducers don’t know if there are any other reducers at all, and yet they are combined to produce a greater thing, the state tree of the application. You can learn more about how Redux works in [this article where we build Redux from scratch ](https://medium.com/leanjs/introduction-to-redux-redux-explained-with-very-simple-examples-b39d7967ceb8)

Pure functions reduce the dependency between units. They receive data, transform data, and return data. Pure functions are the fundamental unit of composition in functional programming.

The more dependencies our units have, the more we need to mock.

##Mocking

Mocks stand in for real code that the code to be tested depends on, therefore, mocks are an indication of coupling (tightly or loosely).

A mock is code that:

- Spies some code during the execution of a test
- Replaces some real implementation code during the execution of a test.
- Can be programmed to produce assertions about how it was executed during the test run

A mock is a type of test double. There are manly 3 types of test doubles: spies, stubs, and mocks.

The term “mock” is widely used across the industry to refer to the use of any kind of test double; which is not correct technically speaking. Anyway, for the purpose of this text we’ll use the term “mock” to refer to any type of test double to be more in tune with popular usage.

A JavaScript mocking library that complies with the strict definition of mocking is Sinon.

The library I use to test my JavaScript applications is Jest. You might wonder why I use Jest if Sinon has a more rigorous implementation of mocking. The reason is Jest has a great developer experience, and I don’t use Jest mocking features. In fact, I don’t use any mocking library at all to test my code.

No matter how we break down the program in small units and connect the units later, there is always going to be code that handles I/O. I/O are by nature side-effects, you can’t predict for instance that the network will respond as you expect.

It is a good practice to isolate side-effects from the rest of your program logic. By doing so, you’ll be able to mock the side-effect units when testing the rest of units in the program. That sounds good, but what about the units that contain the side-effects, how do we unit test them?

Let’s have a look at the following example, this code exists mainly to facilitate some I/O. There is no logic apart from the I/O so the side-effects are isolated in the function.

```
export const fetchThreads = () => (
    fetch('/mocks/threads.json')
    .then(response => response.json())
)
```

If we want to unit test the function we need to mock the fetch function. Here there is an example:

```
describe('#API thread endpoint', () => {
  it('should fetchThreads', () => {
    global.fetch = jest.fn()

    fetch.mockImplementation(
      (params) => Promise.resolve({
        json: () => ({
          data: [],
          params
        })
      })
    )
    api.fetchThreads().then((response) => {
      expect(response.data).toEqual([])
      expect(global.fetch).toBeCalledWith(
        '/mocks/threads.json'
      )
    })
  })
})
```

### Mocking observations

Considering the test we wrote for the `api.fetchThreads` :

- Is the test white-box or black-box? If tomorrow I replace fetch by axios or jQuery the test will probably break. **What** the code does is the same, **how** it does it’s different because different libraries have different contracts, so we’ll need to update the mock. When you mock you replace some implementation with other code, therefore by definition if the test needs a mock then the test knows things about **how** the code does it.

- We wrote a lot of code in the test compared to the tinny fetchThreads in order to mock the dependency. More code means more we are going to read and change when we break our fragile test.

- If we were to avoid mocking in this case, it means the unit test coverage we could get would be close to 0. The unit test is literally checking every single step that the test subject implements. If the test passes, it is mainly saying the mock is doing what I programmed the mock for. What is the value of writing the same code twice?

### Mocking conclusion

If you write a lot of code in your unit test to basically replicate the implementation of the unit itself, and the test is very likely to break when the unit changes then:

> **don’t unit test I/O**, you can write integration tests for that.
