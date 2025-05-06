import './Header.css'
import './index.css'
import { useState } from "react";

function Header({ active, setActive }) {
  const [hovered, setHovered] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = ["Chi sono", "Competenze", "Progetti", "Studio", "Contattami"];

  const handleClick = (item) => {
    setActive(item);
    setIsMenuOpen(false);
    const el = document.getElementById(item.replace(/\s+/g, "-").toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };  

  return (
    <header className="flex justify-between items-center sticky top-0 w-auto px-5 z-10 h-[30px] md:h-[40px] lg:h-[50px] shadow-md bg-white text-white">
      {/* Me */}
      <div className="h-full w-auto flex justify-start items-center gap-2">
        <img src="./me.jpg" alt="Logo" className='h-2/3 rounded-full' />
        <span className='w-min text-nowrap text-text font-light text-sm md:text-md lg:text-lg'>Giovanni Manfredi</span>
        <div className="flex justify-center items-center relative w-6 h-6">
          <div className="w-4 h-4 rounded-full bg-green-700 z-10"></div>
          <div className="absolute rounded-full bg-green-700/30 animate-available z-0"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="h-full z-0 justify-center items-center text-primary [display:none] sm:flex">
      <ul className="flex justify-center items-center list-none gap-5 group lowercase font-semibold text-sm md:text-md lg:text-lg">
        {items.map((item) => (
          <span
            key={item}
            onClick={() => handleClick(item)}
            onMouseEnter={() => setHovered(item)}
            onMouseLeave={() => setHovered(null)}
            className={`
              transition-all duration-100 hover:cursor-pointer hover:border-b-2 hover:border-primary
              ${hovered
                ? hovered === item
                  ? "text-primary"
                  : "text-text"
                : active === item
                  ? "text-primary"
                  : "text-text"
              }
            `}
          >
            {item}
          </span>
        ))}
      </ul>
    </nav>

      {/* Hamburger menu */}
      <button
        className="sm:hidden flex justify-center items-center h-full text-primary cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="material-symbols-outlined">{isMenuOpen ? "close" : "menu"}</span>
      </button>
      <div
        className={`
          absolute top-[100%] left-0 w-full bg-white shadow-md flex flex-col items-start px-4 py-2 sm:hidden z-20
          transform transition-all linear
          ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
        `}
      >
        {items.map((item) => (
          <span
            key={item}
            onClick={() => handleClick(item)}
            className={`
              w-full py-0.5 lowercase font-semibold text-md flex justify-center items-center
              ${active === item ? "text-primary" : "text-text"}
            `}
          >
            <div className='cursor-pointer'>{item}</div>
          </span>
        ))}
      </div>


    </header>
  )
}

export default Header