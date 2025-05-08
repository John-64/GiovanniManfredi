import './Libreria.css'
import './index.css'
import HighlightText from './HighlightText.jsx';

function Progetti() {
  return (
    <div className='w-full'>
      <h1 className='uppercase text-center text-primary font-light md:text-2xl'>Libreria</h1>
      <div className='mt-2 text-justify text-text font-light md:text-2xl
      leading-8 sm:leading-9 md:leading-10 lg:leading-12'>
        {/*Questi sono alcuni dei libri che ho letto e ce vi consiglio:*/}

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <HighlightText color="orange">Nesciunt sapiente ipsum quam numquam nobis? Corporis ut porro suscipit aut deserunt, ratione quaerat animi dolores mollitia quasi sit natus?</HighlightText> Maiores, similique? Maiores iste blanditiis aliquid porro delectus accusamus hic assumenda reiciendis laborum consequatur, ad voluptatem reprehenderit? Incidunt, nulla. Nemo, accusantium aperiam. Ipsa rem beatae similique veritatis nobis consequuntur laboriosam aliquam expedita fugiat eos? Laborum soluta odio, at temporibus veritatis obcaecati molestiae natus unde culpa sit maiores ratione libero repudiandae quaerat beatae iste tenetur nemo dolores blanditiis ipsum facere! Quia quo beatae sequi enim aspernatur temporibus veniam maiores, sint suscipit! Quam, necessitatibus!
      </div>
    </div>
  )
}

export default Progetti