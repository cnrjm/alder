import React, { useState, useEffect, useRef } from 'react';

const Section = ({ id, children, iframeUrl, isLast, isActive, onInView, className }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onInView(id);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [id, onInView]);

  return (
    <div 
      ref={sectionRef}
      id={id} 
      className={`h-screen w-screen flex items-center justify-center relative overflow-hidden ${
        !isLast ? 'border-b-8 border-black' : ''
      } ${className || ''}`}
    >
      {iframeUrl && (
        <iframe
          src={iframeUrl}
          className="absolute inset-0 w-full h-full border-none transition-opacity duration-300"
          style={{
            opacity: isActive ? 1 : 0,
            pointerEvents: isActive ? 'auto' : 'none',
          }}
          title={id}
        />
      )}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 2 }}>
        <div className={`p-4 rounded ${id === 'intro' ? '' : 'bg-black bg-opacity-50'}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const containerRef = useRef(null);

  const companies = [
    { id: "andrew", name: "Andrew Ballantine", websiteUrl: "https://cnrjm.github.io/byab/" },
    { id: "jonny", name: "Jonny Orr", websiteUrl: "https://cnrjm.github.io/jorr/" },
    { id: "nico", name: "Nico Leonard", websiteUrl: "https://www.nicoleonard.co.uk" }
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let lastScrollTop = 0;
    let scrollTimeout;

    const handleScroll = () => {
      if (isScrollLocked) {
        container.scrollTop = lastScrollTop;
        return;
      }

      const currentScrollTop = container.scrollTop;
      const direction = currentScrollTop > lastScrollTop ? 'down' : 'up';
      lastScrollTop = currentScrollTop;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrollLocked(true);
        const sectionHeight = window.innerHeight;
        const targetScrollTop = Math.round(currentScrollTop / sectionHeight) * sectionHeight;
        container.scrollTo({ top: targetScrollTop, behavior: 'smooth' });
      }, 50);
    };

    const handleWheel = (e) => {
      if (isScrollLocked) {
        if ((e.deltaY > 0 && container.scrollTop < container.scrollHeight - container.clientHeight) ||
            (e.deltaY < 0 && container.scrollTop > 0)) {
          setIsScrollLocked(false);
        }
      }
    };

    container.addEventListener('scroll', handleScroll);
    container.addEventListener('wheel', handleWheel);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      container.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, [isScrollLocked]);

  const handleSectionInView = (sectionId) => {
    setActiveSection(sectionId);
    setIsScrollLocked(false);
  };

  return (
    <div 
      ref={containerRef} 
      className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory"
      style={{ scrollBehavior: isScrollLocked ? 'auto' : 'smooth' }}
    >
      {companies.map((company, index) => (
        <Section
          key={company.id}
          id={company.id}
          iframeUrl={company.websiteUrl}
          isLast={index === companies.length - 1}
          isActive={company.id === activeSection}
          onInView={handleSectionInView}
          className={company.id === 'intro' ? 'bg-[#c3c0ff]' : ''}
        >
          <h3 className={`text-5xl md:text-6xl font-heading ${company.id === 'intro' ? 'text-black' : 'text-white'}`}>
            {company.name}
          </h3>
        </Section>
      ))}
    </div>
  );
};

export default Work;