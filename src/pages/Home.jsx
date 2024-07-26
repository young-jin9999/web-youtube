import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Music from '../components/contents/Music'
import Webd from '../components/contents/Webd'
import Website from '../components/contents/Website'
import Gsap from '../components/contents/Gsap'
import Portfolio from '../components/contents/Portfolio'
import Youtube from '../components/contents/Youtube'

const Home = () => {
  return (
    <Main title="Home" description="YouTube">
      <Today></Today>
      <Music></Music>
      <Webd></Webd>
      <Website></Website>
      <Gsap></Gsap>
      <Portfolio></Portfolio>
      <Youtube></Youtube>
    </Main>
  )
}

export default Home