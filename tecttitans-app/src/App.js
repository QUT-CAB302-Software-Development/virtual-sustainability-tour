import React, {useState, useEffect} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import ClipLoader from "react-spinners/ClipLoader";

//  established routing between the four pages of the front end
function App() {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 1000)
    }, [])
    return (
        <div className="App">
            {
                loading?
                <div className="spinner-container">
                <ClipLoader
                color="#36d7b7"
                 loading={loading}
                 size={300}/>
                 </div>
                      :
                       <Router>
                            <Navbar />
                            <AnimatedRoutes />
                       </Router>
            }
        </div>
    );
}

export default App;
