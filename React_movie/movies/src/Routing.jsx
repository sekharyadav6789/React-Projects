import React, { Component } from 'react'
//npm install react-router-dom
import { Route, Switch, Redirect, Link } from "react-router-dom";
export default class Routing extends Component {
  render() {
    return (
      <div>
          Routing Example
          {/*path -> '/' -> home*/}
          {/* /home -> home*/}
          {/*Profile -> profile*/}
          {/*listing -> listing*/}
          {/* not a match -> error*/}
          {/*ui*/}
          <ul>
          <li><Link to ="/home/profile">Profile</Link></li>
          <li><Link to="/listing">Listing</Link></li>
          <li><Link to="/home">Home</Link></li>
          </ul>

          {/*logic*/}
          <Switch>
            <Route path="/home/profile" component={Profile}></Route>
            <Route path="/listing" component={Listing}></Route>
            <Redirect from="/home" to="/"></Redirect>
            <Route path="/" exact component={Home}></Route>
            <Route component={Error}></Route>
          </Switch>
      </div>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div>
          Home
      </div>
    )
  }
}

class Profile extends Component {
    render() {
      return (
        <div>
         Profile
        </div>
      )
    }
}

class Listing extends Component {
    render() {
      return (
        <div>
          Listing
        </div>
      )
    }
}

class Error extends Component {
    render() {
      return (
        <div>
          Error
        </div>
      )
    }
}
  