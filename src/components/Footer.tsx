import { Link } from 'react-router-dom'

const Footer = () => {
  const socials = [
    {
      title:'LinkedIn',
      url:'https://www.linkedin.com/in/gbolahancoker/'
    },
    {
      title:'Whatsapp',
      url:''
    },
    {
      title:'Github',
      url:'https://github.com/GbollySckoky'
    },
    {
      title:'Twitter',
      url:'https://x.com/Sckokyy'
    },
  ]
  
  return (
    <div className="bg-[#27272A]">
      <div className='py-10 md:py-20 w-[90%] mx-auto'>
        <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold leading-tight'>REACH OUT</h1>
        
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center mt-5 md:mt-5 gap-6 md:gap-4'>
          <Link 
            to="mailto:gbolahandevmail@gmail.com" 
            className='text-sm md:text-xl lg:text-2xl underline font-bold break-all' 
            target='_blank'
          >
            gbolahandevmail@gmail.com
          </Link>
          
          <div className="flex flex-wrap gap-2 md:gap-4">
            {socials.map((social, index) => (
              <Link 
                to={social.url} 
                target='_blank' 
                className='font-medium text-xs md:text-sm lg:text-xl border px-3 md:px-4 py-2 rounded-full flex items-center gap-2 bg-white text-black hover:bg-gray-100 transition-colors' 
                key={index}
              >
                {social.title}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24"
                  width="14" 
                  height="14" 
                  className=" lg:w-[18px] lg:h-[18px]"
                  fill="none"
                >
                  <path 
                    d="M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5" 
                    stroke="black" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer