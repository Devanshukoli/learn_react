
# **TL;DR** : If a _component_ needs to alter one of its attributes at some point in time, that attribute should part of it's _state_, Otherwise, it should just be a _props_ for that _component_.

# What the hell is **props** and **state** is anyway?
- **props** and **state** are both plain Js _objects_.
- They are just small concepts.
    1. **props** : is short for **properties**. And are a way to pass data from parent to child component.
    - They allow you to pass information down the component tree, making your component more reusalbe and modular.
    - **props** are read-only, meaning that child component can not modify data it receives from it's parent. (**immutable**)
    - They are _components_ **configuration**, A component can not change it's _props_ of it's child component.

    2. **state** : 
    - _state_ is something that _increase complexity and reduce predictability_. Actually, A component without _state_ is preferable. Well I mean, even though you clearly can't do anything without _state_ in an interactive app, It's preferable that you should avoid having too many _stateful components_.
        ### **Component Types** 
        - **Stateless Component** : Only _props_, no _state_. Basically, not much going on besides the `render()` function. And all their logic revoles around props they receive.
        - **Stateful Component** : Both _props_ and _state_. Well, They are incharge of client-server communication(XHR, Web sockets), processing data and reponding to user events.
            - These sort of logic should be encapsulated in a moderate number of _stateful component_, While all visualization logic and formatting logic downstream into as many _Statelss Component_ as possible.

    



# what is the **common** between _props_ and _state_?
- Both _props_ and _state_ are **plain Js Object**.
- Both _props_ and _state_ changes can trigger a **render** update.
- Both _props_ and _state_ are **deterministic**. If your _props_ and _state_ have same value, the same output will be rendered. The same can be said that, if your _component_ has same _props_ and _state_ combination, but generate different _output_, then  it can be said that _something wrong_ there. :smile:



# what is the difference between **props** and **state**?
- Well, In reality, both are nothing but _plain Js objects_. They both hold information that influence the output of render.
- But, **props** get passed _to_ the compoenent _(similar to function parameters)_, whereas **state** is managed _within_ the component _(similar to variables declared withing the function)_.

# Change in **props** and **state**?

| | _props_ | _state_ | 
--- | --- | --- 
Can get initial value from parent Component? | Yes | Yes
Can be changed by parent Component? | Yes | No
Can set default values inside Component?* | Yes | Yes
Can change inside Component? | No | Yes
Can set initial value for child Components? | Yes | Yes
Can change in child Components? | Yes | No
