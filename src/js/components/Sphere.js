import React, { useRef } from "react"
import { useFrame } from "@react-three/fiber"

const Sphere = props => {
    const ref = useRef()
    useFrame(state => {
        console.log(ref.current)
        console.log(state)
        ref.current.rotation.x += 0.01
    })
    return (
        <mesh ref={ref} {...props} castShadow receiveShadow>
            <sphereBufferGeometry />
            <meshStandardMaterial color="hotpink" />
        </mesh>
    )
}

export default Sphere