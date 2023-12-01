# what is jsx?

- **JSX** is _syntax extension_ for Javascript that lets you write HTML-like markup inside JavaScript file.
- So, the _story_ goes like this : Most of the time when you create _webpage_ OR _website_, **HTML for content**, **CSS for styling**, and **JavaScript for interactivity/logic**.
- Over the years, web become more interactive, and then developers though, why not put thing two things together, I mean **HTML** and **JavaScript**.
- And that's how **JSX** was born. :) In, **React : rendering logic and markup live together in the same place -- components**.
- for example,
```javascript
    // sidebar.js (react compoenent)
    sidebar() {
        if(isLoggedIn()) {
            <p>Welcome</p>
        } else {
            <Form />
        }
    }

    // form.js (react component)
    Form() {
        onClick() {...}
        onSubmit() {...}
        <form onSubmit>
            <input onClick />
            <input onClick />
        </form>
    }
```

# Different ways of using JSX?
- Sometimes you will want to add a little Js logic or reference a dynamic property inside that markup. 
- In that kind of situation, You can use curly braces in your JSX for using Js expression.
    1. **Passing strings with quotes**
    ```javascript
        export default function Avatar() {
            return(
                <img 
                    className = "Avatar"
                    src = "..."
                    alt = "nameOfAvatar"
                 />
            )
        }
    ```
    - Here, we are passing a string to the `src` or `alt` attribute.
    - Now, what if we want to dynamically set the value, then we can do something like this, 
    ```javascript
        export default function Avatar(props) {
            return(
                <img 
                    className = "Avatar"
                    src = {props.src}
                    alt = {props.alt}
                 />
            )
        }
    ```
    2. **Using curly braces**
    - JSX is a special way of writing Js. 
    ```javascript
        export default function TodoList() {
            const name = 'Todo List'
            return (
                <h1>{name}'s to To Do List.</h1>
            )
        }
    ```
    ## Question: Where to use curly braces
    - Mainly two ways 
            1.**As text directly inside a JSX tag**: `<h1>{name}'s To Do List</h1>` works because `{name}` is a Js expression. But `<{tag}>personName's To Do List</{tag}>` will not.
            2. **As attributes immediately following the `=` sign**: `src={avatar}` will read the `avatar` variable, but `src="{avatar}"` will pass the string "{avatar}".
    3. **Using 'double curlies': CSS & Other Objects**
    - Sometimes you will want to pass a Js object to your component, like a style object for CSS.
    - for example,
    ```javascript
        export default function TodoList() {
            return (
                <ul style={{
                    backgroundColor: 'white',
                    color: 'black'
                    }}>
                    <li>Improve the videophone</li>
                    <li>Prepare aeronautics lectures</li>
                    <li>Work on the alcohol-fuelled engine</li>
                </ul>
            );
        }
    ```

# Does Browser understand this so called **JSX**?
- Unfortunetly, **NO**. Browser does not understand this **JSX**.
- So, each _React component_ is a _JavaScript function_ that contains markup that renders it into browser. And In React, we use **JSX** for that.
- Now, **Browser does not understand this JSX**. So, _question arise how to we solve this problem_? 
- Well, The answer is simple, the **Term** called **JSX Transfrom** come to play. Hmm, Well you can read more about it [here](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#whats-different-in-the-new-transform)
- **TL;DR** : JSX is transformed into JavaScript at build time by a compiler called **Babel**. This compiler is configured to transform JSX into a function call called **`React.createElement()`**.

# Is there some kind of rule to follow along when using JSX?
- YES.
    1. **Return Single root element** : For returing multiple elements from a component, wrap them in the single parent tag, like `<>` or `<div>`. here, If you dont' want to add extra `div` tag, you can use `<>` instead.

        ## Question : Why do multiple JSX needs to be Wrapped?
        - JSX looks like HTML, but under the hood it is transformed into plain js Objects.**You can't return two objects from a function witout wrapping them into the array**. Then, This also explains why you also can't return two JSX tags without wrpping them into another tag or a Fragment. 
    2. **Close All the tags** : JSX requires tags to be closed. Self-closing tags like `<br>` to be closed as `<br />` and wrapping tags like `<p>` to be closed as `<p></p>`.
    3. **camalCase all things** : JSX turns into Js and attributs written in JSX become keys of Js objects.
        - Js limitation on variables names, like you can't use **Reserved** keywords like `class` and `for` as attribute names. So, you can use `className` and `htmlFor` instead.
- **TIP** : Use [Converter](https://transform.tools/html-to-jsx).


# What the hell is this `<>` and `</>`?
- Well, these are called **[Fragment](https://react.dev/reference/react/Fragment)**.
- So, Wrap elements in `<Fragment>` to group them together in situation where you need a single element. Grouping element in `<Fragment>` has no effect on the resulting _DOM_. It is the same as if the elements were not wrapped in the first place.
- This empty `<>...</>` is shorthand for `<Fragment>...</Fragment>`.  
- **TL;DR** : Fragments let you group a list of children without adding extra nodes to the DOM.

# Are there any other way to write html like code in js beside using jsx?
- YES.

- **Template Literals**, which were introduced in ECMAScript 6. _Template literals_ allow you to embed expressions and multiline strings in your JavaScript code using backticks(``) instead of single or double quotes.
    - for example
    ```javascript
        const element = `
            <div class = 'my-component'>
                <h1>Hello, World!</h1>
                <p>This is my component.</p>
            </div>
        `;
    ```
    - in this example, we are using _template literals_ to crete a string represents an HTML like element with  `div` element, an `h1` element, and a `p` element.
    - However, using _template literals_ for this purpose can quickly become _cumbersome and hard to maintain as the complexity of the UI increases_. This is why **JSX** is the preferred method for defining UI components in React.js

- **functions like `createElement()` or `createTextNode()`**, to create DOM elements programmatically.
    - while this approach can be useful in certain situations where you need fine-grained control over the creation and manipulation of DOM elements.
    - for example, 
    ```javascript
        const element = document.createElement('div');
        element.className = 'my-component';

        const heading = document.createElement('h1');
        heading.textContent = 'Hello, World!';

        const paragraph = document.createElement('p');
        paragraph.textContent = 'This is my component.';

        element.appendChild(heading);
        element.appendChild(paragraph);
    ```
    - In this example, we are using **`createElement()`** function to create a **`div`**, **`h1`**, and **`p`** element, and then using the **`appendChild()`** function to add the **`h1`** and **`p`** elements as childeren of the **`div`** element.

- **templating library : Handlebars, Mustache, or EJS**
    - These libraries allow you to write templates ina separate file that contains placeholders for data that will be inserted at runtime.
    - The template engine then generates the HTML output by replacing the placeholder with the actual data.
    - for example, 
    ```javascript
        const element = document.createElement('div');
        element.className = 'my-component';

        const heading = document.createElement('h1');
        heading.textContent = 'Hello, World!';

        const paragraph = document.createElement('p');
        paragraph.textContent = 'This is my component.';

        element.appendChild(heading);
        element.appendChild(paragraph);
    ```