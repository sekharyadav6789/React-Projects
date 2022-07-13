import React, { Component } from 'react'

export default class New extends Component {
  state = {
    data: {
        title: "",
        genre: "",
        stock: "",
        rate: ""
    }
  }
  handleSubmit=(e)=>{
    //The preventDefault() method does not prevent further propagation of an event through the DOM.
    e.preventDefault();
    this.props.addMovie(this.state.data);
  }
  handleChange=(e)=>{
    let id=e.currentTarget.id;
    //console.log(id)
    let value = e.target.value;
    let newobject = { ...this.state.data };
    newobject[id] = value;

    this.setState({
        data: newobject
    })
  }
  render() {
    let { title, genre, stock, rate } = this.state.data;
    return (

      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">
          Title:
          <input type="text" id="title" value={title} onChange={this.handleChange}/>
        </label>

        <label htmlFor="genre" value={genre} onChange={this.handleChange}>
          Genre
          <select>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Thriller">Thriller</option>
          </select>
        </label>

        <label htmlFor="stock" value={stock} onChange={this.handleChange}>
          Stock
          <input type="number" id="stock"/>
        </label>

        <label htmlFor="rate" value={rate} onChange={this.handleChange}>
          Rate
          <input type="number" id="rate"/>
        </label>

        <input type="submit" value="Submit" />
      </form>
    )
  }
}
