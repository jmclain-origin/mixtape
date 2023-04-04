import React, { useState } from 'react'
import HeartHero from 'components/HeartHero'

const Home = (): JSX.Element => {
    const [show, setShow] = useState<boolean>(true)
  return (
    <>
        <HeartHero isShown={show} setIsShown={setShow} />
    </>
  )
}

export default Home
