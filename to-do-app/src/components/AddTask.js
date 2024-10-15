import React, { Component } from 'react'
import './AddTask.css'

class AddTask extends Component {
    state = { 
        text : '',
        checked: false,
        date: '2024-10-08'
     } 
    render() { 
        return (
            <div className='Form'>
            <input type='text' placeholder='Dodaj zadanie' value={this.state.text}></input>
            <input type="checkbox" checked={this.state.checked} id='important'/>
            <label htmlFor="important">Priorytet</label>
            <br />
            <label htmlFor="date">   Do kiedy zrobic   </label>
            <input type="date" value={this.state.date} id="date" min="2024-10-12" max="2025-10-10"/>
            <button className='task'>Dodaj</button>
            </div>
        );
    }
}
 
export default AddTask;