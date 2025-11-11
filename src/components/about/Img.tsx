import about from '../../assets/IMG_1892.jpeg'
import sckoky from '../../assets/IMG_1859.png'
import okay from '../../assets/AFA6AD86.jpeg'
import gbolly from  '../../assets/IMG_2088.jpeg'
const Img = () => {
  const images = [gbolly, about, sckoky,okay] 
  return (
    <div className="mt-20">
        <div className="grid md:grid-cols-2 w-full gap-5">
            {images.map((image,index) => (
                <img src={image} key={index} className='h-[500px] object-cover rounded-lg border w-full' />
            ))}
        </div>
    </div>
  )
}

export default Img