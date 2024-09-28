import React from 'react'

const Task = (props) => {
  const { text, date } = props.task
    return (
        <div>
          <p>
            <strong>{text}</strong> - do <span>{date} </span>
            <button onClick={()=> console.log('Done')} >Zostało zrobione</button>
            <button onClick={()=> console.log('Deleted')}>X</button>
          </p>
        </div>
      );
}
 
export default Task;