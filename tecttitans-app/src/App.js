import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";
//  established routing between the four pages of the front end
function App() {
    return (
        <>
            <Router>
                <Navbar />
                <AnimatedRoutes />
            </Router>
        </>
    );
}

export default App;
