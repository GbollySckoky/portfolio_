import gbolly from '../../assets/rethink.jpg'
import about from '../../assets/gbolly.jpg'
// import sckoky from '../../assets/sckoky.jpg'
const Img = () => {
  // const image = [gbolly, about, sckoky] 
  return (
    <div className='grid grid-cols-12 gap-5 mt-20'>
        <div className="col-span-12 md:col-span-6 h-[700px] overflow-hidden rounded-lg border">
            <img 
              src={about} 
              alt="Gbolahan Image" 
              className='w-full h-full object-cover'
            />
        </div>
        <div className="col-span-12 md:col-span-6 h-[700px] overflow-hidden rounded-lg border">
            <img 
              src={gbolly} 
              alt="Gbolahan Image" 
              className='w-full h-full object-cover'
            />
        </div>
    </div>
  )
}

export default Img