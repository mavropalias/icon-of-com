---
title: MobX
date: '2019-01-01'
spoiler: MobX tips
---

This is a list of things I wish I knew when I started working with MobX.

## Use strict mode

In [strict mode](https://github.com/mobxjs/mobx/blob/gh-pages/docs/refguide/api.md#enforceactions), you can mutate observables only within actions. Enable strict mode with the following code:

```js
import { observable, configure } from 'mobx'

// 'observed' is the recommended strictness mode
// in non-trivial applications.
configure({ enforceActions: 'observed' })
```

#### Why?

MobX allows you to modify stores in two ways; directly or within actions:

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

Actions have the following benefits:

- Improve code readability and make the developer intent clear (i.e. "I want to mutate an observable, not just any object").
- Boost performance by treating the set of changes as one _atomic transaction_. Only one change notification is fired, after all observables are modified.
- Provide useful debugging information in combination with the MobX dev-tools.

## TODO Start by modelling the observable state

## TODO Provide a simple interface to your observers

Instead of doing low-level operations on your store, expose _computed properties_.

Computed properties allow you to focus on the semantics of your store, rather than the core observables.

If you find yourself doing any of the following:

```js
// Processing store arrays
store.array.map()
store.array.forEach()
store.array.reduce()
store.array.length
```

## TODO MST

- Typed observables
- Need to learn a whole new thing
- Opinionated / Enforces consistency

## TODO Core vs Derived state

## TODO Classes vs Functions

## TODO Actions in stores

## TODO Enum properties

## TODO State in MobX / Presentation in React

## TODO Inject store, rather than importing

## TODO Embrace mutability
