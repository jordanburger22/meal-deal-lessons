# Lesson: Event Listeners in React

## Overview

Event listeners are essential for creating interactive web applications. In React, you can attach event handlers to components to respond to user interactions such as clicks, key presses, and form submissions. This lesson will cover how to use event listeners in React, even when not using state.

## Objectives

By the end of this lesson, you will be able to:
- Understand how to attach event listeners in React.
- Implement basic event handlers for user interactions.
- Recognize how to handle events without relying on component state.

## Example Code

### 1. Creating the App Component

Here’s a simple example that demonstrates how to use event listeners in React without using state:

```javascript
import React from 'react';

function App() {
  // Function to handle button clicks
  function handleButtonClick() {
    alert("Button was clicked!");
    // You can also manipulate the DOM directly here
    document.body.style.backgroundColor = "lightblue"; // Direct DOM manipulation
  }

  return (
    <div>
      <h1>Event Listeners Example</h1>
      {/* Button with an onClick event listener */}
      <button onClick={handleButtonClick}>Click Me!</button>
    </div>
  );
}

export default App;
```

### 2. How It Works

- **Event Listener**: The `onClick` event listener is attached to the button. When the button is clicked, the `handleButtonClick` function is invoked.

- **Event Handling**: Inside the `handleButtonClick` function, an alert is displayed to the user indicating the button was clicked. Additionally, we manipulate the DOM directly by changing the background color of the page to light blue.

### 3. Important Concepts

- **Direct DOM Manipulation**: In this example, we manipulate the DOM directly using `document.body.style`. While this works, it is generally not recommended in React applications because React's rendering system is designed to handle updates through state.

- **Event Propagation**: React uses a synthetic event system that wraps the browser's native event, providing consistency across different browsers.

### 4. Common Event Types

Here are some common event types you can use in React:

- `onClick`: Fired when an element is clicked.
- `onChange`: Fired when the value of an input changes.
- `onKeyPress`: Fired when a key is pressed.
- `onMouseEnter`: Fired when the mouse enters an element.

## Conclusion

Event listeners are crucial for building interactive applications in React. In this example, we demonstrated how to handle events without using state management. While it's possible to manipulate the DOM directly, we will explore the importance of state management and proper React practices in future lessons.
