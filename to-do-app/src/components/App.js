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
      },
      {
        id:2,
        text:"Skończyć malować sciane",
        date:"2024-12-22",
        important:false,
        active: true, 
        finisheDate: null
      }
    ]
  }

  deleteTask = (id) => {
    const tasks = [...this.state.tasks]
    const index = tasks.findIndex(task => task.id === id)
    tasks.splice(index, 1)

    this.setState({
      tasks
    })
  }
  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks]
    tasks.forEach(task => {
      if(task.id === id){
        task.active = false
        task.finisheDate =  new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
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
