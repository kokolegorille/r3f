import React, { Suspense, useEffect } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three"

// import { useGLTF } from "@react-three/drei"
import {
    GLTFLoader
} from "three/examples/jsm/loaders/GLTFLoader"

// params
// decceleration
// acceleration
// velocity
// position
// animations

// input
// stateMachine

// const keys = {
//     forward: false,
//     backward: false,
//     left: false,
//     right: false,
//     space: false,
//     shift: false,
// }

const CharacterControllerInput = () => {
    const handleKeyDown = e => {
        switch (e.keyCode) {
            case 87: // w
                break;
            case 65: // a
                break;
            case 83: // s
                break;
            case 68: // d
                break;
            case 32: // SPACE
                break;
            case 16: // SHIFT
                break;
        }
    }

    const handleKeyUp = e => {
        switch (e.keyCode) {
            case 87: // w
                break;
            case 65: // a
                break;
            case 83: // s
                break;
            case 68: // d
                break;
            case 32: // SPACE
                break;
            case 16: // SHIFT
                break;
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', (e) => handleKeyDown(e), false);
        document.addEventListener('keyup', (e) => handleKeyUp(e), false);
        return () => {
            document.removeEventListener('keydown');
            document.removeEventListener('keyup');
        }
    }, [])

    return (null)
}

const Lights = () => {
    return (
        <>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[0, 10, 15]} intensity={1} />
            <directionalLight position={[0, 0, 0]} intensity={1.5} />
        </>
    )
}

const Model = props => {
    // const { nodes, materials, animations } = useGLTF("/assets/mutant/mutant.glb")
    // console.log(nodes, materials, animations)
    const model = useLoader(
        GLTFLoader,
        props.path)

    console.log(model)

    let mixer

    if (model.animations.length > 0) {
        mixer = new THREE.AnimationMixer(model.scene)
        model.animations.forEach(clip => {
            console.log(clip.name)
            const action = mixer.clipAction(clip)

            // console.log(clip.name)

            action.reset();  
            action.setLoop(THREE.LoopOnce, 1);
            // action.clampWhenFinished = true;
            action.play()
        })

        // const action = mixer.clipAction(model.animations[1])
        // console.log(action)
        // action.play()
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

const ThirdPersonController = () => {
    return (
        <div style={{height: "100vh", width: "100vw"}}>
            <Canvas
                shadows
                style={{backgroundColor: "gray"}} 
                camera={{position: [0, 1, 3]}} >
                <Lights />
                <Suspense fallback={null}>
                    <Model path="/assets/mutant/mutant.glb" />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default ThirdPersonController