<!-- Questions And Answer for Assignment-07 -->
Question-01: What is JSX, and why is it used?

Ans: JSX is from of Javascript XML. syntax extension for JavaScrip XML.write code look very same to HTML inside JavaScript files. It is used in React to describe the structure of the user interface.




Question-02: What is the difference between State and Props?

Ans: Use State for data that the component need to modify form input, toggle, counter. Use Props for passing data from parent to child component configuration, display data, event handler.





Question-03: What is the useState hook, and how does it work?

Ans: useState hook is a fundamental React hook that allows functional components to manage local state.useState hook works by leveraging React's internal state management system to track and update component state across re-renders. When you call useState for the first time, React creates a state slot in its internal memory associated with that specific component instance and hook call position,



Question-04: How can you share state between components in React?

Ans: most common approach is lifting state up. where you move the share state to the nearest common parent component and pass it down as props to child component that need it.with callback function to allow children to update the state.




Question-05: How is event handling done in React?

Ans:  React uses camelCase name convention for event handler like onClick, onChange, onSubmit instead of the lowercase HTML attribute, and handler are pass as function to JSX element props. When an event occur, React creates a SyntheticEvent object that wraps the native DOM event, providing the same methods and property.