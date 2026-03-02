import React from 'react'
import ReactDOM from 'react-dom/client'

// index.css'
import '../styles/index.css'

// components
import { ListadoTareas } from './components/ListadoTareas';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ListadoTareas/>
  </React.StrictMode>,
)
