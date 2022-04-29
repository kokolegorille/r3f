import React, { useRef, useState } from "react"
import { useFrame, useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ArWing = () => {
    const [shipPosition, setShipPosition] = useState({position: {}, rotation: {}});

    const ship = useRef();
    useFrame(({ mouse }) => {
        setShipPosition({
            position: { x: mouse.x * 6, y: mouse.y * 2 },
            rotation: { z: -mouse.x * 0.5, x: -mouse.x * 0.5, y: -mouse.y * 0.2 },
        });
    });
    // Update the ships position from the updated state.
    useFrame(() => {
        ship.current.rotation.z = shipPosition.rotation.z;
        ship.current.rotation.y = shipPosition.rotation.x;
        ship.current.rotation.x = shipPosition.rotation.y;
        ship.current.position.y = shipPosition.position.y;
        ship.current.position.x = shipPosition.position.x;
    });

    const { nodes } = useLoader(GLTFLoader, "/assets/fox/arwing.glb");

    return (
        <group ref={ship}>
            <mesh visible geometry={nodes.Default.geometry}>
                <meshStandardMaterial
                    attach="material"
                    color="white"
                    roughness={0.3}
                    metalness={0.3}
                />
            </mesh>
        </group>
    );
}

export default ArWing