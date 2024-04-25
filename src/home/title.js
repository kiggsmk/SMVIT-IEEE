


import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Title = () => {
  const options = {
    background: {
        color: "#fff",
      },
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            area: 800
          }
        },
        color: {
          value: ["#FFFFFF"]
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 1
        },
        size: {
          value: 5
        },
        links: {
          enable: true,
          distance: 150,
          color: "#FFFFFF",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 5,
          direction: "none",
          random: false,
          straight: false,
          outModes: "out"
        }
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab"
          },
          onClick: {
            enable: true,
            mode: "push"
          }
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 1
            }
          },
          push: {
            quantity: 4
          }
        }
    }
    };
  
 
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="App">
      <Particles options={options} init={particlesInit} />
    </div>
  );
};

export default Title;