import './Header.css'
import './index.css'
import { useState } from "react";

function Header() {
  const [active, setActive] = useState("Chi sono");
  const items = ["Chi sono", "Competenze", "Progetti", "Studio"];

  const handleClick = (item) => {
    setActive(item);
    // Se vuoi scrollare, puoi usare un ref o id per ogni sezione
    const el = document.getElementById(item.replace(/\s+/g, "-").toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="
      sticky top-0 w-full md:h-[50px] grid px-5
      [grid-template-areas:'logo_nav_contact-me']
      md:[grid-template-columns:1fr_3fr_1fr] 
      [grid-template-rows:100%] 
      z-10 shadow-md
      bg-white 
      text-white 
    ">
      <div className="h-full [grid-area:logo] flex justify-start items-center gap-2">
        <img src="./me.jpg" alt="Logo" className='h-2/3 rounded-full' />
        <span className='text-text md:text-sm lg:text-xl font-light'>Giovanni Manfredi</span>
        <div className="flex justify-center items-center relative w-6 h-6">
          <div className="w-4 h-4 rounded-full bg-green-700 z-10"></div>
          <div className="absolute rounded-full bg-green-700/30 animate-available z-0"></div>
        </div>
      </div>

      <nav className="h-full z-0 [grid-area:nav] flex justify-center items-center text-primary">
        <ul className="flex justify-center items-center list-none gap-5 group">
          {items.map((item) => (
            <li
              key={item}
              onClick={() => handleClick(item)}
              className={`
                px-4 py-1 rounded-full uppercase text-sm font-semibold transition-all duration-100 shadow-button
                ${active === item ? "scale-110 border-2 border-primary bg-primary text-background" : ""}
                hover:cursor-pointer hover:scale-110 hover:border-2 hover:border-primary`}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="h-full [grid-area:contact-me] flex justify-end items-center">
        <a
          className="flex items-center rounded-full gap-2 px-4 py-1 text-sm text-primary shadow-button font-bold hover:scale-110 border-2 border-background transition-all duration-100 hover:border-primary hover:bg-primary hover:text-background"
          href="mailto:manfredi2000@hotmail.it"
        >
          <span className="material-symbols-outlined">mail</span>
          <p className="m-0 uppercase">Scrivimi</p>
        </a>
      </div>
    </header>
  )
}

export default Header