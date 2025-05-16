import './Contattami.css'
import './index.css'
import React, { useState, useEffect, useRef } from 'react';
import { Mail } from 'lucide-react';
import bollo from './assets/marcaDaBollo.png';

function Contattami() {
  const [isVisible, setIsVisible] = useState(true);
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
      <h1 className='uppercase text-center text-primary font-light md:text-2xl'>Altro</h1>
      <form name="contattami" method="POST" data-netlify="true" className='flex flex-col gap-2 justify-center items-center'>
        <p>
          <label>Your Name: <input type="text" name="name" className='border'/></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" className='border'/></label>
        </p>
        <p>
          <label>Message: <textarea name="message" className='border'></textarea></label>
        </p>
        <p>
          <button type="submit" className='bg-primary text-background px-4 py-1'>Send</button>
        </p>
        </form>

      <div className="mt-2 text-justify text-text font-light md:text-2xl
      leading-8 sm:leading-9 md:leading-10 lg:leading-12">
        <p>
          Per qualsiasi domanda o informazione, non esitare a contattarmi, sarà un piacere risponderti! Clicca sulla lettera per mandarmi una mail!
        </p>
      
        <div className="flex justify-center relative mb-30">
          <div className="relative w-46 h-30 sm:w-56 sm:h-37 md:w-64 md:h-42 lg:w-72 lg:h-48 top-15 border-2 border-gray-200 rounded-md shadow-lg cursor-pointer transition-all duration-500 hover:scale-105" 
                ref={letterRef}>
            <a href="mailto:manfredi2000@hotmail.it">
              <div className="absolute z-60 bottom-2 w-8 h-8 right-2 sm:w-13 sm:h-13" style={{ backgroundImage: `url(${bollo})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
              <div className={`absolute rounded-md w-full h-full bg-gray-100 ease-in-out z-23 origin-top 
                ${isVisible ? 'transform rotate-x-140 bottom-0 border-none duration-500' : 'transform rotate-x-0 bottom-0 delay-300 duration-600'}`}
                style={{
                  clipPath: 'polygon(100% 0,0 0,50% 50%)'
              }} ></div>
      
              <div className={`relative overflow-hidden rounded-sm w-full h-full bottom-0 bg-gray-100 origin-top transition-transform duration-1000 ease-in-out z-30`}
              style={{
                clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0)'
              }} >
                <div className="absolute transform z-50 top-0 bg-gray-200 origin-top-left left-0 w-0.5 -rotate-56 h-[108px] sm:h-[133px] md:h-[152px] lg:h-[171px]"></div>
                <div className="absolute transform z-50 top-0 bg-gray-200 origin-top-right right-0 w-0.5 rotate-56 h-[108px] sm:h-[133px] md:h-[152px] lg:h-[171px]"></div>
                <div className="absolute transform z-50 bottom-0 bg-gray-200 origin-bottom-left left-0 w-0.5 h-[171px] rotate-50"></div>
                <div className="absolute transform z-50 bottom-0 bg-gray-200 origin-bottom-right right-0 w-0.5 h-[171px] -rotate-50"></div>
              </div>

              <div 
                className={`absolute left-4 right-4 bottom-6 sm:bottom-8 md:bottom-10 h-3/4 bg-white rounded shadow-sm transition-all ease-in-out
                ${isVisible ? 'transform -translate-y-10 md:-translate-y-8 z-24 duration-1200' : 'z-22 duration-400'}`}
              >
                <div className="relative h-full flex flex-col justify-center p-3">
                  <div className="h-2 w-full bg-gray-200 rounded mb-2"></div>
                  <div className="h-2 w-4/5 bg-gray-200 rounded mb-2"></div>
                  <div className="h-2 w-full bg-gray-200 rounded mb-2"></div>
                  <div className="h-2 w-3/4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-2 w-2/3 bg-gray-200 rounded"></div>

                  <div className={`absolute left-1/2 transform -translate-x-1/2 scale-70 sm:scale-85 md:scale-95 bg-primary text-background text-center py-2 px-4 z-30 rounded-md transition-all duration-700 flex items-center justify-center gap-2
                  ${isVisible ? 'top-2' : 'top-5'}`}>
                    <Mail size={16} />
                    <span className="text-sm">manfredi2000@hotmail.it</span>
                  </div>
                </div>
                
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contattami