// next image
import Image from "next/image";

//componets
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import { motion } from 'framer-motion';

//text effect
import { useState, useEffect } from 'react';
import { useAnimation } from 'framer-motion';

//variants
import {fadeIn} from '../variants';

const Home = () => {
  const words = ['Freelancer', 'Website Developer', 'Mobile Developer'];
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);

  const controls = useAnimation();

  useEffect(() => {
    const intervalId = setInterval(async () => {
      await controls.start({ opacity: 0, y: -10 });
      setTextIndex((prevIndex) => (prevIndex + 1) % words.length);
      setCurrentText('');
      await controls.start({ opacity: 1, y: 0 });
      setTypingComplete(false);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [controls, words]);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (!typingComplete) {
        setCurrentText((prevText) => {
          if (prevText.length < words[textIndex].length) {
            return words[textIndex].slice(0, prevText.length + 1);
          } else {
            clearInterval(typingInterval);
            setTypingComplete(true);
            return prevText;
          }
        });
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [typingComplete, textIndex, words]);

  return <div className="bg-primary/60 h-full">
    {/* text */}
    <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/30'>
      <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
        {/* title */}
        <motion.h1
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="h1">
          Hi, I am Reza <br/> I am {''}
          <span className="text-accent">{currentText}</span>
          <motion.span
                className="cursor"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
              |
              </motion.span>
        </motion.h1>
        {/* subtitle */}
        <motion.p 
        variants={fadeIn('down', 0.3)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>I believe that design and code are not only about appearance, but also about immersive user experience. Every line of code is a story, and I aspire to provide the best story possible.</motion.p>
        {/* btn */}
        <div className='flex justify-center xl:hidden relative'>
          <ProjectsBtn/>
        </div>
        <motion.div
        variants={fadeIn('down', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex'>
          <ProjectsBtn/>
        </motion.div>
      </div>
    </div>
    {/* image */}
    <div className='w-[1200px] h-full absolute right-0 bottom-0'>
      {/* bg image */}
      <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
      {/* Particles */}
      <ParticlesContainer />
      {/* avatar img */}
      <motion.div
      variants={fadeIn('up', 0.5)}
      initial='hidden'
      animate='show'
      exit='hidden'
      transition={{duration: 1, ease: 'easeInOut'}}
      className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
        <Avatar/>
      </motion.div>
    </div>
  </div>;
};

export default Home;
