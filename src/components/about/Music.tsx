import image1 from '../../assets/download (6).jpeg'
import image2 from '../../assets/download (7).jpeg'
import image3 from '../../assets/download (8).jpeg'
import image4 from '../../assets/download (9).jpeg'
import image5 from '../../assets/lungu.jpg'
import image6 from '../../assets/Untitled.jpg'

const Music = () => {
    const Images = [ image1, image2, image3, image4,image5,image6]
  return (
    <div className='bg-white rounded-lg border p-10 '>
        <div className='grid md:grid-cols-3 gap-4'> 
            {Images.map((image, index) => (
                <div key={index}  className="rounded-lg bg-black p-5">
                    <img src={image} alt="Movies Images"  className=' w-full object-contain h-[200px]' />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Music