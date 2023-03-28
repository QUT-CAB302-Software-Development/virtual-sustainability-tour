import React from "react";
import './App.css';
import Home from './pages'
import WelcomeMessage from './pages/index.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
      <Router>
          <WelcomeMessage />
          <Routes>
              <Route path= '/' exact component = {Home}/>
          </Routes>
      </Router>
  );
}

export default App;
