import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import { X } from 'lucide-react';
import burgerAnimation from '../burger.json';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const lottieRef = useRef();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (lottieRef.current && !isOpen) {
      lottieRef.current.play();
    }
  };

  const handleNavClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Lottie Burger Icon or X Icon */}
      <button 
        onClick={toggleMenu} 
        className="fixed top-4 right-4 z-50 text-black w-16 h-16 flex items-center justify-center"
      >
        <div className={`absolute transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
          <Lottie
            lottieRef={lottieRef}
            animationData={burgerAnimation}
            loop={true}
            autoplay={true}
          />
        </div>
        <div className={`absolute transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          <X size={32} />
        </div>
      </button>

      {/* Sidebar Menu */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-white bg-opacity-80 backdrop-blur-sm shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-40`}>
        <div className="flex flex-col h-full pt-16">
          {/* Navigation Links */}
          <nav className="flex-grow">
            <ul className="flex flex-col items-center">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Work', path: '/work' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'Contact Us', path: '/' }
              ].map((item) => (
                <li key={item.name} className="my-3">
                  <Link 
                    to={item.path} 
                    className="text-black text-xl hover:no-underline"
                    onClick={() => handleNavClick(item.path)}
                  >
                    <span className="hover:border-b-2 hover:border-[#fff1d6] pb-1">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;