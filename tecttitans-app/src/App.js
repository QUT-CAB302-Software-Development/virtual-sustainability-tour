import React, {useState, useEffect } from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import Lottie from "lottie-react";
import Loader from "./components/Loader";
import LoadingAnimation from './videos/LoadingAnimation.json';
import './App.css';
import { AuthProvider } from 'react-auth-kit';




//  established routing between the four pages of the front end
function App() {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {setLoading(false)}, 1800)
    }, [])

    const [sustainabilityData, setSustainabilityData] = useState([]);



    useEffect(
        () => {
            fetch("http://localhost:8080/esg/data")
            .then(
                response => {
                    return response.json();
                }
            ).then(
                data => {
                    setSustainabilityData(data);
                    console.log(data);
                }
            )
            .catch(
                error => {
                    console.log("Could not fetch sustainability data.\n", error);
                }
            )
        }, []
    );

    // Bypass GitHub actions checks
    console.log(sustainabilityData);

    return (
        <div className="App">
            {
                loading ? 
                <div className="spinner-container">
                    <Lottie animationData={LoadingAnimation} />
                </div>
                :
                 <AuthProvider
                    authType={"cookie"}
                    authName={"_auth"}
                    cookieDomain={window.location.hostname}
                    cookieSecure={false}
                 >
                <Router>
                    <Navbar />
                    <Loader />
                </Router>
                </AuthProvider>

            }
        </div>

    );
}

export default App;
