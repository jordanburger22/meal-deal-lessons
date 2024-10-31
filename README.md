Here's a `README.md` file focused on teaching beginners about props in React, specifically how to pass a prop, understand what's happening under the hood, and how to destructure props.

# Introduction to Props in React

## What are Props?

In React, **props** (short for properties) are a mechanism for passing data from one component to another. They are used to pass data and event handlers down to child components. Props are read-only and should not be modified by the child component that receives them.

## Passing Props

To pass props to a child component, you can use a custom attribute in the JSX of the parent component. Here's an example of how to pass a string as a prop:

### Example

**Parent Component (`App.js`)**

```jsx
import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <Greeting message="Hello, World!" />
    </div>
  );
}

export default App;
```

**Child Component (`Greeting.js`)**

```jsx
import React from 'react';

function Greeting(props) {
  return <h1>{props.message}</h1>;
}

export default Greeting;
```

### What’s Happening Under the Hood

1. **Defining Props**: In the `App` component, we define a prop called `message` and pass the string `"Hello, World!"` to the `Greeting` component.
  
2. **Receiving Props**: The `Greeting` component receives the props as an object. In our case, `props` will look like this:
   ```javascript
   {
     message: "Hello, World!"
   }
   ```

3. **Using Props**: Inside the `Greeting` component, we can access the `message` prop using `props.message` and render it in an `<h1>` tag.

## Destructuring Props

Destructuring allows you to extract properties from an object into distinct variables. This can make your code cleaner and easier to read.

### Example of Destructuring

You can destructure props directly in the function parameters:

**Child Component with Destructured Props (`Greeting.js`)**

```jsx
import React from 'react';

function Greeting({ message }) {
  return <h1>{message}</h1>;
}

export default Greeting;
```

### What’s Happening with Destructuring?

When we destructure the `message` prop in the `Greeting` function, it’s equivalent to the following:

```javascript
function Greeting(props) {
  const message = props.message;
  return <h1>{message}</h1>;
}
```

### Summary

- **Props** are a way to pass data from parent to child components in React.
- You can pass props using custom attributes in JSX.
- Props are received as an object in the child component.
- Destructuring props can make your code cleaner by allowing you to extract values directly.

## Conclusion

Understanding props is fundamental to working with React. They enable communication between components and help you build dynamic user interfaces. Practice passing different types of props and using them in various ways to gain a deeper understanding of how they work.