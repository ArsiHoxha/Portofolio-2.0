import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function  Bird(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Bird_MAT_Bird_0.geometry}
        material={materials.MAT_Bird}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_branch_MAT_branch_0.geometry}
        material={materials.MAT_branch}
      />
    </group>
  )
}

useGLTF.preload('/scene.gltf')

