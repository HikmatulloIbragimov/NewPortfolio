import Particles from "react-tsparticles"; 
import { loadFull } from "tsparticles"; 
const App = () => {

    const particlesInit = async (main) => { 
        console.log(main); 
        await loadFull(main); 
      }; 
      const particlesLoaded = (container) => { 
        console.log(container); 
      }; 
    return (
        <Particles 
        id="tsparticles" 
        init={particlesInit} 
        loaded={particlesLoaded} 
        options={{ 
          background: { 
            color: "rgb(10,10,25)", 
          }, 
          "fullScreen" : {
            "zIndex":-1
          },
          position:'absolute',
          fpsLimit: 60, 
          particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 60,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        }} 
      /> 
    );
};

export default App