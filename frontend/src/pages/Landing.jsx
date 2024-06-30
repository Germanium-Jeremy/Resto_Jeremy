import React, { useEffect, useState } from 'react';
// import axios from 'axios'
// import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Promise from '../components/Promise';
import LandingSlide from '../components/LandingSlide';
import Awards from '../components/Awards';
import ReachUs from '../components/ReachUs';

const Landing = () => {
  return (
    <div className='pb-[2rem]'>
      <div className={`px-[1rem] md:px-[3rem] text-gray-950 pt-5 max-sm:pb-5 md:flex md:gap-6 w-full justify-center h-fit bg-black`}>
        <Hero />
      </div>
      <div className={`px-[1rem] md:px-[3rem] py-5 bg-auth-img1 bg-cover bg-opacity-20`}>
        <Promise />
      </div>
      <LandingSlide />
      <Awards />
      <ReachUs />
    </div>
  );
};

export default Landing;