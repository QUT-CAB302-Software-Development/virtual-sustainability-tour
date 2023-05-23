import React from 'react'
import { Route, Routes, useLocation} from "react-router-dom";
import '../App.css';
import SignUp from '../pages/SignUp';
import Tour from '../pages/Tour/Tour';
import Login from '../pages/Login';
import View360 from '../pages/Tour/demo/View360';
import Landing from '../pages/Home/Landing'

import { AnimatePresence } from 'framer-motion';
function AnimatedRoutes() {
    const location = useLocation();

    return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' exact element={Landing()} />
             <Route path='/sign-up' element={SignUp()} />
             <Route path='/tour' element={Tour()} />
             <Route path='/login' element={Login()} />
             <Route path='/view360' element={View360()} />
        </Routes>
    </AnimatePresence>
    )
}

export default AnimatedRoutes;