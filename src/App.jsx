import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import Navbar from './components/NavBar/NavBar';
import ParallaxContainer from './components/Parallax/Parallax';
import ThreeJSScene from './components/three/Three';
import Earth from './components/three/Three';
import { TopSection } from './components/topSection';
import SphereLanguages from './components/sphereLanguage/ProgrammingLanguage';
const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh;
`;


function App() {
  return (
    <div className="App">
    <CanvasContainer>
      <Navbar />
      <TopSection></TopSection>
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
    
    </div>
  );
}

export default App;
