import image from '../../assets/download.jpeg'
import image1 from '../../assets/download (1).jpeg'
import image2 from '../../assets/download (2).jpeg'
import image3 from '../../assets/download (3).jpeg'
import image4 from '../../assets/download (4).jpeg'
import image5 from '../../assets/download (5).jpeg'


const Movies = () => {
    const Images = [image, image1, image2, image3, image4, image5]
  return (
    <div className='bg-white rounded-lg border p-10 '>
        <div className='grid grid-cols-3 gap-4'> 
            {Images.map((image, index) => (
                <div key={index}  className="rounded-lg bg-black p-5">
                    <img src={image} alt="Movies Images"  className=' w-full object-contain h-[200px]' />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Movies