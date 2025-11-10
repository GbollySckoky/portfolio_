import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-black text-white border border-white/20 px-6 py-4 rounded-full mb-10 fixed bottom-4 z-50 w-[50%] left-1/2 -translate-x-1/2'>
      <div className='flex items-center justify-center gap-12 p-3'>
        <Link 
          to='/' 
          className='text-base font-medium hover:text-black hover:bg-white rounded-full px-6 py-3 transition-all duration-300 relative group'
        >
          Home
        </Link>
        <Link 
          to='/about' 
          className='text-base font-medium hover:text-black hover:bg-white rounded-full px-6 py-3 transition-all duration-300 relative group'
        >
          About
        </Link>
        <Link 
          to='/projects' 
          className='text-base font-medium hover:text-black hover:bg-white rounded-full px-6 py-3 transition-all duration-300 relative group'
        >
          Projects
        </Link>
        <Link 
          to='/experience' 
          className='text-base font-medium hover:text-black hover:bg-white rounded-full px-6 py-3 transition-all duration-300 relative group'
        >
          Meet Gbolahan
        </Link>
      </div>
    </nav>
  )
}

export default Navbar