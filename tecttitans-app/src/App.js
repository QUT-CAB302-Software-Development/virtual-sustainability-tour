import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Tour from './pages/Tour';
import Contact from './pages/Contact';

//  established routing between the four pages of the front end
function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={Home()} />
                    <Route path='/sign-up' element={SignUp()} />
                    <Route path='/tour' element={Tour()} />
                    <Route path='/contact' element={Contact()} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
