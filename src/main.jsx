import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Localized from "./components/Localized/Localized.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Localized>
          <App />
      </Localized>
  </React.StrictMode>,
)
