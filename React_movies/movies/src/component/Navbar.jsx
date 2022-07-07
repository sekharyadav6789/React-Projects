import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link class="navbar-brand" to ="/">Movie Rentals</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <Link class="nav-link" to="/login">Login</Link>
          </ul>
        </div>
      </nav>
    )
  }
}
