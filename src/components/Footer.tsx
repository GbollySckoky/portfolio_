import { Link } from 'react-router-dom'

const Footer = () => {
  const socials = [
    {
      title:'Linkdein',
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
    <div className="bg-[#27272A] ">
      <div className='py-20 w-[90%] mx-auto'>
        <h1 className='text-5xl md:text-7xl font-bold leading-tight'>REACH OUT</h1>
        <div className='flex justify-between items-center mt-5'>
        <Link to="mailto:gbolahandevmail@gmail.com" className='text-2xl underline font-bold font' target='_blank'>gbolahandevmail@gmail.com</Link>
          <div className="col-span-6 space-x-4 flex">
            {socials.map((social, index) => (
              <Link to={social.url} target='_blank' className='font font-medium text-xl border px-4 py-2 gap-4 rounded-full flex items-center bg-white text-black' key={index}>
                {social.title}
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"
                width="18" 
                height="18" 
                fill="none">
                    <path d="M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5" 
                    stroke="black" 
                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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