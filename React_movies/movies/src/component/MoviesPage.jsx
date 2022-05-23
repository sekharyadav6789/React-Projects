import React, { Component } from 'react'
//import { getMovies } from '../temp/MovieService';
//import { FaBeer } from 'react-icons/fa';
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
    //console.log("Hi");
    let {movies,currSearchText,limit,currPage,genres}=this.state;
    let filteredArr=this.state.movies.filter((movieObj)=>{
      let title=movieObj.title.trim().toLowerCase();
      return title.includes(currSearchText.toLowerCase());
    })
    if(currSearchText===""){
      filteredArr=this.state.movies;
    }
   // console.log(currSearchText);
   let numberofPage=Math.ceil(filteredArr.length/limit);
   let pageNumberArr=[];
   for(let i=0;i<numberofPage;i++){
     pageNumberArr.push(i+1);
   }
   let si=(currPage-1)*limit;
   let ei=parseInt(limit+si);
   filteredArr=filteredArr.slice(si,ei);
   console.log(typeof limit);
   return(
     <div className="row">
     {/* <FaBeer/> */}
        <div className="col-3">
        <ul class="list-group">
          {
          genres.map((cgObj)=>{
              return(<li class="list-group-item" key={cgObj.id}>{cgObj.name}</li>)
            })
          }
        </ul>
        </div>
        <div className="col-9">
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
          
          <nav aria-label="..." className='col-2'>
            <ul class="pagination">
              {
                pageNumberArr.map((pageNumber)=> {
                  let additional=currPage==pageNumber?"page-item active":"page-item";
                return(
                  <li className={additional} aria-current="page" onClick={()=>{ this.changeCurrentPage(pageNumber)}}>
                  <span className="page-link">{pageNumber}</span>
                  </li>
                )
              })
            }
            </ul>
          </nav>
          
        </div>
      </div>
    )

     
  }
}


