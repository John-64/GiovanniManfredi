import './Competenze.css'
import './index.css'
import { useState, useEffect } from 'react';
import html from './assets/competenze/html.png';
import css from './assets/competenze/css.png';
import js from './assets/competenze/js.png';
import ts from './assets/competenze/ts.png';
import angular from './assets/competenze/angular.png';
import tailwind from './assets/competenze/tailwind.svg';
import react from './assets/competenze/react.png';
import java from './assets/competenze/java.png';
import python from './assets/competenze/python.png';
import HighlightText from './HighlightText.jsx';

function Competenze() {
  const [animatedFramework, setAnimatedFramework] = useState(null);
  
  const frameworks = [
    { name: 'HTML', image: html },
    { name: 'CSS', image: css},
    { name: 'JS', image: js },
    { name: 'TS', image: ts },
    { name: 'ANGULAR', image: angular },
    { name: 'TAILWIND', image: tailwind },
    { name: 'REACT', image: react },
    { name: 'JAVA', image: java },
    { name: 'PYTHON', image: python },
  ];

  useEffect(() => {
    const animateRandomFramework = () => {
      const randomIndex = Math.floor(Math.random() * frameworks.length);
      setAnimatedFramework(frameworks[randomIndex].name);
      
      setTimeout(() => {
        setAnimatedFramework(null);
        setTimeout(animateRandomFramework, 1000);
      }, 1200);
    };
    animateRandomFramework();
    
    return () => {
      setAnimatedFramework(null);
    };
  }, []);

  return (
    <div className='w-full'>
      <h1 className='uppercase text-center text-primary font-light md:text-2xl'>Competenze</h1>
      <div className='mt-2 text-justify text-text font-light md:text-2xl
      leading-8 sm:leading-9 md:leading-10 lg:leading-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore in alias nihil rem! Est illum id laborum ipsam magni omnis magnam soluta culpa. Ad, recusandae laudantium, doloremque labore repellat et ducimus atque asperiores quisquam ex nobis aut ipsa voluptates quae accusamus expedita, laborum consequuntur saepe tempore illo! Vitae, harum aliquid. <HighlightText color="red">Possimus eius maxime eum molestiae consequuntur, necessitatibus temporibus. Neque labore nemo at modi consectetur eaque laborum quibusdam soluta deserunt veritatis exercitationem voluptas consequatur dolores vel dolorum doloremque quis, id repellat! Architecto voluptatem iste cumque quam ab dolor!</HighlightText> Voluptatum voluptate dignissimos blanditiis vitae, sequi, fugiat quam ad sed corporis amet atque quidem nam illo repellendus nihil, quasi totam odit laudantium fugit ut vel hic?
      
        <div className="w-full flex flex-wrap justify-center items-center gap-8 sm:pt-5">
          {frameworks.map((framework) => (
            <div
              key={framework.name}
              className="relative flex justify-center items-end bg-primary rounded-lg mt-16 w-20 h-10 sm:w-24 sm:h-12 md:w-30 md:h-15"
            >
              <div 
                className={`absolute w-3/5 top-0 left-1/2 transform -translate-x-1/2 -translate-y-3/4 transition-all duration-700 ease-in-out
                  ${animatedFramework === framework.name ? 'translate-y-[-100%] scale-110' : 'translate-y-[-75%] scale-100'}`}
              >
                <img
                  src={framework.image}
                  alt={framework.name}
                  className="w-full"
                />
              </div>
              <p className="w-full h-full flex justify-center items-end pb-1 text-lg font-bold text-white text-sm md:text-md lg:text-lg">
                {framework.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Competenze