import React, { Component } from 'react'
//import { getMovies } from '../temp/MovieService';
//import { FaBeer } from 'react-icons/fa';
import Pagination from "./Pagination.jsx";
import List from "./List.jsx";
import {Link} from "react-router-dom";
import New from "./New.jsx";
export default class MoviesPage extends Component {
    state={
        movies:[],
        genres:[{id:1 , name:"All Genres"}],
        currSearchText:"",
        limit: 4,
        currPage: 1,
        cGenre: "All Genres"
    }
    deletemovies=(id)=>{
      let copyArr=this.state.movies;
      let filteredmovies=copyArr.filter((movieObj)=>{
        return movieObj._id!==id;
      })
      this.setState({
        movies:filteredmovies
      })

    }
    setCurrentText=(e)=>{
      let task=e.target.value;
      
      this.setState({
        currSearchText:task
      })
    }
    sortByStock=(e)=>{
      let className=e.target.getAttribute('class');
      let sortedMovies;
      let {movies}=this.state;
      if(className==="fas fa-sort-up"){
        sortedMovies=movies.sort((movieobjA,movieobjB)=>{
          return movieobjA.numberInStock-movieobjB.numberInStock;
        })
      }
      else{
        sortedMovies=movies.sort((movieobjA,movieobjB)=>{
          return movieobjB.numberInStock-movieobjA.numberInStock;
        })
      }
      this.setState({
        movies:sortedMovies
      })
    }
    sortByRate=(e)=>{
      let className=e.target.getAttribute('class');
      let sortedMovies;
      let {movies}=this.state;
      if(className==="fas fa-sort-up"){
        sortedMovies=movies.sort((movieobjA,movieobjB)=>{
          return movieobjA.dailyRentalRate-movieobjB.dailyRentalRate;
        })
      }
      else{
        sortedMovies=movies.sort((movieobjA,movieobjB)=>{
          return movieobjB.dailyRentalRate-movieobjA.dailyRentalRate;
        })
      }
      this.setState({
        movies:sortedMovies
      })
    }
    changelimit=(e)=>{
      let currlimit= parseInt(e.target.value);
      if(currlimit<1){
        return;
      }
      this.setState({
        limit:currlimit
      })
    }
    changeCurrentPage=(pageNumber)=>{
      this.setState({
        currPage:pageNumber
      })
    }
    groupBygenre=(name)=>{
      this.setState({
        cGenre:name,
        currSearchText:""
      })
    }
  async componentDidMount(){
      // let respPromise=fetch("https://react-backend101.herokuapp.com/movies");
      // respPromise.then((response)=>{
      //   let backenedMovies=response.json();
      //   backenedMovies.then((jsonMovies)=>{
      //     this.setState({
      //       movies:jsonMovies.movies
      //     })
      //   })
      // })
      //retriving the backended data from the heroku.
      let respPromise=await fetch("https://react-backend101.herokuapp.com/movies");
      let jsonMovies= await respPromise.json();
      this.setState({
        movies:jsonMovies.movies
      });

      respPromise=await fetch("https://react-backend101.herokuapp.com/genres");
      let jsonGenres= await respPromise.json();
      this.setState({
        genres: [...this.state.genres, ...jsonGenres.genres]
      });
    }
  render() {

    let {movies,currSearchText,limit,currPage,genres,cGenre}=this.state;
    let filteredArr=movies;

    if(cGenre!=="All Genres"){
      filteredArr=filteredArr.filter((movieObj)=>{
        return movieObj.genre.name===cGenre;
      })
    }
    
    if(currSearchText!==""){
      filteredArr=filteredArr.filter((movieObj)=>{
      let title=movieObj.title.trim().toLowerCase();
      return title.includes(currSearchText.toLowerCase());
      })
    }

   let numberofPage=Math.ceil(filteredArr.length/limit);
   let si=(currPage-1)*limit;
   let ei=parseInt(limit+si);
   filteredArr=filteredArr.slice(si,ei);

   return(
     <div className="row">
     {/* <FaBeer/> */}
        <div className="col-3">
        <List
        genres={genres}
        groupBygenre={this.groupBygenre}
        ></List>
        </div>
        <div className="col-9">
        <button type="button" class="btn btn-primary">
          <Link to="/new" className='text-light'>New</Link>
        </button>

        {/*<New></New> -> never call any component except app.js*/}
        <input type="search" value={currSearchText} onChange={this.setCurrentText} placeholder="Enter"></input>
        <input type="number" className='col-1' placeholder='no of elements/page' value={limit} onChange={this.changelimit}></input>
        {/* <input type="search" className="pageNumber" placeholder='page Number'></input> */}
          <table className="table">
            <thead>
              <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">
              <i className="fas fa-sort-up" onClick={this.sortByStock}></i>
                Stock
              <i className="fas fa-sort-down" onClick={this.sortByStock}></i>
                </th>
              <th scope="col">
              <i className="fas fa-sort-up" onClick={this.sortByRate}></i>
                Rate
              <i className="fas fa-sort-down" onClick={this.sortByRate}></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredArr.map((movieObj)=>{
                return(
                  <tr scope="row" key={movieObj._id}>
                  <td>{movieObj.title}</td>
                  <td>{movieObj.genre.name}</td>
                  <td>{movieObj.numberInStock}</td>
                  <td>{movieObj.dailyRentalRate}</td>
                  <td>
                    <button type="button" class="btn btn-danger" onClick={()=>{this.deletemovies(movieObj._id)}}>Delete</button>
                  </td>
                  </tr>
                )
                })}
            </tbody>
          </table>
          
          <Pagination
          numberofPage={numberofPage}
          currPage={currPage}
          changeCurrentPage={this.changeCurrentPage}
          ></Pagination>
          
        </div>
      </div>
    )

     
  }
}




