import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Rocket(props) {
  const { nodes, materials } = useGLTF('/space/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.003, 0.024, -6.331]} rotation={[0.238, -0.545, 0.562]} scale={7}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.planet001_1.geometry}
            material={materials.scene}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.planet001_2.geometry}
            material={materials.scene}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/space/scene.gltf')

