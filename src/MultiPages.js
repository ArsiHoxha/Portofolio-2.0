import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App"
import NotFound from './NotFound';
import ProgrammingLanguage from './components/sphereLanguage/ProgrammingLanguage';
import ThreeCSS3DExample from './components/Timeline/Timeline';
import ParallaxContainer from './components/Parallax/Parallax';
import Timeline from './components/Timeline/Timeline';
import Project from './components/Projects/Project';


function MultiPages() {
  return (
      <Router>
          <Routes>
              <Route exact path="/" element={<App></App>} />
              <Route exact path="/Technologies" element={<ProgrammingLanguage></ProgrammingLanguage>} />
              <Route exact path="/Timeline" element={<Timeline></Timeline>} />
              <Route exact path="/Contact" element={<ParallaxContainer></ParallaxContainer>} />
              <Route exact path="/Projects" element={<Project></Project>} />


              <Route path="*" element={<NotFound />} />

          </Routes>
      </Router>
  );
}


export default MultiPages;