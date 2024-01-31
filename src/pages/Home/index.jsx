import React from 'react'
import styles from './home.module.css'
import { Background, Button, Inputs, Modal, ToolTip } from '@/components'
import { Header, Footer, Navbar } from '@/layout'
import ParticleNetwork from './particle-network.js'


const index = () => {
    debugger
    const canvasDiv = document.getElementById('particle-canvas');
    const options = {
      particleColor: '#888',
      background: 'https://raw.githubusercontent.com/JulianLaval/canvas-particle-network/master/img/demo-bg.jpg',
      interactive: true,
      speed: 'medium',
      density: 'high',
    };
    const particleCanvas = new ParticleNetwork(canvasDiv, options);

  return (
    <div className={styles.root}>
      Home Page
      <br />
      {/* {<Button/>},
      {<Inputs/>}

      <Background/>
      <ToolTip/> */}
      <div>
      <div id="particle-canvas"></div>
      </div>
    </div>
  );
};

export default index
