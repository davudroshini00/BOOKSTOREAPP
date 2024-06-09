import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './Context/AuthProvider.jsx'

ReactDOM.render(
   <BrowserRouter>
     <AuthProvider>
       <div className="dark:bg-slate-900 dark:text-white">
         <App />
       </div>
     </AuthProvider>
   </BrowserRouter>,
   document.getElementById('root')
 );
 
    
  

