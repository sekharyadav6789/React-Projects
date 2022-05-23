import React, { Component } from 'react'

// export default class TaskList extends Component {
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
//                 this.props.taskList.map((taskObj)=>{
//                     return (
//                         <li className="tasklist" key={taskObj.id}>
//                             <p>{taskObj.task}</p>
//                             <button onClick={() => { this.props.dl(taskObj.id) }}>Delete</button>
//                         </li>

//                       )
//                 })
//             }
//         </ul>

//         </div>
//     )
//   }
// }
export default class TaskList extends Component {
    render() {
      return (
          <div className="task-list">
          <ul>
              {/*<li className="task">
                  <p>Task-1</p>
                  <button>Delete</button>
              </li>
              <li className="task">
                  <p>Task-2</p>
                  <button>Delete</button>
              </li>
              <li className="task">
                  <p>Task-3</p>
                  <button>Delete</button>
              </li>*/}
              
              {
                  this.props.list.map((taskObj)=>{
                      return (
                          <li className="tasklist" key={taskObj.id}>
                              <p>{taskObj.task}</p>
                              <button onClick={() => { this.props.delete(taskObj.id) }}>Delete</button>
                          </li>
  
                        )
                  })
              }
          </ul>
  
          </div>
      )
    }
  }