import React, { useEffect, useState } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion, useAnimation } from 'framer-motion';

const PricingPage = () => {
  const [init, setInit] = useState(false);
  const headerControls = useAnimation();
  const subtitleControls = useAnimation();
  const line1Controls = useAnimation();
  const line2Controls = useAnimation();
  const line3Controls = useAnimation();
  const line4Controls = useAnimation();
  const line5Controls = useAnimation();
  const tiersControls = useAnimation();

  const particlesInit = async (main) => {
    await loadFull(main);
    setInit(true);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const plans = [
    { name: 'Standard', price: '£200', features: ['Single page portfolio site', 'Mobile Responsive', 'SEO Optimisation'] },
    { name: 'Pro', price: '£400', features: ['Everything in standard +', 'Single or multi page business site', 'Google business integration'] },
    { name: 'Ecommerce', price: '£800', features: ['Shopify store design and build', 'Metafield and app integration', 'Google merchant integration'] },
  ];

  useEffect(() => {
    const sequence = async () => {
      await headerControls.start({ y: 0, transition: { duration: 4, ease: "easeOut" } });
      await subtitleControls.start({ y: 0, opacity: 1, transition: { duration: 2, ease: "easeOut" } });
      await line1Controls.start({ y: 0, opacity: 1, transition: { duration: 2, ease: "easeOut" } });
      await line2Controls.start({ y: 0, opacity: 1, transition: { duration: 2, ease: "easeOut" } });
      await line3Controls.start({ y: 0, opacity: 1, transition: { duration: 2, ease: "easeOut" } });
      await line4Controls.start({ y: 0, opacity: 1, transition: { duration: 2, ease: "easeOut" } });
      await line5Controls.start({ y: 0, opacity: 1, transition: { duration: 2, ease: "easeOut" } });
      await tiersControls.start({ y: 0, transition: { duration: 4, ease: "easeOut" } });
    };

    if (init) {
      sequence();
    }
  }, [init, headerControls, subtitleControls, line1Controls, line2Controls, line3Controls, line4Controls, tiersControls]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-yellow-300">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "star",
            },
            opacity: {
              value: 0.8,
              random: true,
            },
            size: {
              value: 3,
              random: true,
            },
            move: {
              enable: true,
              speed: 0.6,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "bounce",
              },
              attract: {
                enable: false,
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
                distance: 100,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
            },
          },
          detectRetina: true,
        }}
      />
      
      {init && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
          <div className="text-center mb-8">
          <motion.h1 
     style={{ fontFamily: 'Starjhol, sans-serif' }}
     className="text-9xl mb-4 tracking-widest"
     initial={{ y: "100vh" }}
     animate={headerControls}
   >
     pricing
   </motion.h1>
            <motion.p
              className="text-2xl mb-4 text-[#4bd5ee]"
              initial={{ y: 50, opacity: 0 }}
              animate={subtitleControls}
            >
              A long time ago, in a galaxy far, {"\n"}far away...
            </motion.p>
            <motion.p 
              className="text-xl mb-2"
              initial={{ y: 50, opacity: 0 }}
              animate={line1Controls}
            >
              Just kidding, here's our prices <div className='text-xs'>(all negotiable)</div>
            </motion.p>
          </div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ y: "100vh" }}
            animate={tiersControls}
          >
            {plans.map((plan, index) => (
              <div key={index} className="bg-black bg-opacity-50 p-6 rounded-lg border border-yellow-300">
                <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
                <p className="text-3xl font-bold mb-6">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default PricingPage;