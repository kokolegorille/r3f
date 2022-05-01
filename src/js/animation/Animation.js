// https://www.youtube.com/watch?v=DZDpqeD2fzM

import React, { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

// import Erika from "./Erika"
import Mutant from "./Mutant"

const Lights = () => {
    return (
        <>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[0, 10, 15]} intensity={1} />
            <directionalLight position={[0, 0, 0]} intensity={1.5} />
        </>
    )
}

const Animation = () => {
    const [action, setAction] = useState("Idle")

    // return (
    //     <div style={{height: "100vh", width: "100vw"}}>
    //         <Canvas
    //             shadows
    //             style={{backgroundColor: "gray"}} 
    //             camera={{position: [0, 1, 3]}}>
    //             <Lights />
    //             <Suspense fallback={null}>
    //                 <Erika action={action} />
    //             </Suspense>
    //             <OrbitControls target={[0, 1, 0]} autoRotate />
    //         </Canvas>
    //         <div className="controls">
    //             <button onClick={() => setAction("Run Forward")}>Run Forward</button>
    //             <button onClick={() => setAction("Death")}>Death</button>
    //             <button onClick={() => setAction("Draw Arrow")}>Draw Arrow</button>
    //             <button onClick={() => setAction("Standing Idle")}>Idle</button>
    //         </div>
    //     </div>
    // )

    console.log(action)

    return (
        <div style={{height: "100vh", width: "100vw"}}>
            <Canvas
                shadows
                style={{backgroundColor: "gray"}} 
                camera={{position: [0, 1, 3]}}>
                <Lights />
                <Suspense fallback={null}>
                    <Mutant action={action} />
                </Suspense>
                <OrbitControls target={[0, 1, 0]} autoRotate />
            </Canvas>
            <div className="controls">
                <button onClick={() => setAction("Running")}>Run Forward</button>
                <button onClick={() => setAction("Walking")}>Walk Forward</button>
                <button onClick={() => setAction("Jumping")}>Jump</button>
            </div>
        </div>
    )
}

export default Animation