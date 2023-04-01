import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../components/Navbar/navbar.css'


function redirecto() {
    alert('You are being redirected');
}

// TODO: add visualization elements (i.e some map images to enhance landing page)
function WelcomeMessage()
{
    return (
    <div className="bg">
        <div className="welcome-message">
            <h1>Welcome to TechTitans!</h1>
            <h3>We are excited to have you here.</h3>
            <p className="center">Our project is a virtual sustainable tour. Below you will be redirected to a
            2D Map that provides accommodation, transportation, and disability accessible data in
            an interactive environment in Brisbane City,</p>

            <a href=".../components/2dmap/index.js" target="_blank"><button onClick={redirecto} className="button">See 2D Map</button></a>
        </div>
     </div>
    );
}
const Home = () => {
    return (
        <div>
            <Navbar />
            <WelcomeMessage />
            <Footer />
        </div>
    );
};


export default Home;

