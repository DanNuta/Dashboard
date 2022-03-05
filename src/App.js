import { BrowserRouter, Routes, Route, useNavigate, Navigate} from "react-router-dom";
import SignIn from './pages/SignIn';
import { useState } from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import useAuthContext from "./hook/useAuthContext";



const App = () => {

  

  const {authIsReady, user} = useAuthContext();

  return ( 
    <div>
      {authIsReady && (
        <BrowserRouter>
        <Navbar/>
  
  
        <Routes>
          <Route path="/" element={ user ? <Home/> : <Navigate to="/login"/>}></Route>
          <Route path="/signin" element={ !user ? <SignIn/> : <Navigate to="/"/>}></Route>
          <Route path="/login" element={ !user ? <LogIn/> : <Navigate to="/login"/>}></Route>
  
        </Routes>
      </BrowserRouter>
      )}
    </div>
   );
}
 
export default App;
