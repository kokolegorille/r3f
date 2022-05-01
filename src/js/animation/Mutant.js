/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ action, ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/assets/mutant/mutant.glb')
  const previousAction = usePrevious(action)
  const { actions } = useAnimations(animations, group)

  console.log(action)

  useEffect(() => {
    console.log(actions)

    if (previousAction) {
        actions[previousAction].fadeOut(0.2)
        actions[action].stop()
    }
    actions[action].play()
    actions[action].fadeIn(0.2)
}, [actions, action, previousAction])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Mutant" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="MutantMesh" geometry={nodes.MutantMesh.geometry} material={materials.mutant_M} skeleton={nodes.MutantMesh.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/mutant/mutant.glb')

function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();
  // Store current value in ref
  useEffect(() => {
      ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}
