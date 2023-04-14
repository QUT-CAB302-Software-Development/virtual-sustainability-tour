import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
function App() {
  return (
      <>
          <Router>
              <Navbar />
              <Routes>
                  <Route path='/' exact element={Home()} />
              </Routes>
          </Router>

      </>



  );
}

export default App;
