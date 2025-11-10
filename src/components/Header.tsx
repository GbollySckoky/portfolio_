import { useState } from 'react';
import {  Moon, Sun } from 'lucide-react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Get current time
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <header className='bg-black text-white  py-6 border-b fixed w-full z-10 border-b-gray-700'>
      <div className='flex items-center justify-between w-[90%] mx-auto'>

        {/* Center - Location and Time */}
        <div className='font'>
          <span className='text-xl font-semibold font'>
            Lagos, NG | {getCurrentTime()}
          </span>
        </div>

        {/* Right Side - Resume Link and Dark Mode Toggle */}
        <div className='flex items-center gap-6'>
          <a 
            href='#resume' 
            className='text-xl font-semibold hover:text-gray-300 transition-colors'
          >
            Résumé
          </a>
          
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode}
            className='relative inline-flex items-center h-7 w-14 rounded-full bg-gray-700 transition-colors duration-300 hover:bg-gray-600'
          >
            <span 
              className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${
                isDarkMode ? 'translate-x-7' : 'translate-x-1'
              }`}
            >
              {isDarkMode ? (
                <Moon size={16} className='text-gray-800 m-1' />
              ) : (
                <Sun size={16} className='text-yellow-500 m-1' />
              )}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;