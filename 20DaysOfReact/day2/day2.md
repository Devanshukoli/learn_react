# What are Components?
- It is thought as _lego_ or _building block_ for **UI**.
- They are like _re-usable_ piece of code that can be _later put it as it is_ or _customize_ as well for making whole web application.

- But in React, components are defined as JavaScript function or classes that return JSX, describing what should be rendered on the screen.

- React components names **MUST** start with **Capital letters**.

- 2 common ways to create components : 
    1. Functional component : They are simply like regular javascript functions.

    ex : Example of function comp.
    ``` 
        function ThisIsCompoentn(props) {
            return <h1>Hello,{props.name}!</h1>;
        }
    
    ``` 

    2. Class component : These components are simple classes (made up of multiple functions that add functionality to the application.)

    ex : Example of Class comp.
    ```
        Class App extends React.Component {
            render() {
                return <h1> ok, hi</h1>
            }
        }
    ```

    **NOTE** : Here, `React.Component` keyword _must_ included in all class components. Because it gave *Inheritance* to your component.

# What do you mean by rendering a component?
- It basically means that process of displaying or showing your compoent's UI on webpage.

- Actually, you are instructing React to take the component's description(typically written in JSX) and transform it into actual HTML elements that appear on the screen.

- To render the component : 
    - include the file in the header of `App.js` and pass the props.
        - <Component_name prop = "value" />

# What are Props?
- props is shorthand for **Properties**.
- And they are way to pass data from _parent comp._ to _child comp._.

- Props are read-only, meaning that child components cannot modify the data they receive via props. 
- They are purely for receiving data and using data.