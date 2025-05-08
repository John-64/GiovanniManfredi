import './Contattami.css'
import './index.css'
import React, { useState, useEffect, useRef } from 'react';
import { Mail } from 'lucide-react';
import bollo from './assets/marcaDaBollo.png';

function Contattami() {
  const [isVisible, setIsVisible] = useState(false);
  const letterRef = useRef(null);
  
  useEffect(() => {
    const target = letterRef.current;
  
    if (!target) return;
  
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.4,
        rootMargin: '0px 0px -100px 0px'
      }
    );
  
    observer.observe(target);
  
    return () => {
      observer.unobserve(target);
    };
  }, []);
  

  return (
    <div className="w-full">
      <h1 className='uppercase text-center text-primary font-light md:text-2xl'>Contattami</h1>
      <div className="mt-2 text-justify text-text font-light md:text-2xl
      leading-8 sm:leading-9 md:leading-10 lg:leading-12">
        <p>
          Per qualsiasi domanda o informazione, non esitare a contattarmi, sarà un piacere risponderti! Clicca sulla lettera per mandarmi una mail!
        </p>
        <div className="flex justify-center mt-6">
          <div 
            className="relative cursor-pointer transition-all duration-500 hover:scale-105"
            ref={letterRef}
          >
            <a
              href="mailto:manfredi2000@hotmail.it"
            >
            {/* Envelope container */}
            <div className={`relative w-60 h-40 sm:w-72 sm:h-48`}>
              {/* Envelope body - the main envelope */}
              <div className="absolute inset-0 bg-text/05 border-2 border-text/30 rounded-md shadow-md overflow-hidden">
                
                {/* Envelope back side with fold lines */}
                <div className="absolute inset-0">
                  {/* Center fold line */}
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-text/30"></div>
                  
                  {/* Diagonal fold lines */}
                  <div className="absolute top-0 left-0 w-1/2 h-1/2 border-r border-b border-text/30 transform -rotate-45 origin-bottom-right"></div>
                  <div className="absolute top-0 right-0 w-1/2 h-1/2 border-l border-b border-text/30 transform rotate-45 origin-bottom-left"></div>
                </div>
                
                {/* Envelope flap that opens */}
                <div 
                  className={`absolute top-0 left-0 w-full h-1/2 bg-gray-100 border-b border-text origin-bottom transition-transform duration-1000 ease-in-out z-20
                  ${isVisible ? 'transform translate-y-2 rotate-x-160' : 'transform rotate-x-0'}`}
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 60%, 0 100%)'
                  }}
                >
                  {/* Bollo */}
                  <div className="absolute top-2 right-2 w-13 h-13" style={{ backgroundImage: `url(${bollo})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
                </div>
                
                {/* Letter inside */}
                <div 
                  className={`absolute top-4 left-4 right-4 bottom-4 bg-white rounded shadow-sm transition-transform duration-1000 ease-in-out z-10
                  ${isVisible ? 'transform -translate-y-8' : ''}`}
                >
                  <div className="h-full flex flex-col justify-center p-3">
                    <div className="h-2 w-full bg-gray-200 rounded mb-2"></div>
                    <div className="h-2 w-4/5 bg-gray-200 rounded mb-2"></div>
                    <div className="h-2 w-full bg-gray-200 rounded mb-2"></div>
                    <div className="h-2 w-3/4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-2 w-2/3 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`absolute bg-primary text-background text-center left-[22%] py-2 px-4 z-30 rounded-md transition-all duration-700 flex items-center justify-center gap-2
              ${isVisible ? 'opacity-100 top-2' : 'opacity-0 top-20'}`}>
                <Mail size={16} />
                <span className="text-sm">manfredi2000@hotmail.it</span>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contattami