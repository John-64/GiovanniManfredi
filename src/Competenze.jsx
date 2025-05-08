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
        {/*Oltre alla cybersecurity, in cui mi reputo ancora alle prime armi, ho da sempre nutrito un grosso interesse verso lo sviluppo Front End*/}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur dolorum facere explicabo optio impedit sint eveniet minima nihil? Commodi fugiat aliquid autem quae aperiam a sed explicabo vero minus alias! <HighlightText color="red">Alias molestiae placeat at facilis ab mollitia consectetur odio. Placeat quidem itaque perferendis distinctio corporis natus voluptas, alias eligendi omnis, ducimus quam quae reiciendis neque fugiat exercitationem hic deleniti eos doloremque veniam facilis dolorum, veritatis temporibus harum?</HighlightText> Praesentium consequuntur corrupti cumque, provident explicabo quibusdam dicta nisi? Laboriosam ut, deserunt corporis quae temporibus soluta provident aliquam sequi saepe accusantium nihil ipsum beatae nesciunt voluptates ducimus cupiditate inventore aut perspiciatis dolores est harum architecto repellendus atque? Eos dolorem a necessitatibus, quam illum quidem? Pariatur officiis minima laudantium voluptatem ipsam nihil cupiditate, possimus neque? Velit quasi ullam impedit nesciunt praesentium voluptate nisi, vero reprehenderit earum veritatis rem enim odio temporibus necessitatibus nemo dolor ipsam quaerat labore id fugiat sint qui rerum a quo!
      
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