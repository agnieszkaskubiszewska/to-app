import React from 'react'

const Task = (props) => {
  const { text, date, id, active, important, finisheDate } = props.task

  const style = {
    color: "red"
  }
    if(active) {
      return (
        <div>
          <p>
            <strong style={important ? style :null}>{text}</strong> - do <span>{date} </span>
            <button onClick={() => props.change(id)} >Zostało zrobione</button>
            <button onClick={() => props.delete(id)}>X</button>
          </p>
        </div>
      );} else 
      { 
        const finished = new Date(finisheDate).toLocaleString()
        return(
          <div>
          <p>
            <strong>{text}</strong> <em>(zrobić do {date})</em><br></br>
            -potwierdzenie wykonania zadania <span>{finished} </span>
            <button onClick={() => props.delete(id)}>X</button>
          </p>
          </div>
        )
      }
}
 
export default Task;