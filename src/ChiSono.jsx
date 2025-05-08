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
        {/*Ciao, mi chiamo Giovanni Manfredi e sono un ragazzo pugliese con un'infinita passione verso tutto cioò che riguarda l'informatica e dispositivi elettronici ad essa correlate. Ho conseguito, in data 22/03/2024, la laurea triennale in informatica (L-31) presso l'università degli studi di Salerno con votazione di 110 e Lode. Terminato questo percorso, ho deciso di prendermi circa 6 mesi di pausa dagli studi accademici per capire a fondo in quale disciplica continuare i miei studi e approfondire la mia conoscenza, di cui sono molto appassionato, nello sviluppo Front End; ho avuto quindi modo di studiare nuovi framework, linguaggi di programmazione e affinare le mie conoscenze nella creazione di siti web. Al termine di questi sei mesi, ho deciso di voler continuare il mio percorso accademico nel settore della sicurezza informatica, motivo per il quale attualmente sto proseguendo i miei studi con la magistrale di Informatica, sempre presso l'Università degli studi di Salerno (LM-18), area Sicurezza Informatica. In questi anni ho "imparato a leggere", mi sono infatti innamorato follemente della lettura, motivo per il quale, troverete anche una sezione contenente alcuni dei libri che ho amato e che voglio consigliarvi.*/}

        Lorem ipsum dolor sit amet consectetur adipisicing elit. <HighlightText color="yellow">Sequi modi adipisci deleniti ad quam commodi dolore, impedit nisi, veniam consequuntur repellat expedita illum quo delectus hic velit, laborum maxime vel quod facilis.</HighlightText> Est aperiam incidunt error, velit, labore eos facilis reiciendis porro nulla ipsam, sunt fugiat maxime cumque eum enim suscipit ratione. Placeat accusantium obcaecati eum laboriosam ex, assumenda nulla id ratione et tempore alias adipisci harum unde officia, amet autem saepe exercitationem ad! Enim ad corporis deleniti qui modi odio, in molestiae sit aperiam optio accusamus ducimus assumenda, minima quidem exercitationem eos! Necessitatibus unde deleniti reiciendis, doloribus dolorum, aperiam iure dignissimos sapiente quam eligendi aspernatur accusamus veritatis, repudiandae ad mollitia ab. Porro fugit reiciendis pariatur soluta, assumenda magnam iure necessitatibus in accusantium quas. Temporibus sint optio corrupti ex expedita aliquid impedit et quisquam id fugit velit maxime molestiae nam tenetur asperiores voluptas esse harum perferendis, nulla architecto corporis qui.
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
            La mia esperienza all'Università degli studi di Salerno
          </h3>
        </div>
        
        <p className='text-justify text-text font-light md:text-2xl
        leading-8 sm:leading-9 md:leading-10 lg:leading-12
        mt-5
        sm:mt-30
        md:mt-35
        lg:mt-40'>
          {/*Come detto, sono un ragazzo pugliese, dunque per venire a studiare qui a Salerno ho dovuto affrontare molte e significative esperienze diverse, dal banale viaggio (che agli inizi, causa covid, mi richiedeva circa 8 ore), alle più complesse come la distanzza da parenti, fidanzata e amici.*/}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <HighlightText color="green">Fugit quia, soluta quos Doloremque, sapiente excepturi non aliquam laudantium rem tenetur harum eligendi labore magnam. Enim atque nam tempora.</HighlightText> Ipsum nam vel repudiandae totam adipisci debitis doloribus cum iure voluptates, ducimus nihil neque id est reiciendis dolorum et a reprehenderit atque officia temporibus ullam praesentium labore enim quas? Ipsam obcaecati delectus possimus molestiae nobis ratione fugiat odit, iure hic saepe, aspernatur dicta labore, sequi neque eligendi totam reprehenderit in dolore veniam. Itaque sapiente sit iste doloribus in commodi amet, est necessitatibus quos iusto, impedit quisquam neque adipisci aliquam modi laborum nam delectus! Quos, repellendus fuga?
        </p>
      </div>
    </div>
  )
}

export default ChiSono