import React from 'react';
import ReactDOM from 'react-dom/client';
import { BlogRouting } from './components/BlogRouting';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <BlogRouting/>
    </Router>
  </React.StrictMode>,
)
