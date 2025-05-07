import './App.css'
import './index.css'
import Header from './Header'
import Card from './Card'
import ChiSono from './ChiSono'
import Competenze from './Competenze'
import Progetti from './Progetti'
import Studio from './Studio'
import Contattami from './Contattami'
import { useEffect, useMemo, useRef, useState } from "react";

function App() {
  const [active, setActive] = useState("Chi sono");

  const chiSonoRef = useRef();
  const competenzeRef = useRef();
  const progettiRef = useRef();
  const studioRef = useRef();
  const contattamiRef = useRef();

  const sections = useMemo(() => [
    { id: "chi-sono", ref: chiSonoRef },
    { id: "competenze", ref: competenzeRef },
    { id: "progetti", ref: progettiRef },
    { id: "studio", ref: studioRef },
    { id: "contattami", ref: contattamiRef },
  ], []);

  useEffect(() => {
    const setupObserver = () => {
      if (window.currentObserver) {
        sections.forEach(({ ref }) => {
          if (ref.current) window.currentObserver.unobserve(ref.current);
        });
      }
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
              const id = entry.target.id.replace("-", " ");
              setActive(id.charAt(0).toUpperCase() + id.slice(1));
            }
          });
        },
        { 
          threshold: [0.1, 0.2, 0.3, 0.4, 0.5],
          rootMargin: "-10% 0px -10% 0px"
        }
      );
      
      window.currentObserver = observer;
      
      sections.forEach(({ ref }) => {
        if (ref.current) observer.observe(ref.current);
      });
    };

    setupObserver();
    
    const handleResize = () => {
      setTimeout(setupObserver, 200);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (window.currentObserver) {
        sections.forEach(({ ref }) => {
          if (ref.current) window.currentObserver.unobserve(ref.current);
        });
        window.currentObserver = null;
      }
    };
  }, [sections]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.currentObserver) {
        sections.forEach(({ ref }) => {
          if (ref.current) {
            const entry = {
              target: ref.current,
              isIntersecting: isElementInViewport(ref.current),
              intersectionRatio: calculateVisiblePercentage(ref.current)
            };
            
            if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
              const id = entry.target.id.replace("-", " ");
              setActive(id.charAt(0).toUpperCase() + id.slice(1));
            }
          }
        });
      }
    };
    
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.7 &&
        rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) * 0.3
      );
    }
    
    function calculateVisiblePercentage(el) {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      return Math.max(0, visibleHeight) / rect.height;
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return (
    <>
      <Header active={active} setActive={setActive} />
      <main>
        <div className="h-10"></div>
        
        <Card />

        <div className="h-10"></div>

        <section
          id="chi-sono"
          ref={chiSonoRef}
          className="scroll-mt-[30px] md:scroll-mt-[40px] lg:scroll-mt-[50px]"
        >
          <ChiSono />
        </section>
        
        <div className="h-10"></div>

        <section
          id="competenze"
          ref={competenzeRef}
          className="scroll-mt-[30px] md:scroll-mt-[40px] lg:scroll-mt-[50px]"
        >
          <Competenze />
        </section>

        <div className="h-10"></div>

        <section
          id="progetti"
          ref={progettiRef}
          className="scroll-mt-[30px] md:scroll-mt-[40px] lg:scroll-mt-[50px]"
        >
          <Progetti />
        </section>

        <div className="h-10"></div>

        <section
          id="studio"
          ref={studioRef}
          className="scroll-mt-[30px] md:scroll-mt-[40px] lg:scroll-mt-[50px]"
        >
          <Studio />
        </section>

        <div className="h-10"></div>

        <section
          id="contattami"
          ref={contattamiRef}
          className="scroll-mt-[30px] md:scroll-mt-[40px] lg:scroll-mt-[50px]"
        >
          <Contattami />
        </section>

        <div className="h-10"></div>
      </main>
    </>
  );
}

export default App;