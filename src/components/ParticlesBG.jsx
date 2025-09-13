import React, { useCallback, useMemo } from 'react'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { loadSlim } from 'tsparticles-slim';


const ParticlesBG = () => {
    const options = useMemo(() => {
        return{
            particles:{
                move: {
                    enable: true,
                    speed: 0.5,
                    direction: "none",
                    random: false,
                    straight: false,
                    outMode: "out",
                    attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                    }
                },
                number: {
                    value: 200, 
                    density: {
                      enable: true,
                      value_area: 4000,
                    },
                  },
                  shape: {
                    type: "circle",
                    stroke: {
                      width: 0.1,
                      color: "#808080CC",
                    },
                    polygon: {
                      nb_sides: 1, 
                    },
                  },
                  size: {
                    value: 4,
                  },
                  line_linked: {
                    enable: false,
                  },
            }
        };
    }, [])

    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
        loadFull(engine);
    }, [])
  return (
    <div
        style={{zIndex: -1}}
    >
        <Particles
            init={particlesInit}
            options={options}
        />
    </div>
  )
}

export default ParticlesBG