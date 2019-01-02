---
title: React forms<br/>controlled & uncontrolled components
date: Jan 2, 2019
subtitle: React doesn't implement forms per se, it sets the principles to be done by other devs. Learn how to.
author: alex
imageUrl: https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcontrolled-uncontrolled.jpeg?alt=media
---

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

## Example of a Login form

<codesandbox id="712kk1y7o1" view="preview" height="300px"></codesandbox>

## Bootstrap modal

<codesandbox id="9zkqkjn2zy" height="800px"></codesandbox>

## Our modal

<codesandbox id="30v2n85q55" height="800px"></codesandbox>
