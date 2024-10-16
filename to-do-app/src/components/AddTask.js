import React, { Component } from 'react'
import './AddTask.css'

class AddTask extends Component {

    minDate = new Date().toISOString().slice(0,10)
    state = { 
        text : '',
        checked: false,
        date: this.minDate
     } 

     handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
     }
    render() { 
        let maxDate = this.minDate.slice(0,4) * 1 + 1;
        maxDate = maxDate+ "-12-31" 
        return (
            <div className='Form'>
            <input type='text' placeholder='Dodaj zadanie' value={this.state.text}></input>
            <input type="checkbox" checked={this.state.checked} id='important'/>
            <label htmlFor="important">Priorytet</label>
            <br />
            <label htmlFor="date">   Do kiedy zrobic   </label>
            <input type="date" value={this.state.date} id="date" min={this.minDate} max={maxDate} onChange={this.handleDate}/>
            <button className='task'>Dodaj</button>
            </div>
        );
    }
}
 
export default AddTask;