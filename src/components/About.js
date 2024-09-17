import React from 'react';

const About = () => {
  const randomHorizontalPosition = () => `${Math.random() * 100}%`;
  const randomSize = () => 0.5 + Math.random() * 0.5; // Between 0.5 and 1

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen w-full bg-[#fff1d6] overflow-hidden border-black border-b-4">
      <div id="leaves" className="absolute inset-0">
        {[...Array(30)].map((_, index) => (
          <div 
            key={index} 
            className={`leaf leaf${index % 6 + 1}`} 
            style={{ 
              left: randomHorizontalPosition(),
              transform: `scale(${randomSize()}) rotate(${Math.random() * 360}deg)`,
              animationDuration: `${15 + Math.random() * 15}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      <div className="relative z-10 max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-5xl md:text-6xl font-heading text-black mb-8">About Us</h2>
        <div className="space-y-6 text-2xl text-black">
          <p className="text-left bg-white border-2 border-black shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-[1.02] hover:shadow-xl">We're Alder Park, a design company based in Northern Ireland. We primarily design and build websites (amongst other things).</p>
          <p className="text-right bg-white border-2 border-black shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-[1.02] hover:shadow-xl">From small-scale local business portfolio pages, to large-scale internationally recognised e-commerce stores. We have experience across a vast range of industries and we're confident we can make you something you'll like every-time.</p>
          <p className="text-right bg-white border-2 border-black shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-[1.02] hover:shadow-xl">We're affordable, friendly and above all, honest. We have realistic time frames and transparent pricing for all projects. We don't speak in fancy languages or try and up-sell you on things you don't need.</p>
          <p className="text-left bg-white border-2 border-black shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-[1.02] hover:shadow-xl">We'll simply ask you what you want, design it, build it, and show you it. If you're happy with it, great! If not, then we'll keep working on it until you are. We hope to hear from you soon!</p>
        </div>
      </div>
      <style jsx>{`
        .leaf {
          position: absolute;
          width: 40px;
          height: 40px;
          opacity: 0;
          border-radius: 0 100% 0 100%;
          animation: falling linear infinite;
        }
        @keyframes falling {
          0% {
            transform: translateY(-5vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(105vh) rotate(720deg);
            opacity: 0;
          }
        }
        .leaf1 { background: #8BC34A; }
        .leaf2 { background: #4CAF50; }
        .leaf3 { background: #009688; }
        .leaf4 { background: #00BCD4; }
        .leaf5 { background: #03A9F4; }
        .leaf6 { background: #3F51B5; }
      `}</style>
    </div>
  );
};

export default About;