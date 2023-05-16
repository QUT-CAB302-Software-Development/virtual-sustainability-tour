import React, {useState, useEffect } from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import Loading from "./components/Loader";
import './App.css';
import Lottie from "lottie-react";
import LoadingAnimation from './videos/LoadingAnimation.json';

//  established routing between the four pages of the front end
function App() {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {setLoading(false)}, 1000)
    }, [])

    return (
        <div className="App">
            {
                loading ? 
                <div className="spinner-container">
                    <Lottie animationData={LoadingAnimation} />
                </div>
                :
                <Router>
                    <Navbar />
                    <Loading />
                </Router>
            }
        </div>
    );
}

export default App;
