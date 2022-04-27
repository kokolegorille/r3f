import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/cannon"

import Background from "./components/Background"
import Box from "./components/Box"
import Bulb from "./components/Bulb"
import Dragable from "./components/Dragable"
import Floor from "./components/Floor"
import Panel from "./components/Panel"
import Orbit from "./components/Orbit"
import Sphere from "./components/Sphere"

const App = () => {
    return (
        <div style={{height: "100vh", width: "100vw"}}>
            <Panel />
            <Canvas 
                shadows
                style={{backgroundColor: "black"}} 
                camera={{position: [5, 5, 5]}}>
                <ambientLight intensity={0.2} />
                {/* <Orbit /> */}
                <axesHelper args={[5]} />
                <Physics>
                    <Dragable>
                        <Bulb position={[0, 3, 0]} />
                        <Suspense fallback={null} >
                            <Box position={[-1, 2, 0]}/>
                            <Sphere position={[-3, 1, 1]}/>
                        </Suspense>
                    </Dragable>
                    <Suspense fallback={null} >
                        <Background />
                    </Suspense>
                    <Floor position={[0, -0.5, 0]}/>
                </Physics>
            </Canvas>
        </div>
    )
}

export default App