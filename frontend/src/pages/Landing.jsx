import React from 'react';
import Hero from '../components/Hero';
import Promise from '../components/Promise';
import LandingSlide from '../components/LandingSlide';
// import 
import Awards from '../components/Awards';
import ReachUs from '../components/ReachUs';
import { motion } from 'framer-motion';

const Landing = () => {

  return (
    <motion.div className='pb-[2rem]' initial={{bottom: "-100%"}} animate={{bottom: 0}} exit={{bottom: "100%"}} transition={{duration: 0.2, delay: 0.2}}>
      <motion.div className={`px-[1rem] md:px-[3rem] text-gray-950 pt-5 max-sm:pb-5 sm:pb-5 md:flex md:gap-6 w-full justify-center h-fit bg-black`} 
        initial={{opacity: 0, y: -75}} whileInView={{opacity: 1, y: 0}} exit={{opacity: 0, y: 20}} transition={{ duration: 0.2, delay: 0.2 }}>
        <Hero />
      </motion.div>
      <motion.div className={`px-[1rem] md:px-[3rem] py-5 bg-auth-img1 bg-cover bg-opacity-20`}
        initial={{opacity: 0}} whileInView={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.2, delay: 0.2}}>
        <Promise />
      </motion.div>
      <LandingSlide />
      <motion.div className={`px-[1rem] md:px-[3rem] my-6 md:flex gap-5 md:items-center mb-6 overflow-hidden`}
        initial={{width: 0}} whileInView={{width: window.innerWidth}} exit={{x: window.innerWidth}} transition={{duration: 0.2, delay: 0.2}}>
        <Awards />
      </motion.div>
      <motion.div className={`mx-[1rem] md:mx-[3rem] lg:hidden my-20 flex items-center justify-center md:gap-[2rem] md:border md:border-black`}
        initial={{top: "100%", opacity: 0}} whileInView={{top: 0, opacity: 1}} exit={{top: "-100%", opacity: 0}} transition={{duration: 0.2, delay: 0.2}}>
        <ReachUs />
      </motion.div>
    </motion.div>
  );
};

export default Landing;