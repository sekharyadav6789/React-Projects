import React, { Component } from 'react'
 export default class InputContainer extends Component {
    state={
        currTask:""
    }
    handleCurrTask=(event)=>{
        let currValue=event.target.value;
        this.setState({
            currTask: currValue
        })
    }
    sendcurrentTaskToparent=() => {
        this.props.addTask(this.state.currTask);
        this.setState({
            currTask:""
        })
    }
    render(){
        return(
            <div className="input-container">
              <input type="text"
              value={this.state.currTask} 
              onChange={this.handleCurrTask}></input>
              <button onClick={this.sendcurrentTaskToparent}>submit</button>
            </div>
        )
    }
}