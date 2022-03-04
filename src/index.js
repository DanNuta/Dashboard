import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ContextAuth from './context/AuthContext';


ReactDOM.render(

  <ContextAuth>
    <App />
  </ContextAuth>
  
  ,
  document.getElementById('root')
);

