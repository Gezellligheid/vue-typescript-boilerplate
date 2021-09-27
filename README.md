# Vue, Typescript boilerplate

This is a boilerplate code that (will) include the following features/examples

- Vue
- Tailwind
- Vuex
- vue-router

## Routing (soon...)

## Vuex (what most of you will be interessed in)

This guide will simply explain how to setup Vuex and how it works.

1. Please take a look at the filestructure under the `/store` directory.

2. Initiate your Store in the index.ts and import all modules you have created there.

3. in main.ts, start the store by using the following code:

```Typescript
import store from './store'

// Initiate app here

app.use(store)

// Mount the app here
```

4. First we will initiate the module with the following object

```Typescript
export default {
	state: null,
	mutations: {},
	actions: {},
	getters: {},
}
```

5. In each module, we will create enums to define the different mutations, getters and actions. This is because we don't want any typo's. Don't forget to export them so they are available to other files.

6. Check out the `NumberModule.ts` to see what we do with the functions and enums.

7. To get the storedata in a component, use the `computed()` function [Example](./src/components/HellowWorld.vue)

8. Use the `store.commit()` function together with the `MutationTypes` as an argument to change the state

9. To use the getters, use `store.getters[]` together with the `GetterTypes` as the selector.

## ⚠️Please check the files to see the code in depth ⚠️

(simply explained and simple examples)
