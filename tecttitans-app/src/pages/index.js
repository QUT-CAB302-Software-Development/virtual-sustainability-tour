import React from 'react'
import Navbar from "../components/Navbar";
import '../components/Navbar/navbar.css'

function WelcomeMessage()
{
    return (
        <div className="welcome-message">
            <h1>Welcome to TechTitans!</h1>
            <p>We are excited to have you here.</p>
        </div>
    );
}
function Footer()
{
    return (

        <footer className="footer">
            <h></h>
            <p>&copy; 2023 TechTitans. All rights reserved.</p>
        </footer>
    )
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

