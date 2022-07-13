import logo from './logo.svg';
import './App.css';
import MoviesPage from './component/MoviesPage';
import New from './component/New';
import Login from './component/Login';
import { Route, Switch } from "react-router-dom";
import Navbar from './component/Navbar';
import React, { Component } from 'react'


export default class App extends Component {
  state={
    movies:[]
  }

  setMovies=(array)=>{
    this.setState({
      movies: array
    })
}

deleteEntry=(id)=>{
  let copyArr=this.state.movies;
  let filteredMovies=copyArr.filter((movieObj)=>{
    return movieObj._id!==id;
  })
  this.setState({
    movies: filteredMovies
  })
}

async componentDidMount(){
  let respPromise=await fetch("https://react-backend101.herokuapp.com/movies");
  let jsonMovies= await respPromise.json();
    this.setState({
      movies:jsonMovies.movies
    });
}

addMovie=(obj)=>{
  let { title, genre, stock, rate } = obj;
  let genreObj=[{_id:"5b21ca3eeb7f6fbccd471818", name:"Action"},
{_id:"5b21ca3eeb7f6fbccd471820", name:"Thriller"},
{_id:"5b21ca3eeb7f6fbccd471814", name:"Comedy"}
];

for(let i=0;i<genreObj.length;i++){
  if(genreObj[i].name===genre){
    genre=genreObj[i];
  }
}

let movieObj={
  _id: Date.now(),
  title,
  genre,
  dailyRentalRate: rate,
  numberInStock: stock
}

let copyofMovies={...this.state.movies, movieObj};
this.setState({
  movies: copyofMovies
})

}
  render() {
    return (
      <>
      <Navbar></Navbar>
      <Switch>
        <Route path="/New" render={
          (props)=>{
            return (<New {...props}
            addMovie={this.addMovie}
            ></New>)
          }
        }></Route>

        <Route path="/login" component={Login}></Route>

        <Route path ="/" render={(props =>{
          return (<MoviesPage {...props}
            deleteEntry={this.deleteEntry}
            movies={this.state.movies}
            setMovies={this.setMovies}
            ></MoviesPage>)
        })}></Route>
      </Switch>
    </>
    )
  }
}
















// function App() {
//   return (
//   <>
//   <Navbar></Navbar>
//  <Switch>
//   <Route path="/New" component={New}></Route>
//   <Route path="/login" component={Login}></Route>
//   <Route path ="/" exact component={MoviesPage}></Route>
//  </Switch>
//    </>
    
//   );
// }

// export default App;