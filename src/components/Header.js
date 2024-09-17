import React from 'react';

const Header = () => {
  const randomVerticalPosition = () => `${Math.random() * 100}%`;
  const randomSize = () => 0.5 + Math.random() * 0.5;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-[#b7f0ff] overflow-hidden border-black border-b-4">
      <div id="clouds" className="absolute inset-0">
        {[...Array(8)].map((_, index) => (
          <div 
            key={index} 
            className={`cloud x${index + 1}`} 
            style={{ 
              top: randomVerticalPosition(),
              transform: `scale(${randomSize()})`,
              animationDuration: `${15 + Math.random() * 15}s`
            }}
          ></div>
        ))}
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-heading text-black px-6 py-2 text-center">
          ALDER PARK
        </h1>
      </div>
      <style jsx>{`
        .cloud {
          width: 200px;
          height: 60px;
          background: #fff;
          border-radius: 200px;
          position: absolute;
          opacity: 0.8;
          animation: moveclouds linear infinite;
        }
        .cloud:before, .cloud:after {
          content: '';
          position: absolute;
          background: #fff;
          width: 100px;
          height: 80px;
          top: -15px;
          left: 10px;
          border-radius: 100px;
          transform: rotate(30deg);
        }
        .cloud:after {
          width: 120px;
          height: 120px;
          top: -55px;
          left: auto;
          right: 15px;
        }
        @keyframes moveclouds {
          0% { margin-left: 100%; }
          100% { margin-left: -20%; }
        }
      `}</style>
    </div>
  );
};

export default Header;