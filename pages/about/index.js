import React, {useState} from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaJava,
  FaPhp,
  FaAws,
  FaDatabase,
  FaPython,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAdobephotoshop,
  SiCanva
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <FaWordpress />,
          <FaPhp/>,
          <FaAws/>,
          <FaPython/>,
          <FaDatabase/>
        ],
      },
      {
        title: 'Mobile Development',
        icons: [
          <FaJava/>
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobephotoshop />,<SiCanva/>],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'BNSP Junior Mobile Developer',
        stage: 'Diqitalent',
      },
      {
        title: 'Telkom University Junior Mobile Developer Class',
        stage: 'Diqitalent',
      },
      {
        title: 'Javascript Programming Class',
        stage: 'Dicoding',
      },
      {
        title: 'Class Creating Back-end Applications',
        stage: 'Dicoding',
      },
      {
        title: 'Workshop ReactJs',
        stage: 'Dunia Coding',
      },
      {
        title: 'AWS Cloud basics learning Class',
        stage: 'Dicoding',
      },
    ],
  },
  {
    title: 'organization',
    info: [
      {
        title: 'Badan Eksekutif Mahasiswa Fastikom UMPP',
        stage: '2022 - Until Now',
      },
      {
        title: 'Komite Mahasiswa Jurusan Informatika',
        stage: '2022 - Until Now',
      },
      {
        title: 'Persaudaraan Setia Hati Terate',
        stage: '2019 - Until Now',
      },
    ],
  },
  {
    title: 'Education',
    info: [
      {
        title: 'SMP 01 Doro',
        stage: '2016 - 2019',
      },
      {
        title: 'SMK Muhammadiyah Karanganyar',
        stage: '2019 - 2022',
      },
      {
        title: 'Universitas Muhammadiyah Pekajangan Pekalongan',
        stage: '2022 - Until Now',
      },
    ],
  },
];

//components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// Counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return(
  <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
    <Circles/>
    {/* avatar img */}
    <motion.div 
    variants={fadeIn('right', 0.2)}
    initial="hidden"
    animate="show"
    exit="hidden"
    className='hidden xl:flex absolute bottom-0 -left-[390px]'>
      <Avatar/>
    </motion.div>
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
      {/* Text */}
      <div className='flex-1 flex flex-col justify-center'>
        <motion.h2
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="h2">
        Informatics <span className='text-accent'>Innovators</span> Carve the Future of Technology
        </motion.h2>
        <motion.p
         variants={fadeIn('right', 0.4)}
         initial="hidden"
         animate="show"
         exit="hidden"
         className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
        Reza Edi Saputra, UMPP Informatics undergraduate student is proficient in programming and active in research projects. As a dedicated explorer, Reza creates innovations, brings pride to his university, and is ready to contribute to the world of informatics.
        </motion.p>
        {/* Counters */}
        <motion.div
        variants={fadeIn('right', 0.6)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx:0 mb-8">
          <div className="flex flex-1 xl:gap-x-6">
             {/* Experience */}
          <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={2} duration={5} /> +
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of Experience</div>
          </div>
          {/* Clients */}
          <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={50} duration={5} /> +
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied Clients</div>
          </div>
          {/* Projects */}
          <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={10} duration={5} /> +
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished projects</div>
          </div>
          {/* Awards */}
          <div className="relative flex-1">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={3} duration={5} /> +
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Winning awards</div>
          </div>
          </div>
         
        </motion.div>
      </div>
      {/* Information */}
      <motion.div
      variants={fadeIn('left', 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
        <div className='flex gap-x-4 xl:gap-8 mx-auto xl:mx-0 mb-4'>
          {aboutData.map((item, itemIndex) => {
            return (
              <div
              key={itemIndex}
              className={`${
                index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
              } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>

            );
          })}
        </div>
        <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
          {aboutData[index].info.map((item, itemIndex) => {
          return (
            <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
              {/* title */}
              <div className="font-light mb-2 md:mb-0">{item.title}</div>
              <div className="hidden md:flex">-</div>
              <div>{item.stage}</div>
              <div className='flex gap-x-4'>
                {/* Icons */}
                {item.icons?.map((icon, itemIndex) =>{
                  return <div className='text-2xl text-white'>{icon}</div>
                })}
              </div>
            </div>
          );
          })}
        </div>
      </motion.div>
    </div>
  </div>
  );
};

export default About;
