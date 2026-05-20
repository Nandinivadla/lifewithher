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

    return () => clearInterval(timer);
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

  return (
    <main className="min-h-screen bg-[#2b0d17] text-white overflow-hidden relative">

      {/* STARS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      {/* FLOATING HEARTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse text-2xl opacity-40 text-[#d8e2c8]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          >
            ♥
          </div>
        ))}

      </div>

      {/* MUSIC */}
      <audio
        id="bgmusic"
        loop
        src="/song.mp3"
      />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-black/20 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="text-2xl font-serif text-[#f8dfe5]">
            Nandu & Auriane
          </h1>

          <div className="hidden md:flex gap-8 text-[#f1d6dd]">

            <a href="#home" className="hover:text-[#b7c9a8] transition">
              Home
            </a>

            <a href="#story" className="hover:text-[#b7c9a8] transition">
              Story
            </a>

            <a href="#family" className="hover:text-[#b7c9a8] transition">
              Family
            </a>

            <a href="#rsvp" className="hover:text-[#b7c9a8] transition">
              RSVP
            </a>

          </div>

        </div>

      </nav>

      {/* MUSIC BUTTON */}
      <button
        onClick={toggleMusic}
        className="fixed top-24 right-6 z-50 backdrop-blur-xl bg-[#3b1823]/70 border border-white/10 text-white px-7 py-4 rounded-full shadow-2xl hover:scale-110 transition duration-500"
      >
        {musicPlaying ? "❚❚ Pause Our Song" : "♫ Play Our Song"}
      </button>

      {/* HERO */}
      <section
        id="home"
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-36"
      >

        <p className="tracking-[0.5em] uppercase text-sm text-[#b7c9a8] mb-6">
          Wedding Celebration
        </p>

        <h1 className="text-6xl md:text-8xl font-serif text-[#f8dfe5] leading-tight">
          Nandu <span className="text-[#b7c9a8]">&</span> Auriane
        </h1>

        {/* PHOTO */}
        <div className="relative mt-16 group">

          <div className="absolute inset-0 bg-[#b7c9a8]/20 blur-3xl rounded-[50px]"></div>

          <img
            src="/together.jpeg"
            alt="Nandu and Auriane"
            className="relative w-[320px] md:w-[430px] rounded-[40px] border border-white/10 shadow-2xl object-cover transition duration-700 group-hover:scale-105"
          />

        </div>

        <div className="w-40 h-[3px] bg-[#b7c9a8] my-8 rounded-full"></div>

        <p className="max-w-3xl text-xl md:text-3xl leading-relaxed text-[#f8dfe5] italic">
          “From India to France, from two hearts to one forever.”
        </p>

        <p className="max-w-4xl mt-10 text-lg md:text-xl leading-10 text-[#f1d6dd]">
          With immense love and gratitude, we are so happy to celebrate
          the beginning of our forever together.
          <br />
          <br />
          I, Nandu, am deeply honored and emotional to join the beautiful
          Clochard family.
          <br />
          Supported by our friends and families, we step into this new chapter
          hand in hand, with love, trust, and endless happiness.
        </p>

        {/* DATE */}
        <div className="mt-12 bg-[#3b1823]/60 backdrop-blur-xl border border-white/10 px-10 py-6 rounded-[30px] shadow-2xl">

          <p className="text-[#b7c9a8] uppercase tracking-[4px] text-sm mb-3">
            Wedding Day
          </p>

          <p className="text-2xl text-[#f8dfe5]">
            01 August 2026 • La Bruffière, France
          </p>

        </div>

        {/* ROUTE BUTTON */}
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=47.039755,-1.220984"
          target="_blank"
          className="inline-block mt-8 bg-[#b7c9a8] hover:bg-[#9fb18f] text-[#2b0d17] px-8 py-4 rounded-full transition duration-300 font-semibold shadow-lg"
        >
          Track Route To Wedding
        </a>

      </section>

      {/* COUNTDOWN */}
      <section className="relative z-10 px-6 py-24">

        <h2 className="text-center text-5xl font-serif text-[#f8dfe5] mb-16">
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
              className="bg-[#3b1823]/60 backdrop-blur-xl rounded-3xl shadow-2xl p-8 text-center border border-white/10 hover:scale-105 transition duration-300"
            >

              <h3 className="text-5xl font-bold text-[#f8dfe5]">
                {item.value}
              </h3>

              <p className="mt-3 text-lg text-[#f1d6dd]">
                {item.label}
              </p>

            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section
        id="story"
        className="relative z-10 py-28 px-6"
      >

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-serif text-[#f8dfe5] mb-12">
            Our Story
          </h2>

          <p className="text-lg md:text-2xl leading-10 text-[#f1d6dd]">
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
      <section
        id="family"
        className="relative z-10 py-24 px-6"
      >

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-serif text-[#f8dfe5] mb-14">
            With Love From Our Families
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-[#3b1823]/60 backdrop-blur-xl rounded-[35px] p-10 shadow-2xl border border-white/10">

              <h3 className="text-3xl font-serif text-[#b7c9a8] mb-6">
                Clochard Family
              </h3>

              <div className="space-y-4 text-xl text-[#f8dfe5]">
                <p>Isabelle Clochard</p>
                <p>Olivier Clochard</p>
                <p>Leila Clochard</p>
                <p>Nathanael Clochard</p>
              </div>

            </div>

            <div className="bg-[#3b1823]/60 backdrop-blur-xl rounded-[35px] p-10 shadow-2xl border border-white/10 flex flex-col justify-center">

              <h3 className="text-3xl font-serif text-[#b7c9a8] mb-6">
                A Message To Our Friends & Family
              </h3>

              <p className="text-lg md:text-xl leading-9 text-[#f8dfe5] italic">
                “To every friend and every family member who stood beside us,
                encouraged us, loved us and supported our journey —
                thank you for helping us become the people we are today.
                <br /><br />
                Your love gave us strength,
                and today we begin our forever with hearts full of gratitude.”
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* RSVP */}
      <section
        id="rsvp"
        className="relative z-10 py-24 px-6"
      >

        <div className="max-w-3xl mx-auto bg-[#3b1823]/60 backdrop-blur-xl rounded-[35px] p-12 shadow-2xl border border-white/10">

          <h2 className="text-center text-5xl font-serif text-[#f8dfe5] mb-12">
            RSVP
          </h2>

          <form
            action="https://formspree.io/f/xbdbglqp"
            method="POST"
            className="space-y-6"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-5 rounded-2xl bg-[#2b0d17]/60 border border-white/10 text-white outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-5 rounded-2xl bg-[#2b0d17]/60 border border-white/10 text-white outline-none"
              required
            />

            <textarea
              name="message"
              placeholder="Leave a loving message for the brides..."
              className="w-full p-5 rounded-2xl bg-[#2b0d17]/60 border border-white/10 text-white outline-none h-40"
              required
            />

            <button className="w-full bg-[#b7c9a8] hover:bg-[#9fb18f] text-[#2b0d17] py-5 rounded-2xl text-lg font-semibold transition">
              Send Love
            </button>

          </form>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-20 text-center bg-black/20 text-white">

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