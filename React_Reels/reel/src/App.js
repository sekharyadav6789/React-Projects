import react, {useState} from 'react';
import './App.css';

function App() {
  const [email, setEmail]=useState("");
  const [password, setPassword]= useState("");
  const handleSubmit = () => {
    alert (email + password);
  }
  return (
   <>
   <h1> Firebase Login </h1>
   <input type="email" value={email} onChange={(e) => {
    setEmail(e.target.value);
   }}></input>
   <input type="password" value={password} onChange={(e) => {
    setPassword(e.target.value);
   }}></input>
   <input type="button" value="submit" onClick={handleSubmit}></input>
   
   </>
  );
}

export default App;
