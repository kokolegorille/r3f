/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

// import * as THREE from "three"
// import React, { useRef, useState, useEffect } from "react"
import React, { useRef, useEffect } from "react"
// import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"

import { useAnimations } from "@react-three/drei"

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("/assets/melikick/melikick.glb")
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    console.log(actions)
    actions.kick.play()
  })


  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh material={materials.Ch03_Body} geometry={nodes.Ch03.geometry} skeleton={nodes.Ch03.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload("/assets/melikick/melikick.glb")
