---
title: MobX
date: '2019-01-01'
spoiler: MobX tips
---

This is a list of things I wish I knew when I started working with MobX.

## 1. Start by modelling the observable state

Before worrying about anything else, model your _observable state_ -- the data that drives the UI.

_Observable state_ is what your client app needs to function. It's _not_ an 1:1 mapping of your database tables/objects.

## 1. Embrace derived state (computed properties)

After modelling the core observable state, think about the derived state. This means thinking how your observers -- your UI -- are going to consume your observables.

The goal it to provide a semantic interface to your observers. Instead of doing
low-level operations on your observable state, expose _computed properties_.

If you find yourself doing things like:

```js
// Processing observable arrays to get derived values
store.array.map()
store.array.forEach()
store.array.reduce()
store.array.filter()
store.array.find()

// Checking array length
store.array.length

// Combining values
const fullname = store.firstname + store.lastname
```

or other things where essentially the value that you got from the store is not the final value that you need in your UI, then that looks like a prime example of potential computed properties.

If you need to process arrays, your store should do that and provide you with the desired value.

If you need to check whether an array contains values, your store should provide an `isEmpty` property.

If you need a `fullname`, your store should provide a `fullname` computed property.

Effectively, what you get from the store should be usable by your UI **without any further processing**.

Don't worry about performance. MobX is extremely efficient with computed properties.

> Computed values can't be underestimated, as they help you to make your actual modifiable state as small as possible. Besides that they are highly optimized, so use them wherever possible. -- [MobX](https://mobx.js.org/refguide/computed-decorator.html)

## 1. Use strict mode

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

When you modify state within actions, you:

- Improve code readability by making your intent clear (i.e. "I deliberately want to mutate an observable, not just any object"). This will make your life easier, when revisiting that piece of code in the future.
- Boost performance by treating the set of changes within the action as one _atomic transaction_. Only one _change_ notification is fired, after _all_ observables have been modified.
- Provide useful debugging information in combination with the MobX dev-tools.

In [strict mode](https://github.com/mobxjs/mobx/blob/gh-pages/docs/refguide/api.md#enforceactions), you are only allowed to mutate observables within actions. MobX will return an error, otherwise.

Enable strict mode with the following code:

```js
import { observable, configure } from 'mobx'

// 'observed' is the recommended strictness mode in non-trivial applications.
configure({ enforceActions: 'observed' })
```

## 1. Keep your actions within Stores

There are two approaches in choosing where to define actions:

#### A. Close to components that need them

One approach is to define actions in component files or utility modules (i.e. defining an action in the same file as a React component). This is the simplest way and might allow you to iterate faster, as you develop the app.

Think about what happens when your app grows.

You might end up with a unruly web of actions that are triggered in many places and modify the store.

- How can you keep track of all the action?
- How easily can you refactor them?
- How can you avoid code repetition when more than one components need to perform the same action?

Keep in mind that when actions are stand-alone functions in separate files, you will also have to pass the _store_ as a parameter.

#### B. Close to the Store \*\*recommended\*\*

Strive to keep all actions in one location, close to your Stores. This will help you keep track of what's going on and debug your app, as you'll only have to look in one place.

Define actions in the same file/module as your Store; preferably as a store method.

```js
class Person {
  @observable name = ''

  @action
  setName(name) {
    this.name = name
  }
}

const person = new Person()
person.setName('Kostas')
```

## 1. Class vs Object syntax

MobX allows you to put observables in classes and objects.

Class syntax using `@decorators`:

```js
import { observable, computed } from 'mobx'

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

Class syntax using `decorate()`:

```js
import { decorate, observable, computed } from 'mobx'

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

Object syntax:

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

Which one should you choose? **It doesn't matter**.

MobX supports all three methods equally well -- you will not miss out on any functionality.

It's only a matter of style and tooling support (e.g. your environment must support decorators to use `@observable`). So pick what works best for youself, your team and project.

## TODO Embrace mutability

## Decorators vs Observable (?)

## TODO Enum properties

## TODO State in MobX / Presentation in React

## TODO Inject store, rather than importing

## TODO MST

- Typed observables
- Need to learn a whole new thing
- Opinionated / Enforces consistency
