import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import React from "react";
import useLogOut from "../hook/useLogOut";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
 

const Navbar = () => {

    const {user} = useContext(AuthContext);

    const {logOut} = useLogOut();

    //const user = state.user;


   // console.log(state.user)

    return ( 
        <nav>
            <ul>

                {!user && 

                <>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/signin">SignIn</Link></li>
                    <li><Link to="login">LogIn</Link></li>
                </>
                }

                {user &&
                    <>
                      <li>Hello {user.displayName}</li>
                      <li><button onClick={logOut}>LogOut</button></li>
                    </>
                }



                
            </ul>
        </nav>
     );
}
 
export default Navbar;