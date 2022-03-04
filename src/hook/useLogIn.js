import { useState, useContext, useEffect } from "react";
import { authDashboard } from "../firebase/config";
import { AuthContext } from "../context/AuthContext";


const LogIn = () => {

    const { dispatch } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [cancel, setCancel] = useState(false)


    const logIn = async (email, password) =>{

      try{

        const rez = await authDashboard.signInWithEmailAndPassword(email, password);
        dispatch({type: "LOG_IN", payload: rez.user})

        if(!cancel){
          setError(null)
        }

      }catch(e){
       
        if(!cancel){
          setError(e.message)
        }
      }


    }


    useEffect(() =>{
      return () => setCancel(true)
    }, [])


    return {logIn, error}
    



    
}
 
export default LogIn;