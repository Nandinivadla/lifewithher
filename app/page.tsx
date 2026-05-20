"use client";

import { useEffect, useState } from "react";

export default function WeddingPage() {
  const weddingDate = new Date("2026-08-01T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [showIntro, setShowIntro] = useState(true);
  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    document.title = "Nandu & Auriane";

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 4000);

    return () => {
      clearInterval(timer);
      clearTimeout(introTimer);
    };
  }, []);

  const toggleMusic = () => {
    const audio = document.getElementById(
      "bgmusic"
    ) as HTMLAudioElement;

    if (musicPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setMusicPlaying(!musicPlaying);
  };

  if (showIntro) {
    return (
      <main className="h-screen bg-[#fffaf5] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="animate-pulse">
          <h1 className="text-6xl md:text-8xl font-serif text-[#7a2f43] mb-8">
            Nandu ♥ Auriane
          </h1>

          <p className="text-2xl text-[#93a267] italic">
            Forever Begins Here
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#5f3b46] overflow-hidden relative">

      {/* MUSIC */}
      <audio
        id="bgmusic"
        loop
        src="https://www.bensound.com/bensound-music/bensound-love.mp3"
      />

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-[#7a2f43]/20 blur-[150px] rounded-full top-[-100px] left-[-100px]" />

      <div className="absolute w-[450px] h-[450px] bg-[#a8b58a]/30 blur-[140px] rounded-full bottom-0 right-0" />

      {/* FLOATING FLOWERS + HEARTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce text-3xl opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          >
            {i % 2 === 0 ? "🌸" : "♥"}
          </div>
        ))}

      </div>

      {/* MUSIC BUTTON */}
      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 bg-[#7a2f43] text-white px-6 py-3 rounded-full shadow-xl hover:scale-105 transition"
      >
        {musicPlaying ? "Pause Music" : "Play Music"}
      </button>

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32">

        <p className="tracking-[0.5em] uppercase text-sm text-[#7a2f43] mb-6">
          Wedding Celebration
        </p>

        <h1 className="text-6xl md:text-8xl font-serif text-[#7a2f43] leading-tight drop-shadow-xl">
          Nandu <span className="text-[#93a267]">&</span> Auriane
        </h1>

        <div className="w-40 h-[3px] bg-[#93a267] my-8 rounded-full"></div>

        <p className="max-w-3xl text-xl md:text-3xl leading-relaxed text-[#7a2f43] italic">
          “From India to France, from two hearts to one forever.”
        </p>

        <p className="max-w-4xl mt-10 text-lg md:text-xl leading-10 text-[#6b4b56]">
          With immense love and gratitude, we are so happy to celebrate the
          beginning of our forever together.
          <br />
          <br />
          I, Nandu, am deeply honored and emotional to join the beautiful
          Clochard family.
          <br />
          Supported by our friends and families, we step into this new chapter
          hand in hand, with love, trust, and endless happiness.
        </p>

        <div className="mt-12 bg-white/70 backdrop-blur-xl shadow-2xl rounded-full px-10 py-5 border border-[#e6d7d7]">
          <p className="text-lg md:text-xl font-medium text-[#6b4b56]">
            01 August 2026 • La Bruffière, France
          </p>
        </div>

        {/* MAP BUTTON */}
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=47.039755,-1.220984"
          target="_blank"
          className="inline-block mt-8 bg-[#93a267] hover:bg-[#7f9156] text-white px-8 py-4 rounded-full transition duration-300 font-semibold shadow-lg"
        >
          Track Route To Wedding
        </a>

      </section>

      {/* COUNTDOWN */}
      <section className="relative z-10 px-6 py-20">

        <h2 className="text-center text-5xl font-serif text-[#7a2f43] mb-16">
          Countdown To Forever
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">

          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, index) => (

            <div
              key={index}
              className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 text-center border border-[#f1e7e7] hover:scale-105 transition duration-300"
            >

              <h3 className="text-5xl font-bold text-[#7a2f43]">
                {item.value}
              </h3>

              <p className="mt-3 text-lg text-[#6b4b56]">
                {item.label}
              </p>

            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="relative z-10 py-28 px-6 bg-[#fff5f6]">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-serif text-[#7a2f43] mb-12">
            Our Story
          </h2>

          <p className="text-lg md:text-2xl leading-10 text-[#6b4b56]">
            Love brought together two souls from different worlds.
            <br />
            One heart from India, one heart from France.
            <br />
            Different cultures, different journeys, but the same feeling:
            unconditional love.
            <br />
            <br />
            Through every smile, every challenge, every dream and every moment,
            we found home in each other.
            <br />
            <br />
            Today, surrounded by the people we cherish the most, we celebrate
            not only our marriage, but the beautiful life we are creating
            together forever.
          </p>

        </div>
      </section>

      {/* FAMILY */}
      <section className="relative z-10 py-24 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-serif text-[#7a2f43] mb-14">
            With Love From Our Families
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white/70 backdrop-blur-xl rounded-[35px] p-10 shadow-2xl border border-[#f1e7e7]">

              <h3 className="text-3xl font-serif text-[#93a267] mb-6">
                Clochard Family
              </h3>

              <div className="space-y-4 text-xl text-[#6b4b56]">
                <p>Isabelle Clochard</p>
                <p>Olivier Clochard</p>
                <p>Leila Clochard</p>
                <p>Nathanael Clochard</p>
              </div>

            </div>

            <div className="bg-white/70 backdrop-blur-xl rounded-[35px] p-10 shadow-2xl border border-[#f1e7e7] flex flex-col justify-center">

              <h3 className="text-3xl font-serif text-[#93a267] mb-6">
                A New Beginning
              </h3>

              <p className="text-lg md:text-xl leading-9 text-[#6b4b56] italic">
                “Families are not only joined by blood,
                but also by love, acceptance and the hearts
                that welcome us home.”
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* RSVP */}
      <section className="relative z-10 py-24 px-6 bg-[#fff5f6]">

        <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-xl rounded-[35px] p-12 shadow-2xl border border-[#f1e7e7]">

          <h2 className="text-center text-5xl font-serif text-[#7a2f43] mb-12">
            RSVP
          </h2>

          <div className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-5 rounded-2xl border border-[#e6d7d7] outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-5 rounded-2xl border border-[#e6d7d7] outline-none"
            />

            <textarea
              placeholder="Leave a message for the brides..."
              className="w-full p-5 rounded-2xl border border-[#e6d7d7] outline-none h-40"
            />

            <button className="w-full bg-[#7a2f43] hover:bg-[#5d2332] text-white py-5 rounded-2xl text-lg font-semibold transition">
              Send Love
            </button>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-20 text-center bg-[#7a2f43] text-white">

        <h2 className="text-5xl font-serif mb-6">
          Forever Begins Here
        </h2>

        <p className="text-lg opacity-90">
          Thank you for celebrating our love and our future together.
        </p>

        <p className="mt-8 text-sm opacity-70">
          Nandu & Auriane • 2026
        </p>

      </footer>
    </main>
  );
}