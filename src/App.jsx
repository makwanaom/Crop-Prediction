import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Calculate from './Components/Calculate/Calculate';
import Footer from "./Components/Footer/Footer"

function App() {
    return (
        <Router>
            <Navbar />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/calculate" element={<Calculate />} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
