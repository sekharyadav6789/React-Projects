//react snippets
//rcc
import React, { Component } from 'react'
import TaskList from './TaskList';
import InputContainer from './InputContainer';
//1.render -> static ui define
//2. identify different variables that can change throughout the life time
//3. rewrite render using those state variables
//4. event listener to change the state
export default class Todo extends Component {
    //Super class will be omitted here so no need to define
    state={
        taskList: [],
        //currTask:""
    }

    deleteTask=(id)=>{
        let filteredtasks=this.state.taskList
        .filter(function(task){
            return task.id !==id;
        })
        this.setState({
            taskList: filteredtasks
        });
    }

    // handleCurrTask=(event)=>{
    //     let currValue=event.target.value;
    //     this.setState({
    //         currTask: currValue
    //     })
    // }

    addTask =(currTask)=>{
        //let currTask=this.state.currTask;
        // let tempArr=[];
        // for(let i=0;i<this.state.taskList.length;i++){
        //     tempArr.push(this.state.taskList[i]);
        // }
        // tempArr.push(currTask);
        //we can also add in this way
        //let tempArr=[...this.state.taskList, this.state.currTask]
        let tempArr=[...this.state.taskList,{ task: currTask, id: this.state.taskList.length }]
        this.setState({
            taskList: tempArr,
            currTask:""
        })
    }
  render() {
    return (
        <div>
          {/*Todo App*/}
          {/* <div className="input-container">
              <input type="text" value={this.state.currTask} onChange={this.handleCurrTask}></input>
              <button onClick={this.addTask}>submit</button>
          </div> */}
          {/*passing props to children component */}
          {/* <TaskList taskList={this.state.taskList}
           dl={this.deleteTask}></TaskList> */}
           <InputContainer addTask={this.addTask}></InputContainer>
           <TaskList list={this.state.taskList}
           delete={this.deleteTask}></TaskList>
        </div>
    )
  }
}

// class InputContainer extends Component {
//     state={
//         currTask:""
//     }
//     handleCurrTask=(event)=>{
//         let currValue=event.target.value;
//         this.setState({
//             currTask: currValue
//         })
//     }
//     sendcurrentTaskToparent=() => {
//         this.props.addTask(this.state.currTask);
//         this.setState({
//             currTask:""
//         })
//     }
//     render(){
//         return(
//             <div className="input-container">
//               <input type="text" value={this.state.currTask} 
//               onChange={this.handleCurrTask}></input>
//               <button onClick={this.sendcurrentTaskToparent}>submit</button>
//             </div>
//         )
//     }
// }

// class TaskList extends Component {
//   render() {
//     return (
//         <div className="task-list">
//         <ul>
//             {/*<li className="task">
//                 <p>Task-1</p>
//                 <button>Delete</button>
//             </li>
//             <li className="task">
//                 <p>Task-2</p>
//                 <button>Delete</button>
//             </li>
//             <li className="task">
//                 <p>Task-3</p>
//                 <button>Delete</button>
//             </li>*/}
            
//             {
//                 this.props.list.map((taskObj)=>{
//                     return (
//                         <li className="tasklist" key={taskObj.id}>
//                             <p>{taskObj.task}</p>
//                             <button onClick={() => { this.props.delete(taskObj.id) }}>Delete</button>
//                         </li>

//                       )
//                 })
//             }
//         </ul>

//         </div>
//     )
//   }
// }
