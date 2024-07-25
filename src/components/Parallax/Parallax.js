import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import TextBlock from './textBlock';
import './Parallax.css'; // Your CSS file for additional styling

function ParallaxContainer() {
  return (
    <div className="App">
      <Parallax pages={2} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        {/* Background layers */}
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.7}>
          <div className="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.9}>
          <div className="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>

        {/* TextBlock taking full screen height */}
        <ParallaxLayer offset={1} speed={1}>
          <TextBlock />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default ParallaxContainer;
