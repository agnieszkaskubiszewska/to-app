import React, { Component } from 'react';
import '../components/App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  render() {
    return (
      <div className="App">
       To Do App
       <AddTask />
       <TaskList />
      </div>
    );
  }
}

export default App;
