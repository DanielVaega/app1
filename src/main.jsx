import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyComponent } from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyComponent
      title={"My App"}
      description={ "My component's description." }
    />
  </React.StrictMode>,
)
