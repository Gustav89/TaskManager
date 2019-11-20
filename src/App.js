import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';

import { todos } from './server/todos.json';

function App() {
  return (
    <div className="App">
        <Navigation title="Task" />
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
