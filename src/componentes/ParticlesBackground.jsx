// ParticlesBackground.jsx
import { useMemo } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const options = useMemo(() => ({
    background: {
      color: {
        value: "#111",
      },
    },
    particles: {
      number: {
        value: 90,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: { min: 1, max: 5 },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        outModes: {
          default: "out",
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 200,
        },
        push: {
          quantity: 4,
        },
      },
    },
    detectRetina: true,
  }), []);

  const particlesInit = async (engine) => {
    await loadFull(engine); // carga completa del motor
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      style={{ position: "relative", width: "100vw", height: "100vh", zIndex: -1 }}
    />
  );
}
