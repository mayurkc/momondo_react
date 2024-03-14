import React from 'react'
import Banner from './Banner/Banner';
import SomeFun from './BFun/SomeFun';
import Destination from './Destination/Destination';
import Estimate from './Estimate_Blog/Estimate';
import Footer from '../Footer/Footer';

function HomePage() {
  return (
    <>
    {/* HomePage */}
    <Banner/>
    <SomeFun/>
    <Destination/>
    <Estimate/>
    <Footer/>
    </>
  )
}

export default HomePage;