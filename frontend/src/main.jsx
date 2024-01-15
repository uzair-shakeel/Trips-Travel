import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ToastContainer 
    position="top-center"
    autoClose={2000}
    pauseOnHover={true}
    closeOnClick={true}
    draggable={true} />
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
