import './ChiSono.css'
import './index.css'

function ChiSono() {
  return (
    <div className="w-full justify-center items-center card-animation">
      <div className="relative grid gap-6 w-full px-12 rounded-xl shadow-[0_0_10px_#C1C1C1] card bg-white
        md:[grid-template-areas:'info_avatar''more-info_more-info']
        lg:[grid-template-areas:'info_avatar''more-info_avatar']
      ">
        <div className="absolute inset-0 rounded-xl opacity-5 bg-[url('./pattern.png')] bg-repeat" />
        {/* Info */}
        <div className="[grid-area:info] flex flex-col justify-end gap-1 text-start">
          <p className="text-text text-lg font-light">Ciao, io sono</p>
          <div className="text-3xl md:text-3xl font-semibold text-card-name">Giovanni Manfredi</div>
          <div className="text-primary text-base font-light">Dottore in Informatica</div>
        </div>

        {/* Avatar */}
        <div className="[grid-area:avatar] flex md:justify-end items-center h-full">
          <img
            src="./avatar.png"
            alt="Foto di Giovanni Manfredi"
            className="rounded-full border border-card-avatar h-4/5 object-cover"
          />
        </div>

        {/* Altre info */}
        <div className="[grid-area:more-info] flex justify-start items-start gap-4 col-span-full mt-4">
          <div className="flex flex-col items-center justify-center md:w-20 md:h-20 z-1 bg-background border border-[#C1C1C1] rounded-md">
            <div className="uppercase text-primary text-l font-medium">Anni</div>
            <div className="text-2xl font-light text-text">24</div>
          </div>
          <div className="flex flex-col items-center justify-center md:w-20 md:h-20 z-1 bg-background border border-[#C1C1C1] rounded-md">
            <div className="uppercase text-primary text-l font-medium">Laurea</div>
            <div className="text-2xl font-light text-text">110L</div>
          </div>
          <div className="flex flex-col items-center justify-center md:w-45 md:h-20 z-1 bg-background border border-[#C1C1C1] rounded-md">
            <div className="uppercase text-primary text-l font-medium">Dove mi trovo</div>
            <div className="text-2xl font-light text-text">Foggia, Italia</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChiSono