import React from "react"
import { useFrame, useLoader } from "@react-three/fiber"
import { useBox } from "@react-three/cannon"
import * as THREE from "three"

const Box = props => {
    const [ref, api] = useBox(() => ({mass: 1, ...props}))
    const texture = useLoader(THREE.TextureLoader, "/assets/wood.jpg")

    // useFrame(_state => {
    //     // console.log(ref.current)
    //     // console.log(state)
    //     ref.current.rotation.x += 0.01
    //     ref.current.rotation.y += 0.01
    // })

    // const handlePointerDown = e => console.log(e)
    const handlePointerEnter = e => scale(e.object, 1.5)
    const handlePointerLeave = e => scale(e.object, 1)
    
    const scale = (object, scale) => {
        object.scale.x = scale
        object.scale.y = scale
        object.scale.z = scale
    }

    return (
        <mesh 
            ref={ref} 
            api={api}
            {...props} 
            castShadow 
            receiveShadow
            // onPointerDown={handlePointerDown}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}>
            <boxBufferGeometry />
            <meshPhysicalMaterial map={texture} />
        </mesh>
    )
}

export default Box