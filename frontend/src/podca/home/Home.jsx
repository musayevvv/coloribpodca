import React from 'react'
import Episode from './episode/episode'
import BehindTheMic from './behindthemic/BehindTheMic'
import Featured from './featured/Featured'

import Postcasts from './podcasts/Postcasts'

const Home = () => {
  return (
    <>
      <Episode />
      <Postcasts />
      <BehindTheMic />
      <Featured />

    </>)
}

export default Home