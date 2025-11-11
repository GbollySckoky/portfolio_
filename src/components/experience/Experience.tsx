import experience from '../../assets/james-harrison-vpOeXr5wmR4-unsplash.jpg'
import Navbar from '../Navbar'
import ExperienceTimeline from './ExperienceTimeLine'


const Experience = () => {
  return (
    <div className='py-30'>
      <div className="relative md:w-[70%] mx-auto">
        <img 
          src={experience}
          alt='Experience'
          className='w-full h-[500px] object-cover rounnded-lg'
        />
        <div className='absolute inset-0 bg-black/60'>
          <div className='w-[80%] mx-auto h-full flex flex-col items-center justify-center text-center text-white space-y-4'>
            <h1 className='font-bold text-2xl md:text-5xl leading-tight'>
              Building My Dev Story: One Commit at a Time
            </h1>
            <p className='text-lg md:text-xl font-light max-w-2xl'>
              Lessons learned, bugs squashed, and skills earned on my software engineering journey.
            </p>
          </div>
        </div>
      </div>
      <ExperienceTimeline />
      <Navbar />
    </div>
  )
}

export default Experience