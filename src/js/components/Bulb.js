import React from "react"

const Bulb = props => {
    return (
        <mesh {...props}>
            <pointLight castShadow intensity={[2]}/>
            <sphereBufferGeometry args={[0.2, 20, 20]}/>
            <meshPhongMaterial emissive="yellow" />
        </mesh>        
 
    )
}

export default Bulb