import { useState } from 'react';
import useSignUp from "../hook/useSignUp";



function SignIn() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false)

  const {error, loading, signUp} = useSignUp()

  const send = (e) =>{
    e.preventDefault();

    signUp(email, password, name)

    setName("")
    setEmail("")
    setPassword("")

    

  }

  return (
   
       

       

        
          <form onSubmit={send}>
            <input onChange={(e) => setName(e.target.value)} type="text" placeholder='name' value={name} />
            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='email' value={email} />
            <input onChange={(e) => setPassword(e.target.value)} type={show ? "text" : "password"} placeholder='password' value={password} />
            {loading && <button>Loading</button>}
            {!loading && <button>Add</button>}
            {error && <p>{error}</p>}
            <div onClick={() => setShow(!show)}>{show ? "Hide password" : "Show password"}</div>
           
          </form>
        
  );
}

export default SignIn;
