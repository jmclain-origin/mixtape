import React from 'react'

type Props = {}

const AboutIntro = (props: Props) => {
  return (
    <header className="text-center space-y-3">
        <h1 className="text-4xl">Valentine's Day Mix Tape</h1>
        <p>
          Anyone could easily throw together a playlist, but I wanted to do a
          something a little extra. Long gone are the days of the cassette tape,
          even if I managed to compile this to such an arcane media type, who
          the hell would has such a player.
        </p>
        <p>
          Sometimes I wish for a simpler time, when we had less technology
          embedded in our lives. There's something nostalgic and romantic about
          sitting there hitting record to capture a song from the radio or other
          media. The closest we come these days is a playlist which is missing
          an element, effort.
        </p>
        <p>
          So I present you with a modern day mix tape with added context. A list
          of songs from our past and present that make me think of you. Hope you
          enjoy.
        </p>
      </header>
  )
}

export default AboutIntro