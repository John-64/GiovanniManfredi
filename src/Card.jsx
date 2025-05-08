import './Card.css'
import './index.css'
import pattern from './assets/pattern.png';

function Card() {
  return (
    <div className="w-full justify-center items-center card-animation">
      <div className="relative grid w-full px-12 py-6 rounded-xl shadow-[0_0_10px_#C1C1C1] bg-white h-auto
        [grid-template-areas:'avatar''info''more-info']
        lg:[grid-template-areas:'info_avatar''more-info_avatar']
      ">
        <div className="absolute inset-0 rounded-xl z-0 opacity-5 bg-repeat" style={{ backgroundImage: `url(${pattern})` }}/>
        {/* Info */}
        <div className="[grid-area:info] flex flex-col z-10 mt-4 lg:mt-0
          justify-center items-center text-center
          lg:justify-end lg:items-start
        ">
          <p className="text-text font-light 
            text-md
            lg:text-lg
          ">Ciao, io sono</p>
          <div className="font-semibold text-card-name 
            text-xl 
            md:text-2xl 
            lg:text-3xl
          ">Giovanni Manfredi</div>
          <div className="text-primary text-base font-light
            text-md
            lg:text-lg
          ">Dottore in Informatica</div>
        </div>

        {/* Avatar */}
        <div className="[grid-area:avatar] flex items-center z-10 justify-center 
          h-30
          sm:h-40
          md:h-50
          lg:justify-end lg:h-full
        ">
          <img
            src="./avatar.png"
            alt="Foto di Giovanni Manfredi"
            className="rounded-full border border-card-avatar object-cover h-full lg:h-3/4"/>
        </div>

        {/* Altre info */}
        <div className="[grid-area:more-info] mt-4 grid [grid-template-areas:'anni_laurea''luogo_luogo'] gap-2 w-full p-2 z-10
          sm:p-0 sm:flex sm:gap-4 sm:col-span-full sm:justify-center sm:items-center
          lg:justify-start lg:items-start
        ">
          <div className="[grid-area:anni] flex flex-col items-center justify-center z-1 bg-background border border-[#C1C1C1] rounded-md
            w-full h-12
            sm:w-16 sm:h-16
            md:w-20 md:h-20
          ">
            <div className="uppercase text-primary font-semibold text-xs sm:text-md md:text-lg">Anni</div>
            <div className="font-light text-text text-ms sm:text-xl ">25</div>
          </div>
          <div className="[grid-area:laurea] flex flex-col items-center justify-center z-1 bg-background border border-[#C1C1C1] rounded-md
            w-full h-12
            sm:w-16 sm:h-16
            md:w-20 md:h-20
          ">
            <div className="uppercase text-primary font-semibold text-xs sm:text-l md:text-lg">Laurea</div>
            <div className="font-light text-text text-ms sm:text-xl">110L</div>
          </div>
          <div className="[grid-area:luogo] flex flex-col items-center justify-center z-1 bg-background border border-[#C1C1C1] rounded-md
            w-full h-12
            sm:w-45 sm:h-16
            md:w-45 md:h-20
          ">
            <div className="uppercase text-primary font-semibold text-xs sm:text-l md:text-lg">Dove mi trovo</div>
            <div className="font-light text-text text-ms sm:text-xl">Foggia, Italia</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card