import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import file from './file.jsx'
import './index.css'

console.log("file : ", file)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
