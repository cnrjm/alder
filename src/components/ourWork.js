import React, { useState } from 'react';

const works = [
  { 
    id: "andrew", 
    name: "Andrew Ballantine", 
    websiteUrl: "https://cnrjm.github.io/byab/",
    description: "Portfolio and booking site for Andrew Ballantine to showcase his videography work, package options and contact details."
  },
  { 
    id: "jonny", 
    name: "Jonny Orr", 
    websiteUrl: "https://cnrjm.github.io/jorr/",
    description: "Gallery focused portfolio site for Jonny Orr to display both videography and photography work."
  },
  { 
    id: "nico", 
    name: "Nico Leonard", 
    websiteUrl: "https://www.nicoleonard.co.uk",
    description: "Personal website for luxury watch dealer Nico Leonard to advertise opportunities for collaboration as well as some additional information about Nico."
  }
];

const WorkCard = ({ work }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(work.websiteUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="bg-white border-2 border-black shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-xl relative"
      style={{ height: '500px', width: '100%' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 p-6 flex flex-col items-center justify-center transition-opacity duration-300 z-10"
           style={{ opacity: isHovered ? 0 : 1 }}>
        <h3 className="text-4xl font-bold mb-4 text-center">{work.name}</h3>
        <p className="text-lg text-center mb-6">{work.description}</p>
        <div className="bg-black text-white py-3 px-6 rounded-lg inline-block">
          <p className="text-xl font-semibold text-center">
            Hover to preview, click to visit
          </p>
        </div>
      </div>
      <div className="absolute inset-0 transition-opacity duration-300 z-20"
           style={{ opacity: isHovered ? 1 : 0 }}>
        <iframe
          src={work.websiteUrl}
          title={work.name}
          className="w-full h-full border-none"
        />
      </div>
      {/* Clickable overlay */}
      <div 
        className="absolute inset-0 z-30 cursor-pointer" 
        onClick={handleClick}
      ></div>
    </div>
  );
};

const OurWork = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[#dedcff] border-black border-b-4">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 flex flex-col justify-between min-h-screen">
        <h2 className="text-5xl md:text-6xl font-heading text-black mb-16 text-center">
          Our Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWork;