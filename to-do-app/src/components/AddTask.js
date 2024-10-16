import React, { Component } from 'react'
import './AddTask.css'

class AddTask extends Component {

    minDate = new Date().toISOString().slice(0,10)
    state = { 
        text : '',
        important: false,
        date: this.minDate,
     } 

     handleClick = () => {
         const{text, date, important} = this.state
         if(text.length>5){
        const added = this.props.addNewTask(text, date, important)
        if(added){
            this.setState({
                text: '',
                important: false,
                date: this.minDate
            })
        }
        } else (
            alert('To short')
        )
     }

     handleText = (e) => {
        this.setState({
            text: e.target.value
        })
     }

     handleCheck = (e) => {
        this.setState({
            important: e.target.checked
        })
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
            <input type='text' placeholder='Dodaj zadanie' value={this.state.text} onChange={this.handleText}></input>
            <input type="checkbox" checked={this.state.important} id='important' onChange={this.handleCheck}/>
            <label htmlFor="important">Priorytet</label>
            <br />
            <label htmlFor="date">   Do kiedy zrobic   </label>
            <input type="date" value={this.state.date} id="date" min={this.minDate} max={maxDate} onChange={this.handleDate}/>
            <button onClick={this.handleClick} className='task'>Dodaj</button>
            </div>
        );
    }
}
 
export default AddTask;