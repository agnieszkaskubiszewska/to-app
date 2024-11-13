import React from 'react'
import Task from './Task';

const TaskList = (props) => {
    const active = props.tasks.filter(task => task.active)
    const done = props.tasks.filter(task => !task.active)
    done.sort((a,b) => b.finisheDate - a.finisheDate )
    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.changeStatus}/>)
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.changeStatus}/>)
    
    return (
        <>
        <div className='active'>
            <h1>Zadania do zrobienia</h1>
            {activeTasks.length > 0 ? activeTasks : <p>Nic do zrobienia</p>}
        </div>
            <hr />
        <div className='done'>
              <h3>Zadania zrobione total <em>{done.length}</em>   </h3>
              {done.length > 5 && <span style={{fontSize:"10px"}}>Wyswietlamy ostatnie 5 elementow</span>}
              {doneTasks.slice(0,5)} 
              </div>
        </>
      );
}
 
export default TaskList;