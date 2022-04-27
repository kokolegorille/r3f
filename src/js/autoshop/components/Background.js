import React, { useMemo } from "react"
import { useLoader, useThree } from "@react-three/fiber"
import * as THREE from "three"

const Background = () => {
    const { gl } = useThree()
    const texture = useLoader(
        THREE.TextureLoader, 
        "/assets/autoshop.jpg")

    const formatted = useMemo(
        () => new THREE.WebGLCubeRenderTarget(
            texture.image.height
        ).fromEquirectangularTexture(gl, texture))

    return (
        <primitive attach="background" object={formatted.texture} />
    )
}

export default Background