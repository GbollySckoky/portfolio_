import Navbar from "../Navbar"
import Img from "./Img"
import Interest from "./Interest"
import Skills from "./Skills"


const About = () => {
  return (
    <div className="">
        <div className='w-[90%] mx-auto py-30'>
            <h1 className='text-5xl  md:text-7xl font-bold leading-tight'>
                MEET GBOLAHAN 
            </h1>
            <div className="space-y-3 mt-5">
                <p className="md:text-[18px] font-medium font">
                    Hi! I'm Gbolahan a Frontend Developer passionate about transforming ideas into visually captivating and user-focused digital experiences. 
                    I take pride in crafting interfaces that don’t just look good, but feel natural to use making the web more inclusive, accessible, and enjoyable for everyone.
                </p>

                <p className="md:text-[18px] font-medium font">
                    I specialize in turning creative concepts into functional, high-performing products. 
                    With a deep curiosity for emerging technologies, I’m constantly exploring new ways to push boundaries,
                    improve user experience, and optimize performance for the modern web.
                </p>

                <p className="md:text-[18px] font-medium font">
                    When I’m not coding, I enjoy playing games and listening to music they help me relax, recharge, and spark new ideas.
                </p>
            </div>
            <Img />
            <Skills />
            <Interest />
        </div>
        <Navbar />
    </div>
  )
}

export default About
