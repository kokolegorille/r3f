import React from "react"
import { 
    EffectComposer, 
    Bloom,
    DepthOfField 
} from "@react-three/postprocessing"

const Effects = () => {
    return (
        <EffectComposer>
            <DepthOfField
                focusDistance={0}
                focalLength={0.02}
                bokehScale={2}
                height={480} />
            <Bloom
                luminanceThreshold={1}
                luminanceSmoothing={0.9}
                height={300} />
        </EffectComposer>
    )
}

export default Effects