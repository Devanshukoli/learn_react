# Questions and Answers

## How Web Apps Works?

- 1. [HTTP & Servers](https://blog.isquaredsoftware.com/2020/11/how-web-apps-work-http-server/)
- 2. [Client Deployment & Development](https://blog.isquaredsoftware.com/2020/11/how-web-apps-work-client-dev-deployment/)
- 3.  [Browsers, HTML & CSS](https://blog.isquaredsoftware.com/2020/11/how-web-apps-work-html-css/)
- 4. [JavaScript & DOM](https://blog.isquaredsoftware.com/2020/11/how-web-apps-work-javascript-dom/)
- 5. [Ajax, APIs & Data Transfers](https://blog.isquaredsoftware.com/2020/11/how-web-apps-work-ajax-apis-data/)

## what the heck is the components anyway?
- A **component** is self-contained, independent, and reusable piece of code that bundles the UI and it's related functionality.
- Though, In _React.js_, **components** are the _main_ building blocks of  the _UI_.
- **Components** are nothing but _JavaScript Functions_ that return a particular piece of UI based on the input.

## 2 Types of Components :)
- **Function Components**.
    - A **function component** is basically a **JavaScript function** that returns a **React element(JSX)**.
    - _They_ are used when you _don't need to managestate or use lifecyle methods_.
    ```javascript
        function Greeting(props) {
            return <h1>Helo, {props.name}!</h1>;
        }
     ```
    - Alternatively, you can use an **arrow function** to define a _function component_.
    ```javascript
        const Greeting = (props) => {
            return <h1>Hello, {props.name}!</h1>
        }
     ```
    - To use a _component_ later, you first _export_ it, by doing something like this :
    ```javascript
        export default Greeting;
    ```
    - Then, when you want to use that, particular component, you _import_ it, by doing something like this : 
    ```javascript
        import Greeting from './Greeting';

        function App() {
            return (
                <div className="App">
                    <Greeting name='Devanshu' />
                </div>
            )
        }
     ```
    - **NOTE** : _The name of the component should always start with a capital letter_.
    - **[Learn more](https://www.robinwieruch.de/react-function-component/)**
- **Class Components**.
    - These are more complex component, that uses ES6 classes.
    - _Class Components_ have a state that can be updated and can use lifecycle methods such as  **`componentDidMount`** and  **`componentWillUnmount`**.
    ```javascript
        class Greeting extends React.Component {
            render() {
                return <h1>Hello, {this.props.name} </h1>
            }
        }
    ```
    - example of _count_ in class component :
    ```javascript
        class Counter extends React.Component {
            constructor(props) {
                super(props)
                this.state = { count : 0}
            }

            increment() {
                this.setState({ count: this.state.count + 1})
            }

            render() {
                return (
                    <div>
                        <p> Count : {this.state.count} </p>
                    </div>
                )
            }
        }
    ```
    - in this example, the `Counter` component has a state that keeps track of the count. The `increment()` method updates the count and calls the `setState()` method to trigger a re-render of the UI.

    - Different from functional components, class components must have an additional `render()` method for return _JSX_.
    - We use _class components_ because of **`state`**, In older version of _React_, it was not possible to use **state** inside _functional components_.
    - It takes _props_(in the constructor) if needed. 
    
- We needed functional components for rendering UI only, whereas we'd use class components for data management and some additional operations(like life-cycle methods.)
- This has changed with introduction of **React Hooks**, and now we can also use states in functional components as well. 
