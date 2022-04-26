import React from "react"
import { Canvas } from "@react-three/fiber"

import Box from "./components/Box"
import Bulb from "./components/Bulb"
import Floor from "./components/Floor"
import Orbit from "./components/Orbit"
import Sphere from "./components/Sphere"

const App = () => {
    return (
        <div style={{height: "100vh", width: "100vw"}}>
            <Canvas 
                shadows
                style={{backgroundColor: "black"}} 
                camera={{position: [3, 3, 3]}}>
                <ambientLight intensity={0.2} />
                <Orbit />
                <axesHelper args={[3]} />
                <Bulb position={[0, 3, 0]} />
                <Floor position={[0, -0.5, 0]}/>
                <Box position={[-1, 2, 0]}/>
                <Sphere position={[-3, 1, 1]}/>
            </Canvas>
        </div>
    )
}

export default App