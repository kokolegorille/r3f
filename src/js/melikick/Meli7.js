import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
    OrbitControls, 
    Loader, 
} from "@react-three/drei";

import MeliKick from "./MeliKick"

const Lights = () => {
    return (
        <>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[0, 10, 15]} intensity={1} />
            <directionalLight position={[0, 0, 0]} intensity={1.5} />
        </>
    )
};

const Meli7 = () => {
    return (
        <div style={{height: "100vh", width: "100vw"}}>
            <Canvas 
                shadows
                style={{backgroundColor: "gray"}} 
                camera={{position: [4, 5, 7]}} >
                <Lights />
                <Suspense fallback={null}>
                    <MeliKick 
                        position={[0, 0, 0]}
                        scale={new Array(3).fill(3)} />
                </Suspense>
                <OrbitControls />
            </Canvas>
            <Loader />
        </div>
    )
}

export default Meli7;