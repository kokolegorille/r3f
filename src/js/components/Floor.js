import React from "react"
import { useBox } from "@react-three/cannon"

const Floor = props => {
    const size = [200, 1, 200]
    const [ref, _api] = useBox(() => ({args: size, ...props}))

    return (
        <mesh ref={ref} {...props} receiveShadow>
            <boxBufferGeometry args={size}/>
            <meshPhysicalMaterial transparent opacity={0.2} />
        </mesh>
    )
}

export default Floor