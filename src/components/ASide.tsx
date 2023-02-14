import React from 'react'

type Props = {}

const ASide = (props: Props) => {
  return (
    <section id="Aside" className="space-y-4">
        <h2 className="text-5xl text-center">A Side</h2>
        <p className="text-sm px-4">
          This first side is pretty simple and was easiest to just attach a
          playlist/radio station that I find myself often listening to lately.
          But for me it sets a mood, a genre you kinda got me hooked on and now
          I've come to associate it with you. Either way it's chill, calming,
          and relaxing and just reminds me of hanging out with you in our more
          recent times.
        </p>
        <iframe
          title="Aside"
          src="https://open.spotify.com/embed/playlist/37i9dQZF1E4vV3JUOuLRSO?utm_source=generator&theme=0"
          width="100%"
          height="420"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </section>
  )
}

export default ASide