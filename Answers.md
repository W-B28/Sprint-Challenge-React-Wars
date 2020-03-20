# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

It is a Javascript Library used for building interactive, stateful UI's. It allows for immediate changes to be made by the user and the resulting output to be output instantly. React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.  We use components to tell React what we want to see on the screen.
When our data changes, React will efficiently update and re-render our components.

1. What does it mean to think in react?
Think in react refers to thinking in a component hierarchy where data is passed from parent to child to grandchild and so on. When the app  app  renders correctly as a function of props and state flowing down the hierarchy.


1. Describe state.

State holds information that influences the UI in the browser. The information held represents the current "state" of that data. We can then manipulate that "state" to achieve a different desired state. In other words, the State of a component is an object that holds some information that may change over the lifetime of the component.

1. Describe props.

props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).“Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another. But the important part here is that data with props are being passed in a uni-directional flow.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect refers simply to the modification of some kind of state  for instance:Changing the value of a variable, Writing some data to disk, Enabling or disabling a button in the User Interface.
useEffect hook is used for synchronizing state and props.
