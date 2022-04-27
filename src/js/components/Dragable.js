import React, { useRef, useEffect, useState } from "react"
import { useThree, extend } from "@react-three/fiber"
import { 
    DragControls 
} from "three/examples/jsm/controls/DragControls"
extend({ DragControls })

const Dragable = props => {
    const groupRef = useRef()
    const controlsRef = useRef()
    const [children, setChildren] = useState([])
    const { camera, gl, scene } = useThree()

    const toggle = bool => {
        if (scene.orbitControls) {
            scene.orbitControls.enabled = bool
        }
    }

    useEffect(() => {
        setChildren(groupRef.current.children)
    }, [])

    useEffect(() => {
        if (controlsRef.current) {
            controlsRef.current.addEventListener(
                "hoveron",
                _e => toggle(false)
            )
            controlsRef.current.addEventListener(
                "hoveroff",
                _e => toggle(true)
            )
            controlsRef.current.addEventListener(
                "drag",
                e => {
                    if (e.object.api) {
                        e.object.api.position.copy(e.object.position)
                        e.object.api.velocity.set(0, 0, 0)
                    }
                }
            )
            controlsRef.current.addEventListener(
                "dragstart",
                e => {
                    if (e.object.api) { e.object.api.mass.set(0) }
                }
            )
            controlsRef.current.addEventListener(
                "dragend",
                e => {
                    if (e.object.api) { e.object.api.mass.set(1) }
                }
            )
        }
        return () => {
            if (controlsRef.current) {
                controlsRef.current.removeEventListener("hoveron")
                controlsRef.current.removeEventListener("hoveroff")
                controlsRef.current.removeEventListener("drag")
                controlsRef.current.removeEventListener("dragstart")
                controlsRef.current.removeEventListener("dragend")
            }
        }
    }, [children])

    return (
        <group ref={groupRef}>
            <dragControls 
                ref={controlsRef} 
                args={[children, camera, gl.domElement]} />
            {props.children}
        </group>
    )
}

export default Dragable