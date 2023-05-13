import React, {useState, useEffect} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import ClipLoader from "react-spinners/ClipLoader";
import { CircularProgress } from '@mui/material';

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
                loading ? 
                <div className="spinner-container">
                    <ClipLoader
                    color="#36d7b7"
                    loading={loading}
                    size={300}/>
                    <CircularProgress
                    color="primary"
                    size="16rem"
                    thickness={1} />
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
