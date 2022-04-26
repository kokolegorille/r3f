import React, { useRef } from "react"
import { 
    Canvas, 
    useFrame, 
    useThree,
    extend 
} from "@react-three/fiber"
import { 
    OrbitControls 
} from "three/examples/jsm/controls/OrbitControls"
extend({ OrbitControls })

const Orbit = () => {
    const { camera, gl } = useThree()
    return (
        <orbitControls args={[camera, gl.domElement]}/>
    )
}

const Box = props => {
    const ref = useRef()
    useFrame(state => {
        console.log(ref.current)
        console.log(state)
        ref.current.rotation.x += 0.01
    })
    return (
        <mesh ref={ref} {...props}>
            <boxBufferGeometry />
            <meshBasicMaterial color="blue" />
        </mesh>
    )
}

const Sphere = props => {
    const ref = useRef()
    useFrame(state => {
        console.log(ref.current)
        console.log(state)
        ref.current.rotation.x += 0.01
    })
    return (
        <mesh ref={ref} {...props}>
            <sphereBufferGeometry />
            <meshStandardMaterial color="hotpink" />
        </mesh>
    )
}

const App = () => {
    return (
        <div style={{height: "100vh", width: "100vw"}}>
            <Canvas 
                style={{backgroundColor: "black"}} 
                camera={{position: [3, 3, 3]}}>
                <Orbit />
                <axesHelper args={[3]} />
                <pointLight position={[10, 10, 10]} />
                <Box position={[-2, 2, 0]}/>
                <Sphere position={[2, 2, 0]}/>
            </Canvas>
        </div>
    )
}

export default App