import { useState, useEffect } from 'react'
import playbet from '../../assets/Screenshot 2025-11-02 at 10.12.17.png'
import shaare from '../../assets/Screenshot 2025-11-02 at 11.12.02.png'
import flexa from '../../assets/Screenshot 2025-11-02 at 11.16.20.png'
import posh from '../../assets/Screenshot 2025-11-02 at 10.59.24.png'
import netflix from '../../assets/Screenshot 2025-11-02 at 10.48.52.png'
import digicon from '../../assets/Screenshot 2025-03-01 at 20.42.54 (1).png'
import tmr from '../../assets/Screenshot 2025-11-02 at 14.42.17.png'
import Navbar from '../Navbar'

// TypeScript interfaces
interface Project {
  img: string
  title: string
  description: string | string[] | any
  technologies: string[]
  liveLink: string
  githubLink?: string
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [imageLoading, setImageLoading] = useState<{ [key: number]: boolean }>({})

  const projects: Project[] = [
    {
      img: shaare,
      title: 'Shaare',
      description: [
        'Shaare is a modern web platform designed to simplify the process of booking and paying for cleaning services online. The platform allows users to discover potential cleaners, book services, and securely pay through a smooth and intuitive interface.',
        'As a Frontend Developer, I collaborated closely with backend developers and UI/UX designers to bring the product vision to life. My contributions included implementing Paystack payment integration and Google Autocomplete to enhance the booking experience.',
        ['Secure online payment using Paystack', 'Google Autocomplete for location input', 'Dynamic booking flow with real-time updates', 'Clean, responsive, and user-friendly interface']
      ],
      technologies: ['Next.js', 'TypeScript', 'Context-API', 'Paystack API', 'Google Maps API', 'Tailwind CSS'],
      liveLink: 'https://book.getshaare.com/',
    },
    {
      img: playbet,
      title: 'PlayBet',
      description: [
        'PlayBet is a web platform that allows users to register their teams for various competitions, track live progress, and communicate seamlessly with teammates in real time.',
        'As a Frontend Developer, I built the user interface and integrated real-time features using WebSocket communication, enabling instant updates and in-app messaging between players.',
        ['Team registration and competition management', 'Real-time updates on match progress', 'Live chat powered by WebSocket', 'Responsive interface for players and organizers']
      ],
      technologies: ['React', 'WebSocket', 'API Integration', 'Tailwind CSS'],
      liveLink: 'https://dashboard.playbeta.co/',
    },
    {
      img: tmr,
      title: 'TMR Health Care',
      description: [
        'TMR Health Care is a multi-interface web platform designed to streamline healthcare operations for patients, doctors, and pharmacists.',
        'As a Frontend Developer, I built responsive interfaces for each user type, integrating real-time data and secure workflows.',
        ['Multi-interface platform for all user types', 'Appointment booking and scheduling', 'Pharmacy access management', 'Secure and user-friendly interface']
      ],
      technologies: ['Next.js', 'TypeScript', 'Zustand', 'Tailwind CSS'],
      liveLink: 'https://tmrhealthcare.com',
    },
    {
      img: digicon,
      title: 'Digicon',
      description: [
        'Digicon is an online marketplace for gadgets, designed to provide a seamless shopping experience for users.',
        'As a Frontend Developer, I built the user interface and implemented product listing, filtering, and checkout flows.',
        ['Product catalog with filtering', 'Secure checkout and payments', 'Responsive design', 'Seamless shopping experience']
      ],
      technologies: ['React', 'API Integration', 'TypeScript', 'Tailwind CSS'],
      liveLink: 'https://digiconsolutions.netlify.app/admin/',
    },
    {
      img: posh,
      title: 'PoshPace',
      description: [
        'PoshPace is an online marketplace for fashion and apparel, designed to provide a seamless shopping experience.',
        'As a Frontend Developer, I built the user interface and implemented key features such as product listing, filtering, wishlist, and shopping cart functionality.',
        ['Product catalog with search and filtering', 'Wishlist and cart management', 'Secure payment with Stripe', 'Responsive fashion shopping interface']
      ],
      technologies: ['React', 'Redux', 'TypeScript', 'Tailwind CSS'],
      liveLink: 'https://e-commerce-ruddy-rho.vercel.app/',
    },
    {
      img: flexa,
      title: 'Flexa',
      description: 'Flexa, your premier financial companion, is the forefront online savings and investing platform in Nigeria. Over the past years, our community has preserved and invested billions of Naira.',
      technologies: ['React', 'JavaScript'],
      liveLink: 'https://finance--psi.vercel.app/',
    },
    {
      img: netflix,
      title: 'Netflix Clone',
      description: 'A Netflix UI clone with movie browsing and video playback capabilities, featuring the TMDB API integration.',
      technologies: ['React', 'TMDB API', 'JavaScript', 'Firebase'],
      liveLink: 'https://movie-box-seven-psi.vercel.app/',
    },
  ]

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    if (selectedProject) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  const openModal = (project: Project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  const renderDescription = (description: string | string[] | any) => {
    if (typeof description === 'string') {
      return <p className='text-gray-300 text-base leading-relaxed'>{description}</p>
    }
    
    if (Array.isArray(description)) {
      return (
        <div className='space-y-4'>
          {description.map((item, index) => {
            if (typeof item === 'string') {
              return <p key={index} className='text-gray-300 text-base leading-relaxed'>{item}</p>
            }
            if (Array.isArray(item)) {
              return (
                <ul key={index} className='space-y-2 ml-4'>
                  {item.map((feature, featureIndex) => (
                    <li key={featureIndex} className='text-gray-400 text-sm flex items-start'>
                      <span className='text-blue-400 mr-2 mt-1'>•</span>
                      <span>{feature.replace(/^-\s*/, '')}</span>
                    </li>
                  ))}
                </ul>
              )
            }
            return null
          })}
        </div>
      )
    }
    
    return null
  }

  return (
    <>
    <div className='min-h-screen py-30'>
      {/* Header */}
      <div className='w-[90%] mx-auto mb-12'>
        <h1 className='text-3xl md:text-7xl font-bold text-white mb-4 font'>My Projects</h1>
        <p className='text-gray-400 text-lg'>A collection of my recent work and contributions</p>
      </div>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] mx-auto'>
        {projects.map((project, index) => (
          <div 
            key={index} 
            className='border border-gray-800 rounded-xl overflow-hidden group cursor-pointer relative hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10'
            onClick={() => openModal(project)}
            role='button'
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && openModal(project)}
            aria-label={`View details for ${project.title}`}
          >
            {imageLoading[index] && (
              <div className='absolute inset-0 bg-gray-800 animate-pulse' />
            )}
            <img 
              src={project.img} 
              alt={project.title} 
              className='w-full h-[250px] md:h-[300px] object-cover transition-transform duration-300 group-hover:scale-105'
              onLoad={() => setImageLoading(prev => ({ ...prev, [index]: false }))}
              onError={() => setImageLoading(prev => ({ ...prev, [index]: false }))}
            />
            <div className='absolute inset-0 from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-8'>
              <h3 className='text-white text-xl md:text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
                {project.title}
              </h3>
            </div>
            {/* Tech badges on hover */}
            <div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <span className='bg-blue-600 text-white text-xs px-3 py-1 rounded-full'>
                {project.technologies[0]}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div 
          className='fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 animate-fade-in'
          onClick={closeModal}
          role='dialog'
          aria-modal='true'
          aria-labelledby='modal-title'
        >
          <div 
            className='bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl animate-slide-up'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className='absolute cursor-pointer top-4 right-4 text-gray-400 hover:text-white text-4xl font-bold z-10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors'
              aria-label='Close modal'
            >
              ×
            </button>

            {/* Project Image */}
            <div className='relative h-[300px] md:h-[400px] overflow-hidden rounded-t-2xl'>
              <img 
                src={selectedProject.img} 
                alt={selectedProject.title} 
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 from-gray-900 to-transparent' />
            </div>

            {/* Project Details */}
            <div className='p-6 md:p-8'>
              <h2 id='modal-title' className='text-3xl md:text-4xl font-bold text-white mb-6'>
                {selectedProject.title}
              </h2>
              
              <div className='mb-8'>
                {renderDescription(selectedProject.description)}
              </div>

              {/* Technologies */}
              <div className='mb-8'>
                <h3 className='text-xl font-semibold text-white mb-4 flex items-center'>
                  <span className='w-1 h-6 bg-blue-500 mr-3 rounded-full'></span>
                  Technologies Used
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {selectedProject.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className='bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-gray-700 transition-colors'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className='flex flex-col sm:flex-row gap-4'>
                <a 
                  href={selectedProject.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 flex-1 text-center font-semibold hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105'
                >
                  View Live Site →
                </a>
                {selectedProject.githubLink && (
                  <a 
                    href={selectedProject.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg transition-all duration-300 flex-1 text-center font-semibold'
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
    <Navbar />
    </>
  )
}

export default Projects