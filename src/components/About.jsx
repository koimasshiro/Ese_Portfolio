import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard = ({index, title, icon}) =>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn('right', "spring", 0.5 * index, 0.75)} 
      className='w-full green-pink-gradient p-[1px] rounded-[20px] 
      shadow-card'>
        <div options={{max: 45, scale: 1, speed: 450}} className='bg-tertiary rounded-[20px] 
        py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p variants={fadeIn("", "", 0.1, 1)} 
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    A cool software engineer with a 
    deep passion for creating efficient, scalable, and 
    innovative solutions to complex problems. My passions include debugging, optimizing, and creating programs that make people's lives easier.
    When I'm not busy crunching code, you can usually find me binge watching movies and series, or playing trivia games whilst reading a novel.
    I'm a big believer in the power of artificial intelligence and solving problems, and I'm constantly learning new things to keep up with the latest tech trends.
     So, if you ever need a software engineer who's both cool and hilarious (if I do say so myself), look no further than yours truly.
    </motion.p>
    <motion.div variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    <a href="/Immaculate Eseosa Imhariagbe.pdf" download className='bg-tertiary py-3 px-8 outline-none 
          w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>Download CV</a>
    </motion.div>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index)=>(
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")