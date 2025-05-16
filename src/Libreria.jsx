import './Libreria.css'
import './index.css'
import { useState } from 'react';
import { Libri } from './data/Libri.js';
import HighlightText from './HighlightText.jsx';

function Progetti() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const sortBooks = (books, sortAsc) => {
    return books.sort((a, b) => {
      if (a.titolo.toLowerCase() < b.titolo.toLowerCase()) return sortAsc ? -1 : 1;
      if (a.titolo.toLowerCase() > b.titolo.toLowerCase()) return sortAsc ? 1 : -1;
      return 0;
    });
  };

  const filteredBooks = sortBooks(
    Libri.filter(libro =>
      libro.titolo.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    sortAsc
  );


  return (
    <div className='w-full'>
      <h1 className='uppercase text-center text-primary font-light md:text-2xl'>Libreria</h1>
      <div className='mt-2 text-justify text-text font-light md:text-2xl
      leading-8 sm:leading-9 md:leading-10 lg:leading-12'>
        {/*Questi sono alcuni dei libri che ho letto e ce vi consiglio:*/}

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <HighlightText color="orange">Nesciunt sapiente ipsum quam numquam nobis? Corporis ut porro suscipit aut deserunt, ratione quaerat animi dolores mollitia quasi sit natus?</HighlightText> Maiores, similique? Maiores iste blanditiis aliquid porro delectus accusamus hic assumenda reiciendis laborum consequatur, ad voluptatem reprehenderit? Incidunt, nulla. Nemo, accusantium aperiam. Ipsa rem beatae similique veritatis nobis consequuntur laboriosam aliquam expedita fugiat eos? Laborum soluta odio, at temporibus veritatis obcaecati molestiae natus unde culpa sit maiores ratione libero repudiandae quaerat beatae iste tenetur nemo dolores blanditiis ipsum facere! Quia quo beatae sequi enim aspernatur temporibus veniam maiores, sint suscipit! Quam, necessitatibus!
      </div>

      <div className='mt-5 mx-10'>
        <div className="overflow-x-auto">
          <div className="relative flex items-center justify-end gap-2 transition-all duration-300 mb-2">
            {showSearch && (
              <input
                type="text"
                placeholder="Cerca titolo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onBlur={() => setTimeout(() => setShowSearch(false), 100)} // evita flicker
                autoFocus
                className="absolute transition-all duration-300 w-48 h-full pr-4 right-12 top-0 focus:outline-none text-text"
              />
            )}

            <div
              className={`flex items-center justify-center cursor-pointer text-text transition-all duration-300 ${showSearch ? 'translate-x-[-180px]' : ''}`}
              onClick={() => setShowSearch(prev => !prev)}
            >
              <span className="material-symbols-outlined">search</span>
            </div>

            <div
              className='flex items-center justify-center cursor-pointer text-text'
              onClick={() => setSortAsc(prev => !prev)}
            >
              <span className="material-symbols-outlined">swap_vert</span>
            </div>
          </div>
          <div className='overflow-hidden border border-text rounded-xl'>
            <table className="min-w-full text-sm text-center text-text  overflow-hidden ">
              <thead className="bg-primary top-0 z-10 border-b border-text text-background uppercase font-bold">
                <tr>
                  <th scope="col" className="py-2 font-medium select-none">Titolo</th>
                  <th scope="col" className="py-2 font-medium select-none">Autore</th>
                  <th scope="col" className="py-2 font-medium select-none">Genere</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-text">
                {filteredBooks.map((libro, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="py-2 font-medium text-gray-900">{libro.titolo}</td>
                    <td className="py-2 hidden md:table-cell">{libro.autore}</td>
                    <td className="py-2">{libro.genere}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Progetti