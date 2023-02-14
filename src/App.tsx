import React from "react";
import "./app.style.css";

function App() {
  return (
    <main className="p-2 lg:px-40 xl:px-96">
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
      <hr className="my-3 mx-4" />

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
      <hr className="my-3 mx-4" />

      <section id="Bside" className="space-y-4">
        <h2 className="text-5xl text-center">B Side</h2>
        <h3 className="text-2xl text-center">
          Words are hard, music is better
        </h3>
        <p className="text-sm px-4">
          I've had this on going playlist I've been putting together for myself.
          It's inspired by you/us. Instead of sharing the whole thing (which may
          be a bit much), I've picked out some better ones for this list,
          attaching links and some context. Sometimes it's hard to know what to
          say or if I should at all, so I'll let music try and speak for me.
        </p>
        <article className="space-y-2">
          <p className="text-md">
            <span className="font-bold underline">N.I.B.</span>, Kicking this
            off with the vibe from the A-side. A love song from Ozzy with some
            lyrics I can relate to.
          </p>
          <iframe
            title="N.I.B. - Black Sabbath"
            src="https://open.spotify.com/embed/track/2GnVuaoKSkB6Xa07l1BBg8?utm_source=generator&theme=0"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </article>

        <article className="space-y-2">
          <p className="text-md">
            <span className="font-bold underline">Patience</span>, the title
            speaks for itself. I find this one peaceful and it clams my nerves
            when I start to overthink the surrounding topic.
          </p>
          <iframe
            title="Patience - Guns N' Roses"
            src="https://open.spotify.com/embed/track/1OEoNpiyqBghuEUaT6Je6U?utm_source=generator&theme=0"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </article>

        <article className="space-y-2">
          <p className="text-md">
            <span className="font-bold underline">This calling</span>, is a
            track that has more recently popped into my head when I get caught
            up psychoanalyzing this magnetism I feel towards you.
          </p>
          <iframe
            title="This Calling - All that Remains"
            src="https://open.spotify.com/embed/track/2vH5Fy44mcCDUrUk0XbvfH?utm_source=generator&theme=0"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </article>

        <article className="space-y-2">
          <p className="text-md">
            <span className="font-bold underline">Rush</span>, I'll keep simple.
            When I rush, I rush for you.
          </p>
          <iframe
            title="Rush - Depeche Mode"
            src="https://open.spotify.com/embed/track/79V6bZgxKO8LXRbS2y8WUB?utm_source=generator&theme=0"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </article>

        <article className="space-y-2">
          <p className="text-md">
            <span className="font-bold underline">Black No. 1</span>, of course
            this made the list. Especially cause the other night when you dyed
            you hair over here. Also I think the song suits you.
          </p>
          <iframe
            title="Black No. 1 - Type O Negative"
            src="https://open.spotify.com/embed/track/710B9xFjNOisQtKtppZE9p?utm_source=generator&theme=0"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </article>

        <article className="space-y-2">
          <p className="text-md">
            <span className="font-bold underline">Sunlight</span>, reminds of a
            time from our past and it always puts a smile on my face.
          </p>
          <iframe
            title="Sunlight - Modestep"
            src="https://open.spotify.com/embed/track/1iBOtGRc3RlgxSfpKH8qnB?utm_source=generator&theme=0"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </article>

        <article className="space-y-2">
          <p className="text-md">
            <span className="font-bold underline">Would You Ever</span>, kinda
            sappy but good. The music video helped get this one on the list.
            It's another track that pops in my head when I daydream.
          </p>
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/r-SurvChGFk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
          <iframe
            title="Would You Ever - Skrillex"
            src="https://open.spotify.com/embed/track/57p8CBvPOxrvyCbn6ttl5r?utm_source=generator&theme=0"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </article>

        <article className="space-y-2">
          <p className="text-md">
            <span className="font-bold underline">Walk with Me In Hell</span>,
            another title that speaks for itself and a perfect followup to the
            last track. Naturally I'd have some metal that makes this list.
          </p>
          <iframe
            title="Walk with Me In Hell - Lamb of God"
            src="https://open.spotify.com/embed/track/6vjvewW34Y3UiGQtJokGlY?utm_source=generator&theme=0"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </article>

        <article className="space-y-2">
          <p className="text-md">
            <span className="font-bold underline">Dusk in Her Embrace</span>, ah
            Cradle of Filth, easily one of my favorite bands. I've always found
            their lyrical content to be very poetic. Which leaves room for
            interpretation. For me, this song speaks to three aspects of love
            that together represent an absolute love. The "real" love, to love
            the person's soul. The sexual love, to love the person's flesh. The
            eternal love, to love the person unconditionally to no end.
          </p>
          <iframe
            title="Dusk in Her Embrace - Cradle of Filth"
            src="https://open.spotify.com/embed/track/48EgPyGHDxWJe07hHYvl67?utm_source=generator&theme=0"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </article>

        <article className="space-y-2">
          <p className="text-md">
            <span className="font-bold underline">Stinkfist</span>, the
            significance of this track has to do with a moment. To keep it
            simple, it was playing when I had a feeling that overwhelmed me
            while we were together. Now it associated to moment forever.
          </p>
          <iframe
            title="Stinkfist - Tool"
            src="https://open.spotify.com/embed/track/0pwObEOHolQZSldJ2q1wpy?utm_source=generator&theme=0"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </article>

        <article className="space-y-2">
          <p className="text-md">
            <span className="font-bold underline">Passenger</span>, I've always
            like this track, then I started to hear it differently. Whatever
            this may be, I'm along for the ride. I'm your passenger.
          </p>
          <iframe
            title="Passenger - Deftones"
            src="https://open.spotify.com/embed/track/7IoK6jZBxY7NMoQPoPXZCF?utm_source=generator&theme=0"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </article>

        <article className="space-y-2">
          <p className="text-md">
            <span className="font-bold underline">Be My Druidess</span>,
            wouldn't be right with out another Type O Negative track on here.
          </p>
          <iframe
            title="Be My Druidess - Type O Negative"
            src="https://open.spotify.com/embed/track/1ycz5DvATLtmn2pOU8u38C?utm_source=generator&theme=0"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </article>

        <article className="space-y-2">
          <p className="text-md">
            <span className="font-bold underline">I Wanna Be Yours</span>, you
            introduced me to Arctic Monkeys a different track from the same
            album. I found this track because of that and I dedicate it you.
          </p>
          <iframe
            title="I Wanna Be Yours - Arctic Monkeys"
            src="https://open.spotify.com/embed/track/5XeFesFbtLpXzIVDNQP22n?utm_source=generator&theme=0"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </article>
      </section>
      <hr className="my-3 mx-4" />

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
            // height="auto"
            src="https://www.youtube.com/embed/tu_2xfhsrz8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
        </article>
      </section>
    </main>
  );
}

export default App;
