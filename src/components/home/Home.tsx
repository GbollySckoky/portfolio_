
import Info from "./Info";


const Home = () => {
  return (
    <div className='bg min-h-screen w-full relative'>
        {/* overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center">
            <div className="w-[60%] max-auto">
                <h1 className='text-5xl md:text-7xl font-bold leading-tight'>
                    COKER-GBOLAHAN 
                </h1>
                <h1 className='text-5xl md:text-7xl font-bold leading-tight'>OPEYEMI</h1>
                <p className="software-engineer-badge-animated text-xl md:text-2xl font-medium mt-6">
                    Frontend Developer
                </p>
                <div className="flex items-center gap-2 mt-6">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        width="18" 
                        height="18" 
                        fill="none"
                        // className="flex-shrink-0"
                    >
                        <path 
                            d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                        />
                        <path 
                            d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                        />
                    </svg>
                    <p className='text-lg font-medium'>Lagos, Nigeria</p>
                </div>
                <Info />
                <p className="electric-glow text-[18px] font-medium mt-5">P.S. For the best experience, check this out on a desktop!</p>
            </div>
        </div>
    </div>
  )
}

export default Home