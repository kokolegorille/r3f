import React from "react"
import { useBox } from "@react-three/cannon"

const Floor = props => {
    const size = [20, 1, 20]
    const [ref, _api] = useBox(() => ({args: size, ...props}))

    return (
        <mesh ref={ref} {...props} receiveShadow>
            <boxBufferGeometry args={size}/>
            <meshPhysicalMaterial />
        </mesh>
    )
}

export default Floor