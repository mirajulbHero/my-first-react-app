1) What is JSX, and why is it used?_______ JSX, or JavaScript XML, is a syntax extension for JavaScript that allows developers to write HTML-like code directly within JavaScript files. It is primarily used with React to describe the structure of user interfaces.
Why JSX is Used:
Readability and Expressiveness: JSX makes UI code significantly more readable and intuitive by allowing developers to express UI elements using a familiar, HTML-like syntax. This visual representation closely mirrors the actual structure of the UI, making it easier to understand and manage.
Integration of Logic and UI: JSX enables the seamless integration of JavaScript logic and UI markup within the same file or component. This co-location of concerns simplifies development by keeping related code together, improving maintainability and reducing the need to switch between different file types.
Powerful JavaScript Capabilities: Unlike traditional template languages, JSX offers the full power of JavaScript. Developers can embed JavaScript expressions within curly braces {} directly into the JSX markup, allowing for dynamic content rendering, conditional logic, and iteration.
Enhanced Error Messages: When used with React, JSX allows the library to provide more informative and helpful error and warning messages during development, aiding in debugging and code quality.
Simplified Component Creation: JSX simplifies the creation of React elements, which are the fundamental building blocks of React applications. Instead of using React.createElement() calls, which can become verbose, JSX offers a more concise and declarative way to define UI components.
In essence, JSX acts as a syntactic sugar that gets transpiled into regular JavaScript before being executed by the browser. It provides a more efficient and developer-friendly way to build and manage complex user interfaces with React.

2) What is the difference between State and Props? ____ In a React application, props (short for properties) are data passed from a parent to a child component, while state is data managed internally by a component that can change over time. Key differences include: Props are immutable, passed from above, and used for configuring children, whereas state is mutable,
 controlled locally, and used for dynamic data within the component.

3) What is the useState hook, and how does it work? ____The useState hook in React is a function that allows functional components to manage and update state, which is data that can change over time and triggers component re-renders. It returns an array with two values: the current state value and a setter function to update that value. You use array destructuring to assign names to these two values, and then call the setter function to change the state, which in turn causes React to re-render the component and display the updated information. 
How it works
Import useState: First, you must import useState from the React library. 
Call useState: Inside your functional component, you call useState and pass it an initial state value.

4) How can you share state between components in React? ____Sharing state between components in React can be achieved through several methods, depending on the relationship between the components and the complexity of the state management required.
Lifting State Up:
This is the most common and recommended approach for sharing state between related components (parent-child or sibling components).
Process:
Identify the closest common ancestor component of the components that need to share state.
Move the state from the individual child components to this common parent component.
Pass the state and any state-updating functions down to the child components as props.

5) How is event handling done in React? _____Event handling in React is performed using a system of synthetic events and event handlers defined within JSX. This approach provides a declarative and consistent way to manage user interactions across different browsers.
Here's a breakdown of how it works:
Synthetic Events: React wraps the browser's native event system with a "synthetic event" system. This ensures that events behave consistently across various browsers, abstracting away cross-browser inconsistencies. The event object passed to your event handler is a synthetic event.


