import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './components/Main';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
    return (
        <Router>
            <div className="App">
                <Header>
                    <h1>I am rendering from App.jsx h1 tag</h1>
                    <Navigation />
                </Header>
                <div className='page min-vh-80'>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    )
}

export default App;
