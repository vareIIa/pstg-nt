import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '/index.css'

// essa função renderiza o App dentro do elemento com id 'root'
// ela é chamada uma vez, quando a página é carregada
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
