import React, { Component } from 'react';
import '../components/App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  counter = 6
  state = {
    tasks : [
      {
        id:0,
        text:"Skończyć kurs",
        date:"2024-12-22",
        important:false,
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
      },      {
        id:3,
        text:"Skończyć kurs jogi",
        date:"2024-12-22",
        important:false,
        active: true, 
        finisheDate: null
      }, 
      {
        id:4,
        text:"Wyrzyc smieci",
        date:"2024-12-22",
        important:false,
        active: true, 
        finisheDate: null
      },       {
        id:5,
        text:"Kup psa",
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

  addNewTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true, 
      finisheDate: null
    }
    this.counter++
    this.setState(prevState => ({
      tasks:[...prevState.tasks, task]
    }))
    return true
  }
  render() {
    return (
      <div className="App">
        <h1>To Do App</h1>
       <AddTask addNewTask={this.addNewTask}/>
       <TaskList tasks={this.state.tasks} delete={this.deleteTask}  changeStatus={this.changeTaskStatus}/>
      </div>
    );
  }
}

export default App;
