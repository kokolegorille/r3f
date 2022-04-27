import React from "react"
import { Routes, Route, Link } from "react-router-dom"

import Autoshop from "./autoshop/Autoshop"
import Meli7 from "./melikick/Meli7"

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <nav>
                <ul>
                    <li><Link to="/autoshop">Autoshop</Link></li>
                    <li><Link to="/meli7">Meli7</Link></li>
                </ul>
            </nav>
        </>
    )
}

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/autoshop" element={<Autoshop />} />
            <Route path="/meli7" element={<Meli7 />} />
        </Routes>
    )
}

export default App