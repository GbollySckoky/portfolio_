import shaare from '../../assets/Primary Logo White 1.png'
import intrapair from '../../assets/logo-dark.svg'

const experiences = [
  {
    period: "October 2024 - Present",
    company: "Shaaré",
    role: "Frontend Developer",
    logo: shaare,
    tags: ["Tech & Innovation", "Service Provider"],
    description: [
      "Shaaré is on a mission to make it easier for everyone to live life on their terms by providing access to simple, affordable, and efficient service delivery. ",
      "We do this by connecting experienced, skilled, and vetted service providers to noble work opportunities near them while eliminating the stress of seeking, vetting, booking, and managing service providers for the consumer.",
      "With a focus on home cleaning, we are committed to refining the experience of service delivery by providing outstanding, stress-free and affordable service to our consumers through our Sparklers daily.",
      "Our thoroughly vetted and experienced, skilled cleaners are called ✨SPARKLERS✨"
    ]
  },
  {
    period: "October 2023 - August 2024",
    company: "Intrapair Technologies Limited",
    role: "Frontend Developer",
    logo: intrapair,
    tags: ["Software Development", "Tech & Innovation", "Healthcare IT"],
    description: [
      "Product Engineers and Open Source Enthusiasts",
      "We are a remarkable team of ardent creators, imaginative designers, experienced developers, and dedicated project managers who put in collective efforts and innovative ideas to deliver reliable and delightful products"
    ]
  }
];

const ExperienceTimeline = () => {
  return (
    <div className="min-h-screen bg-black text-white mt-20">
      {/* Timeline */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden lg:block absolute left-[100px] top-0 bottom-0 w-0.5 bg-gray-800"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="mb-16 flex flex-col lg:flex-row gap-4 lg:gap-8">
              {/* Date Badge */}
              <div className="relative z-10">
                <div className="bg-white text-black px-4 py-2 rounded-full font-semibold whitespace-nowrap text-sm w-fit">
                  {exp.period}
                </div>
              </div>
              
              {/* Content Card */}
              <div className="flex-1 flex flex-col lg:flex-row gap-6 lg:gap-0">
                {/* Logo */}
                <div className="border rounded-lg h-fit w-full lg:w-[400px] p-5">
                  <div className="flex items-center justify-center">
                    <img src={exp.logo} alt="Image" className='w-fit' />
                  </div>
                  {/* Tags */}
                  <div className="mt-6 grid grid-cols-2 gap-2">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium text-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Description */}
                <div className="flex-1 lg:pl-10">
                  <h2 className="text-3xl font-bold mb-2">{exp.company}</h2>
                  <h3 className="text-xl mb-6 text-gray-400">{exp.role}</h3>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    {exp.description.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;