import logo from './logo.svg';
import './App.css';
import MoviesPage from './component/MoviesPage';
import New from './component/New';
import Login from './component/Login';
import { Route, Switch, Redirect, Link } from "react-router-dom";
import Navbar from './component/Navbar';
function App() {
  return (
  <>
  <Navbar></Navbar>
 <Switch>
  <Route path="/New" component={New}></Route>
  <Route path="/login" component={Login}></Route>
  <Route path ="/" exact component={MoviesPage}></Route>
 </Switch>
  
   </>
    
  );
}

export default App;
