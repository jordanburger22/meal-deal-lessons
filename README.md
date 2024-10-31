# React Components for Beginners

## Table of Contents
- [What Are Components?](#what-are-components)
- [Building Custom Components](#building-custom-components)
- [Importing and Exporting Components](#importing-and-exporting-components)
- [Using Components in Your App](#using-components-in-your-app)

---

## What Are Components?

In React, a **component** is a reusable piece of UI that can manage its own state and behavior. Components help break down complex user interfaces into smaller, manageable pieces. Each component can be thought of as a building block of your application, allowing you to encapsulate logic and styles.

### Functional Components
Functional components are JavaScript functions that return JSX (JavaScript XML) to render UI.

### Example of a Functional Component
Here’s a simple example of a functional component that does not use props:

```jsx
function WelcomeMessage() {
    return <h1>Welcome to My React App!</h1>;
}
```

---

## Building Custom Components

To create a custom component, follow these steps:

1. **Create a JavaScript file** for your component. It's common to name the file after the component (e.g., `WelcomeMessage.jsx` if using Vite or `WelcomeMessage.js` for regular JavaScript files).

2. **Define the Component**: Use a function to create your component.

### Example of Building a Functional Component
```jsx
// WelcomeMessage.jsx
import React from 'react';

function WelcomeMessage() {
    return <h1>Welcome to My React App!</h1>;
}

export default WelcomeMessage;
```

---

## Importing and Exporting Components

To use your custom component in another file, you need to **export** it from its file and then **import** it where you want to use it.

### Exporting a Component
When you define a component, you can export it using `export default ComponentName;` at the end of the file (as shown in the previous examples).

### Importing a Component
To import the component, use the following syntax in the file where you want to use it:

```jsx
import ComponentName from './ComponentName.jsx'; // or .js if not using Vite
```

---

## Using Components in Your App

Once you've imported your components, you can render them within your application's component using JSX syntax. Here’s how to use the `WelcomeMessage` component within a parent component, such as `App`.

### Example of Using the `WelcomeMessage` Component
Assuming you've created the `WelcomeMessage` component in `WelcomeMessage.jsx`, you can use it in your main application component like this:

```jsx
// App.jsx
import React from 'react';
import WelcomeMessage from './WelcomeMessage.jsx'; // or .js if not using Vite

function App() {
    return (
        <div>
            <h2>My React Application</h2>
            {/* Use the WelcomeMessage component */}
            <WelcomeMessage />
        </div>
    );
}

export default App;
```

### Explanation
In the `App` component:
- The `WelcomeMessage` component is imported at the top of the file.
- Inside the `return` statement, the `WelcomeMessage` component is rendered. This demonstrates how you can use the component directly without needing to pass any props.

### Rendering Your App
To see your components in action, ensure you have a root element in your `index.html` file where your React app will mount, and use `ReactDOM.render` in your main JavaScript file to render the `App` component.

```jsx
// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'; // or .js if not using Vite

ReactDOM.render(<App />, document.getElementById('root'));
```

---

## Conclusion

React components are a fundamental building block of React applications. Understanding how to create, import, and use components within your application will set the foundation for building interactive user interfaces. Practice creating your own components and using them in various parts of your app, and you'll become proficient in using React in no time!