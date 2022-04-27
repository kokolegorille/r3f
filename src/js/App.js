import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/cannon"

import Background from "./components/Background"
import Cars from "./components/Cars"
import Effects from "./components/Effects"
import Floor from "./components/Floor"
import Lights from "./components/Lights"
import Panel from "./components/Panel"
import Orbit from "./components/Orbit"

const App = () => {
    return (
        <div style={{height: "100vh", width: "100vw"}}>
            <Panel />
            <Canvas 
                // Setup preference for rendering
                gl={{
                    powerPreference: "high-performance",
                    antialias: false,
                    stencil: false,
                    depth: false
                }}
                shadows
                style={{backgroundColor: "black"}} 
                camera={{position: [7, 7, 7]}}>
                <Suspense fallback={null} >
                    <Background />
                </Suspense>
                <Orbit />
                <axesHelper args={[5]} />
                <Lights />
                <Physics>
                    <Cars />
                    <Floor position={[0, -0.5, 0]}/>
                </Physics>
                <Effects />
            </Canvas>
        </div>
    )
}

export default App