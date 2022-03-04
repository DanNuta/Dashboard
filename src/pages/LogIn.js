import { useState } from "react";
import useLogIn from "../hook/useLogIn";


const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {logIn, error} = useLogIn();


    const submit = (e) =>{
        e.preventDefault()

        setEmail("")
        setPassword("")

        logIn(email, password)
    }

    return ( 
        <form onSubmit={submit}>
            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" value={email} />
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" value={password} />
            <button>Add</button>
            {error && <p>{error}</p>}
        </form>
     );
}
 
export default LogIn;