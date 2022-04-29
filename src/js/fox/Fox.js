import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import ArWing from "./components/ArWing";
import CameraControls from "./components/CameraControls";
import Terrain from "./components/Terrain";

const Lights = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 10, 15]} intensity={1} />
            <directionalLight position={[0, 0, 0]} intensity={1.5} />
        </>
    )
};

const Fox = () => {
    return (
        <div style={{height: "100vh", width: "100vw"}}>
            <Canvas
                shadows
                style={{backgroundColor: "black"}} 
                camera={{position: [0, 2, 6]}} >
                <axesHelper args={[5]} />
                <Lights />
                <Stars />
                <Terrain />
                <ArWing />
                <CameraControls />
            </Canvas>
        </div>
    )
}

export default Fox