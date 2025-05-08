import './ChiSono.css'
import './index.css'
import HighlightText from './HighlightText.jsx';

function ChiSono() {
  return (
    <div className='w-full'>
      <h1 className='uppercase text-center text-primary font-light md:text-2xl'>Chi sono</h1>
      <div className='mt-2 text-justify text-text font-light md:text-2xl 
        leading-8 sm:leading-9 md:leading-10 lg:leading-12
      '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore in alias nihil rem! Est illum id laborum ipsam magni omnis magnam soluta culpa. <HighlightText color="yellow">Ad, recusandae laudantium, doloremque labore repellat et ducimus atque asperiores quisquam ex nobis aut ipsa voluptates quae accusamus expedita, laborum consequuntur saepe tempore illo!</HighlightText> Vitae, harum aliquid. Possimus eius maxime eum molestiae consequuntur, necessitatibus temporibus. Neque labore nemo at modi consectetur eaque laborum quibusdam soluta deserunt veritatis exercitationem voluptas consequatur dolores vel dolorum doloremque quis, id repellat! Architecto voluptatem iste cumque quam ab dolor! Voluptatum voluptate dignissimos blanditiis vitae, sequi, fugiat quam ad sed corporis amet atque quidem nam illo repellendus nihil, quasi totam odit laudantium fugit ut vel hic? Minus consectetur eos, iste saepe beatae, enim ipsam aliquam alias quia tenetur voluptates quae suscipit quas autem exercitationem dignissimos quisquam modi sunt est veniam ex iusto rem. Ipsa, repellendus ipsum! Asperiores repellat dicta, exercitationem dolorum, similique odio, vero natus suscipit dolorem dolores a! Corrupti aspernatur molestias tempore, harum obcaecati error autem deleniti eum at nobis ad dolorum ducimus enim ipsam, labore, pariatur molestiae nisi quidem cupiditate magni excepturi temporibus ab maiores! Accusamus expedita doloremque fuga nesciunt temporibus alias, eveniet soluta consectetur nemo voluptatum ullam.
      </div>

      <div className="border-2 border-transparent w-full relative mt-5">
        <img
        src="./unisa.png"
        alt="Foto dell'Università"
        className="rounded-2xl sm:w-2/7 h-26 sm:h-auto shadow-md sm:float-left m-2 sm:mb-0 md:mr-5"/>

        <div className="background-card w-full rounded-3xl z-[-1] flex justify-center items-center absolute left-0 top-0
        h-30
        md:h-35
        lg:h-40">
          <h3 className='text-end uppercase px-3 text-background font-semibold lg:font-bold
          text-md
          sm:text-lg
          md:text-xl
          lg:text-2xl'>
            La mia laurea triennale in Informatica all'Università di Salerno
          </h3>
        </div>
        
        <p className='text-justify text-text font-light md:text-2xl
        leading-8 sm:leading-9 md:leading-10 lg:leading-12
        mt-5
        sm:mt-30
        md:mt-35
        lg:mt-40'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <HighlightText color="green">Tempore in alias nihil rem! Est illum id laborum ipsam magni omnis magnam soluta culpa. Ad, recusandae laudantium, doloremque labore repellat et ducimus atque asperiores quisquam ex nobis aut ipsa voluptates quae accusamus expedita, laborum consequuntur saepe tempore illo! Vitae, harum aliquid.</HighlightText> Possimus eius maxime eum molestiae consequuntur, necessitatibus temporibus. Neque labore nemo at modi consectetur eaque laborum quibusdam soluta deserunt veritatis exercitationem voluptas consequatur dolores vel dolorum doloremque quis, id repellat! Architecto voluptatem iste cumque quam ab dolor! Voluptatum voluptate dignissimos blanditiis vitae, sequi, fugiat quam ad sed corporis amet atque quidem nam illo repellendus nihil, quasi totam odit laudantium fugit ut vel hic?
        </p>
      </div>
    </div>
  )
}

export default ChiSono