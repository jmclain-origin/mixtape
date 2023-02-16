import React from "react";

type Props = {};

const BonusTracks = (props: Props) => {
  return (
    <section id="bonusTracks">
        <h3 className="text-4xl text-center">Bonus Tracks</h3>
        <p className="text-md px-4">
          There were a few more tracks I wanted to add but 13 tracks to the
          B-side was deliberate and there are some I felt didn't fit to the
          theme of the list. So here's the tracks that didn't quite make it but
          are worth including.
        </p>
        <article className="space-y-2 mt-10 text-center px-2">
          <p className="text-xs">
            This one may be cliche, but not as much as adding Closer by Nine
            Inch Nails.
          </p>
          <iframe
            title="I Want You to Want Me - CheapTrick"
            src="https://open.spotify.com/embed/track/6hnCx2jmD0RPkbtzUXSBn4?utm_source=generator&theme=0"
            width="100%"
            height="100"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>

          <p className="text-xs">
            Another popular cliche track, while it fit the idea that words are
            hard, there just wasn't a spot for it.
          </p>
          <iframe
            title="More Than Words - Extreme"
            src="https://open.spotify.com/embed/track/1gVgkQFOKa8Wc1HYsJtPdH?utm_source=generator&theme=0"
            width="100%"
            height="100"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>

          <p className="text-xs">
            Something from K.Flay absolutely belonged on the list but got cut.
            You introduced me to her music and I've been a fan ever since. This
            one takes me back to time that feels so long ago.
          </p>
          <iframe
            title="Wishing It Was You - K.Flay"
            src="https://open.spotify.com/embed/track/5xA6t0HYlKl79rhhKhyfzO?utm_source=generator&theme=0"
            width="100%"
            height="100"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>

          <p className="text-xs">
            I recall when you first showed me this song, it was a perfect song
            for a feeling that was surfacing at the time. Not sure if back then
            you were showing me how you felt, pointing out how I felt, or if it
            was just a cool song. This one stuck with me and still comes to mind
            as this feeling starts resurfacing, but something changed. I do
            wanna know.
          </p>
          <iframe
            title="Do I Wanna Know? - Arctic Monkeys"
            src="https://open.spotify.com/embed/track/5FVd6KXrgO9B3JPmC8OPst?utm_source=generator&theme=0"
            width="100%"
            height="100"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>

          <p className="text-xs">
            This one lives rent free in my head, it's a catchy tune that we all
            know but it's this music video version that planted it there. Your
            welcome.
          </p>
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/tu_2xfhsrz8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
        </article>
      </section>
  )
}

export default BonusTracks;
