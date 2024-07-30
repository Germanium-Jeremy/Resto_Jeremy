import React from 'react'
import First from '../components/home/First'
import CarouselFake from '../components/home/CarouselFake'
import BreakFast from '../components/home/BreakFast'
import OtherMeals from '../components/home/OtherMeals'

const Home = () => {
  return (
    <div className={``}>
     <First />
     <CarouselFake />
     <BreakFast />
     <OtherMeals />
    </div>
  )
}

export default Home