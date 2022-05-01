import React from "react"
import { Routes, Route, Link } from "react-router-dom"

import Autoshop from "./autoshop/Autoshop"
import Meli7 from "./melikick/Meli7"
import Fox from "./fox/Fox"
import ThirdPersonController from "./third_person_controller/ThirdPersonController"
import LightningApp from "./lightning/LightningApp"
import Animation from "./animation/Animation"

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <nav>
                <ul>
                    <li><Link to="/autoshop">Autoshop</Link></li>
                    <li><Link to="/meli7">Meli7</Link></li>
                    <li><Link to="/fox">AirWing</Link></li>
                    <li><Link to="/tpc">Third Person Controller</Link></li>
                    <li><Link to="/lightning">Lightning</Link></li>
                    <li><Link to="/animation">Animation</Link></li>
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
            <Route path="/fox" element={<Fox />} />
            <Route path="/tpc" element={<ThirdPersonController />} />
            <Route path="/lightning" element={<LightningApp />} />
            <Route path="/animation" element={<Animation />} />
        </Routes>
    )
}

export default App