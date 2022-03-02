import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LogIn from './pages/LogIn';
import { useState } from 'react';




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
            <button>Add</button>
          </form>
        </div>


        <Routes>
          <Route path='/login' element={<LogIn/>}></Route>
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;
