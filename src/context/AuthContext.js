import { createContext, useEffect, useReducer } from "react";
import { authDashboard } from "../firebase/config";

export const AuthContext = createContext();

const ContextAuth = (props) => {

    const authReducer = (state, action) =>{
       switch (action.type) {

        case "LOG_IN":
            return {...state, user: action.payload}

        case "LOG_OUT":
            return {...state, user: null}

        case "SIGN_IN":
            return {...state, user: action.payload}

        case 'AUTH_IS_READY':
            return {...state, user: action.payload, authIsReady: true}
          
       
           default:
               return state
       }

    }


    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        authIsReady: false
    })


    console.log(state)


    useEffect(() =>{
       const unsub = authDashboard.onAuthStateChanged((user) =>{
            dispatch({type: 'AUTH_IS_READY', payload: user})

            unsub()

        })
    }, [])


   

    return ( 
        <AuthContext.Provider value={{...state, dispatch}}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default ContextAuth;