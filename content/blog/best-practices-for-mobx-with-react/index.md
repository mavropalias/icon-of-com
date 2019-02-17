---
title: Best practices for MobX with React
date: '2019-01-03'
spoiler: For those that are starting out with MobX.
featured: true
---

This is a list of 8 useful tips and best practices for those that are starting out using MobX with React. It's not meant as an introduction to MobX and it assumes familiarity with its [key concepts](https://mobx.js.org/intro/overview.html).

## 1. Start by modelling the observable state

Before worrying about anything else, model your _observable state_--the data that drives the UI. Keep in mind that observable state is what your app needs to function. It's _not_ meant to be an 1:1 mapping of your database tables/objects. The next step is to identify the necessary _actions_, followed by any _side-effects_.

## 2. Embrace derived state (computed properties)

After modelling the core observable state, think about the derived state. This means thinking how your observers--your UI--are going to consume your observables. The goal it to provide a semantic interface to your observers. Instead of doing low-level operations on your observable state, expose _computed properties_.

If you find yourself doing things like the following:

```js
// Processing observable arrays to get derived values
store.array.forEach()
store.array.reduce()
store.array.filter()
store.array.find()

// Checking array length
if (store.array.length > 0) {
  ...
}

// Combining values
const fullname = store.firstname + store.lastname
```

Or, things where essentially the value that you get from the store is not the final value that you need on your UI, then that sounds like a prime candidate for a computed property.

- If you need to process arrays, your store should do that and provide you with the desired value.
- If you need to check whether an array contains values, your store should provide an `isEmpty` property.
- If you need to combine values (e.g. `firstname + lastname` to `fullname`, your store should provide the final--`fullname`--computed property.

And so forth.

Effectively, what you get from the store should be usable by your UI **without any further processing**. Don't worry about performance. MobX is extremely efficient with computed properties.

> Computed values can't be underestimated, as they help you to make your actual modifiable state as small as possible. Besides that they are highly optimized, so use them wherever possible. -- [MobX](https://mobx.js.org/refguide/computed-decorator.html)

## 3. Embrace mutability

You might assume that MobX--a state-management library, whose creator went on to develop [Immer](https://github.com/mweststrate/immer)-- is all about immutability and functional-style programming. Your assumption could be, reasonably, backed by your experience with other state libraries--like Redux, which enforces immutability.

**MobX is not that kind of library**.

MobX creates mutable objects that you can--and should--mutate, directly. It still enables you to create efficient state-machines; it's just not using immutable structures.

## 4. Use strict mode

MobX allows you to modify state in two ways; directly or within actions:

```js
// mutate directly
store.valueA = 5;
store.valueB = 10;

// mutate in an action
action() {
  this.valueA = 5;
  this.valueB = 10;
}
```

When you modify state in actions, you:

- **Improve code readability** by:
  - making your intent clear (i.e. "I deliberately want to mutate an observable, not just any object"). This will make your life easier, when revisiting that piece of code in the future.
  - making your app more declarative. Wrapping a bunch of mutations in an action, allows you to give a distinct name--that makes sense to your UI--to that operation.
- **Boost performance** by treating the set of changes in the action as one _atomic transaction_. Only one _change_ notification is fired, after _all_ observables have been modified.
- **Make debugging easier**, in combination with the MobX dev-tools.

In [strict mode](https://github.com/mobxjs/mobx/blob/gh-pages/docs/refguide/api.md#enforceactions), you are only allowed to mutate observables within actions. MobX will return an error, otherwise.

Enable strict mode with the following code:

```js
import { observable, configure } from 'mobx'

// 'observed' is the recommended strictness mode in non-trivial applications.
configure({ enforceActions: 'observed' })
```

## 5. Keep your actions in MobX stores

There are two approaches in choosing where to define actions:

#### A. Close to components that need them

One approach is to define actions in component files or utility modules (i.e. defining an action in the same file as a React component). This is the simplest way and might allow you to iterate faster, as you develop the app.

Think about what happens when your app grows.

You might end up with a unruly web of actions that are triggered in many places and modify the store.

- How can you keep track of all the actions?
- How easily can you refactor them?
- How can you avoid code repetition when more than one components need to perform the same action?

Keep in mind that when actions are stand-alone functions in separate files, you will also have to pass the _store_ as a parameter.

#### B. Close to the Store \*\*recommended\*\*

Strive to keep all actions in one location, close to your stores. This will help you keep track of what's going on and debug your app, as you'll only have to look in one place. Define actions in the same file/module as your store; preferably as a store method:

```js
class Person {
  @observable name = ''

  @action setName(name) {
    this.name = name
  }
}

const person = new Person()
person.setName('Kostas')
```

## 6. Class vs Object syntax

MobX allows you to create observables in classes and objects. Here are three examples.

1. Class syntax using `@observable`, `@computed` and `@action` decorators:

```js
class OrderLine {
  @observable price = 0
  @observable amount = 1

  constructor(price) {
    this.price = price
  }

  @computed get total() {
    return this.price * this.amount
  }

  @action setPrice(price) {
    this.price = price
  }
}
```

2. Class syntax using the `decorate()` function:

```js
class OrderLine {
  price = 0
  amount = 1

  constructor(price) {
    this.price = price
  }

  get total() {
    return this.price * this.amount
  }

  setPrice(price) {
    this.price = price
  }
}
// highlight-next-line
decorate(OrderLine, {
  price: observable,
  amount: observable,
  total: computed,
  setPrice: action
})
```

3. `observable.object` syntax:

```js
const orderLine = observable.object(
  {
    price: 0,
    amount: 1,
    get total() {
      return this.price * this.amount
    },
    setPrice(price) {
      this.price = price
    }
  },
  {
    setPrice: action
  }
)
```

Which one should you choose? **It doesn't matter**. MobX supports all three methods equally well--you will not miss out on any functionality. It's only a matter of style and [tooling support](https://mobx.js.org/best/decorators.html) (e.g. your environment must support decorators to use `@observable`, etc). So pick what works best for yourself, your team and project. Once you make a choice, stay consistent.

## 7. Inject store, rather than importing

When you want to use a store in one of your React components, you can just import it (`import store from './store.js'`) and access its properties. That works fine, but there are downsides:

- It's **not idiomatic** MobX. You're using a tool, but deviate from its recommended way of doing things. This might confusion to team members and future code-maintainers.

- It's **less declarative**. Instead of deliberately injecting a _store_, you're importing _some_ module.
- It's **harder to test**.
- It's **harder to do server-side-rendering**.

You might have a reason for not using import; make sure it's a _good_ reason.

The recommended approach is to use `Provider` and `inject`--two components provided by [mobx-react](https://github.com/mobxjs/mobx-react).

> `Provider` is a component that can pass stores (or other stuff), using React's [context API](https://reactjs.org/docs/context.html), to child components. This is useful if you have things that you don't want to pass through multiple layers of components explicitly.

> `inject` can be used to pick up those stores. It is a higher order component that takes a list of strings and makes those stores available to the wrapped component.

Provide one or more stores in a parent component:

```js
...
<Provider productStore={ProductStore} uiStore={UiStore}>
  <div>{children}</div>
</Provider>
...
```

`Inject` takes _provided_ items from context and makes them available as `props`. For example, `inject('productStore')` will take `productStore` from the context and make it available as `this.props.productStore`:

```js
// inject in class component
@inject('productStore')
@observer
class Items extends React.Component {
  render() {
    return <span>{this.props.productStore.itemCount}</span>
  }
}

// inject in function component
const Items = inject('productStore')(
  observer(({ productStore }) => <span>{productStore.itemCount}</span>)
)
```

## 8. mobx-state-tree (MST)

As you might have realised, MobX is quite flexible and you can use it in a variety of ways. If you are looking for a more opinionated alternative, then see [mobx-state-tree](https://github.com/mobxjs/mobx-state-tree).

> "Opinionated, transactional, MobX powered state container combining the best features of the immutable and mutable world for an optimal DX"

MST enforces consistency, supports typed observables and **is quite different from pure MobX**--so there is some learning curve.

## Learn more

If you want to learn more about MobX, I recommend the following resources. Start with the [official MobX documentation](https://mobx.js.org/index.html). It is quite good and I think it's worth going through the whole thing, at least once.

Some highlights:

- [MobX Common pitfalls & best practices](https://mobx.js.org/best/pitfalls.html)
- [Best MobX Practices for building large scale maintainable projects](https://mobx.js.org/best/store.html)
- [Optimizing rendering React components for MobX](https://mobx.js.org/best/react-performance.html)
- [What does MobX react to?](https://mobx.js.org/best/react.html)

Keep in mind that `mobx-react` is a separate package. Read its documentation, [here](https://github.com/mobxjs/mobx-react).

### Books

- [MobX Quick Start Guide](https://www.packtpub.com/web-development/mobx-quick-start-guide)

### Articles

- [MobX React--Best practices](https://medium.com/dailyjs/mobx-react-best-practices-17e01cec4140)
- [The fundamental principles behind MobX](https://hackernoon.com/the-fundamental-principles-behind-mobx-7a725f71f3e8)
- [Becoming fully reactive: an in-depth explanation of MobX](https://hackernoon.com/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254)
