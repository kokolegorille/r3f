import React, { useRef } from "react"
import { useFrame } from "@react-three/fiber"

const GROUND_HEIGHT = -50;

const Terrain = () => {
    const terrain = useRef();

    useFrame(() => { terrain.current.position.z += 0.4 });

    return (
        <mesh
            visible
            position={[0, GROUND_HEIGHT, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            ref={terrain}>
            <planeBufferGeometry args={[5000, 5000, 128, 128]} />
            <meshStandardMaterial
                color="white"
                roughness={1}
                metalness={0}
                wireframe />
        </mesh>
    )
}

export default Terrain