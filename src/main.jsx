
import ReactDOM from 'react-router-dom/clients'
import React from 'react'
import AppRoutes from './Routing/AppRoutes.jsx'
import {BrowserRouter} from 'react-router-dom' 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
