import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from "mobx-react";

const App = observer(props => <div>
  <button onClick={e => props.store.addTodo(Math.random() * 10, 'New Task')}>Add Task</button>
  {props.store.todos.values().map(todo =>
    <div>
      <input type="checkbox" checked={todo.done} onChange={e => todo.toggle()} />
      <input type="text" value={todo.name} onChange={e => todo.setName(e.target.value)} />
    </div>
  )}
</div>
)
export default App;
