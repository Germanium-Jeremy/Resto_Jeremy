import React from 'react'
import First from '../components/home/First'
import CarouselFake from '../components/home/CarouselFake'
import BreakFast from '../components/home/BreakFast'
import OtherMeals from '../components/home/OtherMeals'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div className={``} initial={{bottom: "-100%"}} animate={{bottom: 0}} exit={{bottom: "100%"}} transition={{duration: 0.2, delay: 0.2}}>
      <motion.div className={`text-white bg-black py-[2rem] px-[.6rem]`}>
        <First />
      </motion.div>
      <CarouselFake />
      <motion.div className={`px-[1rem] py-[1rem] my-[2rem]`} initial={{left: "-100%", opacity: 0}} whileInView={{left: 0, opacity: 1}} exit={{left: "100%", opacity: 0.5}} transition={{duration: 0.2, delay: 0.2}}>
        <BreakFast />
      </motion.div>
      <motion.div className={`px-[1rem] py-[1rem] mb-[2rem]`} initial={{right: "-100%", opacity: 0}} whileInView={{right: 0, opacity: 1}} exit={{right: "100%", opacity: 0.5}} transition={{duration: 0.2, delay: 0.2}}>
        <OtherMeals />
      </motion.div>
    </motion.div>
  )
}

export default Home