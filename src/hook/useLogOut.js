import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { authDashboard} from "../firebase/config"

const useLogIn = () => {
    const [cancel, setCancel] = useState(false)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const {dispatch} = useContext(AuthContext);

    const logOut = async () =>{
        setError(null)
        setLoading(true)

        try{

            await authDashboard.signOut()

            dispatch({type: "LOG_OUT"})

            if(!cancel){

                setError(null)
                setLoading(false)
            }


        }catch(e){

            if(!cancel){

                setLoading(false)
                setError(e.message)
            }
        }



    }

    useEffect(() =>{
        return () =>setCancel(true)
    }, [])

    return {error, loading, logOut}

   
}
 
export default useLogIn;