import React, { useState } from 'react'
import {authDashboard} from "../firebase/config";


const useSignUp = () => {
   
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const signUp = async (email, password, displayName) =>{
        setLoading(true)
        setError(null)
      try{
          const res = await authDashboard.createUserWithEmailAndPassword(email, password);
          
          if(!res){
              throw new Error("Nu sa putut conecta")
          }
          await res.updateProfile({displayName: displayName})
    
          setLoading(false)
          setError(null)
      }catch(e){
          console.log(e.messege)
          setError(e.messege)
          setLoading(false)
    
      }
    
    }
    
    export {error, loading, signUp}
}
 
export default useSignUp;

