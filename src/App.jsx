import './App.css'
import './index.css'
import Header from './Header'
import Card from './Card'
import ChiSono from './ChiSono'
import Competenze from './Competenze'
import { useEffect, useMemo, useRef, useState } from "react";

function App() {
  const [active, setActive] = useState("Chi sono");

  const chiSonoRef = useRef();
  const competenzeRef = useRef();

  const sections = useMemo(() => [
    { id: "chi-sono", ref: chiSonoRef },
    { id: "competenze", ref: competenzeRef },
  ], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            const id = entry.target.id.replace("-", " ");
            setActive(id.charAt(0).toUpperCase() + id.slice(1));
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
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
      </main>
      <div className="h-200"></div>
    </>
  );
}

export default App;