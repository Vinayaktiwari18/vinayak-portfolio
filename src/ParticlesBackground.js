import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            repulse: { distance: 200, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        particles: {
          color: { value: ['#00ffff', '#800080', '#0000ff'] },
          links: { enable: true, color: '#00ffff', distance: 150, opacity: 0.5, width: 1 },
          move: { enable: true, speed: 2, direction: 'none', random: true, straight: false },
          number: { value: 80, density: { enable: true, value_area: 800 } },
          opacity: { value: 0.5 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
};
export default ParticlesBackground;