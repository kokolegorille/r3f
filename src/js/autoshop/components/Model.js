import React from "react"
import { useLoader, useFrame } from "@react-three/fiber"
import {
    GLTFLoader
} from "three/examples/jsm/loaders/GLTFLoader"
import * as THREE from "three"

const Model = props => {
    const model = useLoader(
        GLTFLoader,
        props.path)

    let mixer
    if (model.animations.length > 0) {
        mixer = new THREE.AnimationMixer(model.scene)
        model.animations.forEach(clip => {
            const action = mixer.clipAction(clip)
            action.play()
        })
    }
    model.scene.traverse(child => {
        if (child.isMesh) {
            child.castShadow = true
            child.receiveShadow = true
            child.material.side = THREE.FrontSide
        }
    })
    useFrame((_scene, delta) => {
        // Either take the scene clock delta, or the delta
        // In case You want to take it from the scene, the clock must have been started!
        //
        //const delta = scene.clock.getDelta()

        mixer?.update(delta)
    })

    return (
        <primitive 
            object={model.scene} 
            {...props} />
    )
}

export default Model