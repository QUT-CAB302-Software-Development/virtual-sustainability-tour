import React from 'react'
import { Route, Routes, useLocation} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import SignUp from '../pages/SignUp';
import Tour from '../pages/Tour/Tour';
import Login from '../pages/Login';
import Landing from '../pages/Home/Landing'
import '../App.css';


function AnimatedRoutes() {
    const location = useLocation();

    return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' exact element={Landing()} />
             <Route path='/sign-up' element={SignUp()} />
             <Route path='/tour' element={Tour()} />
             <Route path='/login' element={Login()} />
        </Routes>
    </AnimatePresence>
    )
}

export default AnimatedRoutes;