import './Progetti.css'
import './index.css'
import HighlightText from './HighlightText.jsx';

function Progetti() {
  return (
    <div className='w-full'>
      <h1 className='uppercase text-center text-primary font-light md:text-2xl'>Progetti</h1>
      <div className='mt-2 text-justify text-text font-light md:text-2xl
      leading-8 sm:leading-9 md:leading-10 lg:leading-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <HighlightText color="blue">Veritatis earum, aperiam dicta error alias dolorem asperiores suscipit amet quibusdam voluptatem!</HighlightText> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis earum, aperiam dicta error alias dolorem asperiores suscipit amet quibusdam voluptatem!
      </div>
    </div>
  )
}

export default Progetti