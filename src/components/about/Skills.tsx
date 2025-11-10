import { motion } from "framer-motion";

const Skills = () => {
    const skills = [
        'Typescript', 'Javascript', 'Next.js', 'React.js', 'Svelte', 'React Native',
         'Git', 'Github', 'HTML', 'CSS', 'TailwindCss'
    ]
  return (
    <div>
        <h1 className='text-5xl md:text-7xl font-bold leading-tight mt-15'>
           SKILLS
        </h1>
        <div className="grid grid-cols-4 gap-5 mt-5">
        {skills.map((skill, index) => (
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }} key={index}>
            <p  className='border-2 rounded-full py-2 px-3 text-center font font-xl font-medium electric-glow '>{skill}</p>
            </motion.div>
        ))}
        </div>
    </div>
  )
}

export default Skills