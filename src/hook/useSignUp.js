import React, { useState, useContext, useEffect } from 'react'
import {authDashboard} from "../firebase/config";
import { AuthContext } from '../context/AuthContext';



const useSignUp = () => {

    const {dispatch} = useContext(AuthContext)
    const [cancel, setCancel] = useState(false)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const signUp = async (email, password, displayName) =>{
        setLoading(true)
        setError(null)
        
      try{
          const res = await authDashboard.createUserWithEmailAndPassword(email, password);
          console.log(res.user)


          if(!res){
              throw new Error("Nu sa putut conecta")
          }
          await res.user.updateProfile({displayName: displayName})

          dispatch({type: "SIGN_IN", payload: res.user})

          if(!cancel){
              setLoading(false)
              setError(null)
          }
    
      }catch(e){
          if(!cancel){
              setError(e.message)
              setLoading(false)
          }
      }
    
    }

    useEffect(() =>{
        return () => setCancel(true)
    }, [])
    
    return {error, loading, signUp}
}
 
export default useSignUp;

