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
    const [user, setUser] = useState(null);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {setLoading(false)}, 1800)
    }, [])

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
                    <Navbar user={user} />
                    <Loader setUser={setUser} />
                </Router>
                </AuthProvider>

            }
        </div>

    );
}

export default App;
