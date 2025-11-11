import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-black cursor-pointer text-white border border-white/20 px-3 md:px-6 py-3 md:py-4 rounded-full mb-10 fixed bottom-4 z-50 w-[95%] md:w-[90%] lg:w-[70%] xl:w-[50%] left-1/2 -translate-x-1/2'>
      <div className='flex items-center justify-center gap-2 md:gap-6 lg:gap-12 p-2 md:p-3 cursor-pointer'>
        <Link 
          to='/' 
          className='text-xs md:text-sm lg:text-base font-medium hover:text-black hover:bg-white rounded-full px-3 md:px-4 lg:px-6 py-2 md:py-3 transition-all duration-300 cursor-pointer'
        >
          Home
        </Link>
        <Link 
          to='/about' 
          className='text-xs md:text-sm lg:text-base font-medium hover:text-black hover:bg-white rounded-full px-3 md:px-4 lg:px-6 py-2 md:py-3 transition-all duration-300'
        >
          About
        </Link>
        <Link 
          to='/projects' 
          className='text-xs md:text-sm lg:text-base font-medium hover:text-black hover:bg-white rounded-full px-3 md:px-4 lg:px-6 py-2 md:py-3 transition-all duration-300'
        >
          Projects
        </Link>
        <Link 
          to='/experience' 
          className='text-xs md:text-sm lg:text-base font-medium hover:text-black hover:bg-white rounded-full px-3 md:px-4 lg:px-6 py-2 md:py-3 transition-all duration-300'
        >
          Meet Gbolahan
        </Link>
      </div>
    </nav>
  )
}

export default Navbar