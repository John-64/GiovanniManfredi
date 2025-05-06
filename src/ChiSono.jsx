import './ChiSono.css'
import './index.css'

function ChiSono() {
  return (
    <div className='w-full'>
      <h1 className='uppercase text-center text-primary font-light md:text-2xl'>Chi sono</h1>
      <div className='mt-2 text-justify text-text font-light md:text-2xl md:leading-loose'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore in alias nihil rem! Est illum id laborum ipsam magni omnis magnam soluta culpa. Ad, recusandae laudantium, doloremque labore repellat et ducimus atque asperiores quisquam ex nobis aut ipsa voluptates quae accusamus expedita, laborum consequuntur saepe tempore illo! Vitae, harum aliquid. Possimus eius maxime eum molestiae consequuntur, necessitatibus temporibus. Neque labore nemo at modi consectetur eaque laborum quibusdam soluta deserunt veritatis exercitationem voluptas consequatur dolores vel dolorum doloremque quis, id repellat! Architecto voluptatem iste cumque quam ab dolor! Voluptatum voluptate dignissimos blanditiis vitae, sequi, fugiat quam ad sed corporis amet atque quidem nam illo repellendus nihil, quasi totam odit laudantium fugit ut vel hic? Minus consectetur eos, iste saepe beatae, enim ipsam aliquam alias quia tenetur voluptates quae suscipit quas autem exercitationem dignissimos quisquam modi sunt est veniam ex iusto rem. Ipsa, repellendus ipsum! Asperiores repellat dicta, exercitationem dolorum, similique odio, vero natus suscipit dolorem dolores a! Corrupti aspernatur molestias tempore, harum obcaecati error autem deleniti eum at nobis ad dolorum ducimus enim ipsam, labore, pariatur molestiae nisi quidem cupiditate magni excepturi temporibus ab maiores! Accusamus expedita doloremque fuga nesciunt temporibus alias, eveniet soluta consectetur nemo voluptatum ullam.
      </div>

      {/* Card universitaria */}
      <div className='w-full relative mt-5'>
        <div className="background-card w-full rounded-3xl absolute z-[-1] flex justify-center items-center 
        h-30
        md:h-40
        lg:h-50">
          <h2 className='text-end w-full flex px-3 justify-center items-center text-background font-medium uppercase
          text-md
          sm:text-xl
          md:text-3xl'>
            La mia laurea triennale in Informatica all'Università di Salerno
          </h2>
        </div>
        <div className="top-0 p-2 w-full grid
          [grid-template-areas:'image_blank''text_text'] grid-cols-[30%_auto]
          md:[grid-template-areas:'image_blank''image_text'] 
          grid-rows-[theme(spacing.26)_auto]
          md:grid-rows-[theme(spacing.36)_auto] md:grid-cols-[35%_auto]
          lg:grid-rows-[theme(spacing.46)_auto]
        ">
          <div className="[grid-area:blank]"></div>

          <div className="[grid-area:image] w-max md:w-full flex items-start justify-start">
            <img
              src="./unisa.png"
              alt="Foto dell'Università"
              className="rounded-2xl h-26 md:w-full md:h-min shadow-md"/>
          </div>

          <div className="[grid-area:text] text-justify text-text font-light md:text-2xl mt-4 md:pl-4 md:mt-6 lg:mt-16 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore in alias nihil rem! Est illum id laborum ipsam magni omnis magnam soluta culpa. Ad, recusandae laudantium, doloremque labore repellat et ducimus atque asperiores quisquam ex nobis aut ipsa voluptates quae accusamus expedita, laborum consequuntur saepe tempore illo! Vitae, harum aliquid.
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChiSono