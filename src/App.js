import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LogIn from './pages/LogIn';
import { useState } from 'react';
import useSignUp from "../src/hook/useSignUp"



function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {error, loading, signUp} = useSignUp()

  const send = (e) =>{
    e.preventDefault();

    const logIn = {
      nume: name,
      email: email,
      password: password
    }

    signUp(email, password, name)

    setName("")
    setEmail("")
    setPassword("")

    console.log(logIn)

  }

  return (
    <BrowserRouter>

       

        <div className="App">
          <form onSubmit={send}>
            <input onChange={(e) => setName(e.target.value)} type="text" placeholder='name' value={name} />
            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='email' value={email} />
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' value={password} />
            {loading && <button>Loading</button>}
            {!loading && <button>Add</button>}
            {error && <p>{error}</p>}
           
          </form>
        </div>


        
    
    </BrowserRouter>
  );
}

export default App;
