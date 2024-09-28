import React, { Component } from 'react';
import '../components/App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  
  state = {
    tasks : [
      {
        id:0,
        text:"Skończyć kurs",
        date:"2024-12-22",
        important:true,
        active: true, 
        finisheDate: null
      },
      {
        id:1,
        text:"Skończyć malować obraz",
        date:"2024-12-23",
        important:false,
        active: true, 
        finisheDate: null
      }
    ]
  }

  deleteTask = () => {
    console.log("Deleted wpizdu")
  }
  changeTaskStatus = () => {
    console.log("Zrobione fest")
  }


  render() {
    return (
      <div className="App">
       To Do App
       <AddTask />
       <TaskList tasks={this.state.tasks} delete={this.deleteTask}  changeStatus={this.changeTaskStatus}/>
      </div>
    );
  }
}

export default App;
