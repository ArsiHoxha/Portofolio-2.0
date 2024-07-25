import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Stats from 'stats.js';
import { GUI } from 'lil-gui';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Javascript from './textures/Unofficial_JavaScript_logo_2.svg.png'
import Python from './textures/images.jpeg'
import Unity from './textures/unity.jpeg'
import NodeJs from './textures/nodejs.png'
import react from './textures/react.png'
import express from './textures/express.png'
import Mongodb from './textures/mongoDb.png'
import Kali from './textures/kali.png'
import Vscode from './textures/vscode.jpeg'
import Html from './textures/html.jpeg'
import Git from './textures/github-logo.png'
import css from './textures/css.jpg'
import three from './textures/three.png'
import tensor from './textures/tensor.png'
import passaport from './textures/Passaport.png'
import Navbar from '../NavBar/NavBar';
import roughnessTexture from './textures/hardwood2_roughness.jpg'
import diffuseTexture from './textures/hardwood2_diffuse.jpg'
import bumbTexture from './textures/hardwood2_bump.jpg'
import earthAtmos from './textures/earth_atmos_2048.jpg'
import  earthSpecular from './textures/earth_specular_2048.jpg'
const App = () => {
  const containerRef = useRef();

  useEffect(() => {
    let camera, scene, renderer, bulbLight, bulbMat, hemiLight, stats;
    let ballMat, floorMat;
    let previousShadowMap = false;

    const bulbLuminousPowers = {
      '110000 lm (1000W)': 110000,
      '3500 lm (300W)': 3500,
      '1700 lm (100W)': 1700,
      '800 lm (60W)': 800,
      '400 lm (40W)': 400,
      '180 lm (25W)': 180,
      '20 lm (4W)': 20,
      'Off': 0
    };

    const hemiLuminousIrradiances = {
      '0.0001 lx (Moonless Night)': 0.0001,
      '0.002 lx (Night Airglow)': 0.002,
      '0.5 lx (Full Moon)': 0.5,
      '3.4 lx (City Twilight)': 3.4,
      '50 lx (Living Room)': 50,
      '100 lx (Very Overcast)': 100,
      '350 lx (Office Room)': 350,
      '400 lx (Sunrise/Sunset)': 400,
      '1000 lx (Overcast)': 1000,
      '18000 lx (Daylight)': 18000,
      '50000 lx (Direct Sun)': 50000
    };

    const params = {
      shadows: true,
      exposure: 0.68,
      bulbPower: Object.keys(bulbLuminousPowers)[4],
      hemiIrradiance: Object.keys(hemiLuminousIrradiances)[0]
    };

    function init() {
      stats = new Stats();
      containerRef.current.appendChild(stats.dom);

      camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.x = -4;
      camera.position.z = 4;
      camera.position.y = 2;

      scene = new THREE.Scene();

      const bulbGeometry = new THREE.SphereGeometry(0.02, 16, 8);
      bulbLight = new THREE.PointLight(0xffee88, 1, 100, 2);

      bulbMat = new THREE.MeshStandardMaterial({
        emissive: 0xffffee,
        emissiveIntensity: 1,
        color: 0x000000
      });
      bulbLight.add(new THREE.Mesh(bulbGeometry, bulbMat));
      bulbLight.position.set(0, 2, 0);
      bulbLight.castShadow = true;
      scene.add(bulbLight);

      hemiLight = new THREE.HemisphereLight(0xddeeff, 0x0f0e0d, 0.02);
      scene.add(hemiLight);

      floorMat = new THREE.MeshStandardMaterial({
        roughness: 1.8,
        color: 0xffffff,
        metalness: 0.2,
        bumpScale: 3
      });

      const textureLoader = new THREE.TextureLoader();
      textureLoader.load(diffuseTexture, (map) => {
        map.wrapS = THREE.RepeatWrapping;
        map.wrapT = THREE.RepeatWrapping;
        map.anisotropy = 4;
        map.repeat.set(10, 24);
        map.colorSpace = THREE.SRGBColorSpace;
        floorMat.map = map;
        floorMat.needsUpdate = true;
      });
      textureLoader.load(bumbTexture, (map) => {
        map.wrapS = THREE.RepeatWrapping;
        map.wrapT = THREE.RepeatWrapping;
        map.anisotropy = 4;
        map.repeat.set(10, 24);
        floorMat.bumpMap = map;
        floorMat.needsUpdate = true;
      });
      textureLoader.load(roughnessTexture, (map) => {
        map.wrapS = THREE.RepeatWrapping;
        map.wrapT = THREE.RepeatWrapping;
        map.anisotropy = 4;
        map.repeat.set(10, 24);
        floorMat.roughnessMap = map;
        floorMat.needsUpdate = true;
      });

      ballMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.5,
        metalness: 1.0
      });
      textureLoader.load(earthAtmos, (map) => {
        map.anisotropy = 4;
        map.colorSpace = THREE.SRGBColorSpace;
        ballMat.map = map;
        ballMat.needsUpdate = true;
      });
      textureLoader.load(earthSpecular, (map) => {
        map.anisotropy = 4;
        map.colorSpace = THREE.SRGBColorSpace;
        ballMat.metalnessMap = map;
        ballMat.needsUpdate = true;
      });

      const floorGeometry = new THREE.PlaneGeometry(20, 20);
      const floorMesh = new THREE.Mesh(floorGeometry, floorMat);
      floorMesh.receiveShadow = true;
      floorMesh.rotation.x = -Math.PI / 2.0;
      scene.add(floorMesh);

      const ballGeometry = new THREE.SphereGeometry(0.25, 32, 32);
      const ballMesh = new THREE.Mesh(ballGeometry, ballMat);
      ballMesh.position.set(1, 0.25, 1);
      ballMesh.rotation.y = Math.PI;
      ballMesh.castShadow = true;
      scene.add(ballMesh);

      // Load textures for 15 cubes
      const cubeTextures = [
        Javascript,
        Python,
        react,
        express,
        Mongodb,
        Kali,
        Vscode,
        Html,
        Git,
        css,
        Unity,
        NodeJs,
        passaport,
        three,
        tensor
      ];

      const cubeGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      const cubes = [];

      cubeTextures.forEach((texturePath, index) => {
        const cubeMat = new THREE.MeshStandardMaterial({
          roughness: 0.7,
          color: 0xffffff,
          bumpScale: 1,
          metalness: 0.2
        });

        textureLoader.load(texturePath, (map) => {
          map.wrapS = THREE.RepeatWrapping;
          map.wrapT = THREE.RepeatWrapping;
          map.anisotropy = 4;
          map.colorSpace = THREE.SRGBColorSpace;
          cubeMat.map = map;
          cubeMat.needsUpdate = true;
        });

        const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMat);
        
        // Calculate circular positions for the cubes
        const radius = 3;
        const angle = (index / cubeTextures.length) * Math.PI * 2;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        
        cubeMesh.position.set(x, 0.25, z);
        cubeMesh.castShadow = true;
        scene.add(cubeMesh);
        cubes.push(cubeMesh);
      });

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setAnimationLoop(animate);
      renderer.shadowMap.enabled = true;
      renderer.toneMapping = THREE.ReinhardToneMapping;
      containerRef.current.appendChild(renderer.domElement);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.minDistance = 1;
      controls.maxDistance = 20;

      window.addEventListener('resize', onWindowResize);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      renderer.toneMappingExposure = Math.pow(params.exposure, 5.0); // to allow for very bright scenes.
      renderer.shadowMap.enabled = params.shadows;
      bulbLight.castShadow = params.shadows;

      if (params.shadows !== previousShadowMap) {
        ballMat.needsUpdate = true;
        floorMat.needsUpdate = true;
        previousShadowMap = params.shadows;
      }

      bulbLight.power = bulbLuminousPowers[params.bulbPower];
      hemiLight.intensity = hemiLuminousIrradiances[params.hemiIrradiance];
      const time = Date.now() * 0.0005;

      bulbLight.position.y = Math.cos(time) * 0.75 + 1.25;

      renderer.render(scene, camera);
      stats.update();
    }

    init();

    return () => {
      // Cleanup on component unmount
      
      window.removeEventListener('resize', onWindowResize);
      containerRef.current.removeChild(renderer.domElement);
      stats.end();
    };
  }, []);

  return (
  <div>
  <Navbar></Navbar>
  <div ref={containerRef}></div>
  
  </div>
  );
};

export default App;
