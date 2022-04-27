import React, { Suspense } from "react"
import BoundingBox from "./BoundingBox"
import Dragable from "./Dragable"
import Model from "./Model"

const Cars = () => {
    return (
        <Suspense fallback={null} >
            <Dragable transformGroup>
                <BoundingBox 
                    // visible
                    position={[4, 4, 0]}
                    dims={[3, 2, 6]}
                    offset={[0, -0.5, 0.8]}>
                    <Model 
                        path="/assets/tesla_model_3/scene.gltf" 
                        scale={new Array(3).fill(0.01)} />
                </BoundingBox>
            </Dragable>
            <Dragable transformGroup>
                <BoundingBox 
                    // visible
                    position={[-4, 4, 0]}
                    dims={[3, 2, 7]}
                    offset={[0, -0.5, 0.2]}>
                    <Model 
                        path="/assets/tesla_model_s/scene.gltf" 
                        scale={new Array(3).fill(0.013)} />
                </BoundingBox>
            </Dragable>
            <Model 
                path="/assets/mech_drone/scene.gltf" 
                scale={new Array(3).fill(0.01)} />
        </Suspense>
    )
}

export default Cars