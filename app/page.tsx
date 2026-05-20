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

    if (!audio) return;

    if (musicPlaying) {
      audio.pause();
    } else {
      audio.volume = 0.7;
      audio.play();
    }

    setMusicPlaying(!musicPlaying);
  };

  return (
    <main className="min-h-screen bg-[#2b0d17] text-white overflow-hidden relative">

      {/* MUSIC */}
      <audio id="bgmusic" loop>
        <source src="/song.mp3" type="audio/mpeg" />
      </audio>

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
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#b7c9a8] animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 25}px`,
              opacity: 0.35,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-black/20 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="text-2xl font-serif text-[#f8dfe5]">
            Nandu & Auriane
          </h1>

          <button
            onClick={toggleMusic}
            className="bg-[#b7c9a8] hover:bg-[#9fb18f] text-[#2b0d17] px-6 py-3 rounded-full font-semibold transition duration-300 shadow-xl"
          >
            {musicPlaying ? "Pause Music" : "Play Music"}
          </button>

        </div>
      </nav>

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-40 pb-24">

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
            className="relative w-[330px] md:w-[470px] rounded-[40px] border border-white/10 shadow-[0_0_60px_rgba(255,255,255,0.1)] object-cover transition duration-700 group-hover:scale-105"
          />

        </div>

        <div className="w-40 h-[3px] bg-[#b7c9a8] my-10 rounded-full"></div>

        <p className="max-w-3xl text-xl md:text-3xl italic text-[#f8dfe5] leading-relaxed">
          “From India to France, from two hearts to one forever.”
        </p>

        <p className="max-w-4xl mt-10 text-lg md:text-xl leading-10 text-[#f1d6dd]">
          With immense love and gratitude, we are so happy to celebrate
          the beginning of our forever together.
          <br /><br />
          I, Nandu, am deeply honored and emotional to join the beautiful
          Clochard family.
          <br /><br />
          Supported by our friends and families, we step into this new chapter
          hand in hand, with love, trust and endless happiness.
        </p>

        {/* DATE */}
        <div className="mt-14 bg-[#3b1823]/60 backdrop-blur-xl border border-white/10 px-10 py-6 rounded-[30px] shadow-2xl">

          <p className="text-[#b7c9a8] uppercase tracking-[4px] text-sm mb-3">
            Wedding Day
          </p>

          <p className="text-2xl text-[#f8dfe5]">
            01 August 2026 • La Bruffière, France
          </p>

        </div>

        {/* ROUTE */}
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=47.039755,-1.220984"
          target="_blank"
          className="inline-block mt-8 bg-[#b7c9a8] hover:bg-[#9fb18f] text-[#2b0d17] px-8 py-4 rounded-full transition duration-300 font-semibold shadow-lg"
        >
          Track Route To Wedding
        </a>

      </section>

      {/* COUNTDOWN */}
      <section className="relative z-10 px-6 py-20">

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
              className="bg-[#3b1823]/60 backdrop-blur-xl rounded-3xl shadow-2xl p-8 text-center border border-white/10 hover:scale-105 transition"
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

      {/* FAMILY */}
      <section className="relative z-10 py-24 px-6">

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
                “To every friend and family member who supported our journey,
                thank you for being part of our story.
                <br /><br />
                Your love gave us strength,
                your presence gave us hope,
                and your kindness will forever stay in our hearts.”
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* RSVP */}
      <section className="relative z-10 py-24 px-6">

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
              required
              className="w-full p-5 rounded-2xl bg-[#2b0d17]/60 border border-white/10 text-white outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-5 rounded-2xl bg-[#2b0d17]/60 border border-white/10 text-white outline-none"
            />

            <textarea
              name="message"
              placeholder="Leave a loving message..."
              required
              className="w-full p-5 rounded-2xl bg-[#2b0d17]/60 border border-white/10 text-white outline-none h-40"
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
          Thank you for celebrating our love and future together.
        </p>

        <p className="mt-8 text-sm opacity-70">
          Nandu & Auriane • 2026
        </p>

      </footer>

    </main>
  );
}