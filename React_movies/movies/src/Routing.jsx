import React, { Component } from 'react'

export default class Routing extends Component {
  render() {
    return (
      <div>
          Routing Example
          {/*path -> '/' -> home*/}
          {/*Profile -> profile*/}
      </div>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div>Home</div>
    )
  }
}

class Profile extends Component {
    render() {
      return (
        <div>Profile</div>
      )
    }
}

class Listing extends Component {
    render() {
      return (
        <div>Listing</div>
      )
    }
}

class Error extends Component {
    render() {
      return (
        <div>Error</div>
      )
    }
}
  