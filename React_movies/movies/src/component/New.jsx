import React, { Component } from 'react'

export default class New extends Component {
  handleSubmit=()=>{
    
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">
          Title:
          <input type="text" id="title"/>
        </label>

        <label htmlFor="genre">
          Genre
          <select>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Thriller">Thriller</option>
          </select>
        </label>

        <label htmlFor="stock">
          Stock
          <input type="number" id="stock"/>
        </label>

        <label htmlFor="rate">
          Rate
          <input type="number" id="rate"/>
        </label>
      </form>
    )
  }
}
