import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { render } from "react-dom";
import { types } from "mobx-state-tree";
import { observer } from "mobx-react";


import { wiretap, inspect } from "mobx-wiretap/mst";

// Provide a name as the app name.
wiretap("My test mst app with devtool");

const Todo = types
  .model({
    name: types.optional(types.string, ""),
    done: types.optional(types.boolean, false)
  })
  .actions(self => {
    function setName(newName) {
      self.name = newName;
    }

    function toggle() {
      self.done = !self.done;
    }

    return { setName, toggle };
  });

const User = types.model({
  name: types.optional(types.string, "")
});

const RootStore = types
  .model({
    users: types.map(User),
    todos: types.optional(types.map(Todo), {})
  })
  .actions(self => {
    function addTodo(id, name) {
      self.todos.set(id, Todo.create({ name }));
    }

    return { addTodo };
  });

const store = RootStore.create({
  users: {} // users is required here because it's not marked as optional
});
inspect("Todo", store, ["addTodo"]);

store.addTodo(1, "Eat a cake");
store.todos.get(1).toggle();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
