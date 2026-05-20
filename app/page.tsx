"use client";

import { useState } from "react";

export default function WeddingPage() {
  const [musicPlaying, setMusicPlaying] = useState(false);

  const toggleMusic = () => {
    const music = document.getElementById("bgmusic") as HTMLAudioElement;

    if (music.paused) {
      music.play();
      setMusicPlaying(true);
    } else {
      music.pause();
      setMusicPlaying(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#2d0f1f] text-white overflow-hidden relative">

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

      {/* MUSIC */}
      <audio id="bgmusic" loop src="/song.mp3" />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-black/10 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="text-2xl font-serif text-[#f5d6df]">
            Nandu & Auriane
          </h1>

          <div className="hidden md:flex gap-8 text-[#d9c9cd]">

            <a href="#home" className="hover:text-[#b8c7a1] transition">
              Home
            </a>

            <a href="#family" className="hover:text-[#b8c7a1] transition">
              Family
            </a>

            <a href="#quotes" className="hover:text-[#b8c7a1] transition">
              Quotes
            </a>

            <a href="#location" className="hover:text-[#b8c7a1] transition">
              Location
            </a>

          </div>

        </div>

      </nav>

      {/* MUSIC BUTTON */}
      <button
        onClick={toggleMusic}
        className="fixed top-24 right-6 z-50 backdrop-blur-xl bg-white/10 border border-white/10 text-white px-7 py-4 rounded-full shadow-2xl hover:scale-110 transition duration-500"
      >
        {musicPlaying ? "❚❚ Pause Our Song" : "♫ Play Our Song"}
      </button>

      {/* HEARTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-pink-300 text-3xl animate-pulse">♥</div>
        <div className="absolute top-40 right-20 text-pink-200 text-2xl animate-bounce">♥</div>
        <div className="absolute bottom-20 left-20 text-pink-300 text-4xl animate-pulse">♥</div>
        <div className="absolute bottom-40 right-10 text-pink-200 text-2xl animate-bounce">♥</div>
      </div>

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative"
      >

        <p className="uppercase tracking-[6px] text-[#b8c7a1] text-sm mb-6">
          Wedding Celebration
        </p>

        <h1 className="text-6xl md:text-8xl font-serif text-[#f5d6df] leading-tight">
          Nandu <span className="text-[#b8c7a1]">&</span> Auriane
        </h1>

        {/* PHOTO */}
        <div className="relative mt-16 group">

          <div className="absolute inset-0 bg-[#b8c7a1]/20 blur-3xl rounded-[50px]"></div>

          <img
            src="/together.jpeg"
            alt="Nandu and Auriane"
            className="relative w-[320px] md:w-[430px] rounded-[40px] border border-white/10 shadow-2xl object-cover transition duration-700 group-hover:scale-105"
          />

        </div>

        <div className="w-40 h-[2px] bg-[#b8c7a1] my-8 rounded-full"></div>

        <p className="max-w-3xl text-xl md:text-3xl leading-relaxed text-[#f5d6df] italic">
          “From India to France, from two hearts to one forever.”
        </p>

        <p className="max-w-4xl mt-10 text-lg md:text-xl leading-10 text-[#e7d5d9]">
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
        <div className="mt-12 bg-white/10 backdrop-blur-xl border border-white/10 px-10 py-6 rounded-[30px] shadow-2xl">

          <p className="text-[#b8c7a1] uppercase tracking-[4px] text-sm mb-3">
            Wedding Day
          </p>

          <p className="text-2xl text-[#f5d6df]">
            01 August 2026 • France
          </p>

        </div>

      </section>

      {/* FAMILY */}
      <section
        id="family"
        className="py-24 px-6 text-center"
      >

        <h2 className="text-5xl font-serif text-[#f5d6df] mb-14">
          With Love From Our Families
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-[35px] shadow-2xl">

            <h3 className="text-3xl text-[#b8c7a1] mb-6">
              Clochard Family
            </h3>

            <div className="space-y-4 text-xl text-[#f5d6df]">
              <p>Isabelle Clochard</p>
              <p>Olivier Clochard</p>
              <p>Leila Clochard</p>
              <p>Nathanael Clochard</p>
            </div>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-[35px] shadow-2xl flex flex-col justify-center">

            <h3 className="text-3xl text-[#b8c7a1] mb-6">
              A New Beginning
            </h3>

            <p className="text-lg md:text-xl leading-9 text-[#f5d6df] italic">
              “Families are not only joined by blood,
              but also by love, acceptance and the hearts
              that welcome us home.”
            </p>

          </div>

        </div>

      </section>

      {/* QUOTES */}
      <section
        id="quotes"
        className="py-24 px-6 text-center"
      >

        <h2 className="text-5xl font-serif text-[#f5d6df] mb-16">
          Words From The Heart
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-[30px] shadow-2xl text-xl italic text-[#f5d6df]">
            “Love knows no gender, no borders, no distance —
            only hearts that choose each other.”
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-[30px] shadow-2xl text-xl italic text-[#f5d6df]">
            “Home is no longer a place.
            It is each other.”
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-[30px] shadow-2xl text-xl italic text-[#f5d6df]">
            “In every lifetime, I would still find you.”
          </div>

        </div>

      </section>

      {/* LOCATION */}
      <section
        id="location"
        className="py-24 px-6 text-center"
      >

        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl border border-white/10 p-12 rounded-[35px] shadow-2xl">

          <h2 className="text-5xl font-serif text-[#f5d6df] mb-8">
            Wedding Location
          </h2>

          <p className="text-xl text-[#e7d5d9] leading-10">
            La Bruffière, France
          </p>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=47.039755,-1.220984"
            target="_blank"
            className="inline-block mt-10 bg-[#b8c7a1] hover:bg-[#9cad84] text-[#2d0f1f] px-8 py-4 rounded-full transition duration-300 font-semibold shadow-lg"
          >
            Track Route To Wedding
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="py-20 text-center px-6">

        <h2 className="text-5xl font-serif mb-6 text-[#f5d6df]">
          Forever Begins Here
        </h2>

        <p className="text-lg text-[#d9c9cd]">
          Thank you for celebrating our love and future together.
        </p>

        <p className="mt-8 text-sm text-[#9f8f93]">
          Nandu & Auriane • 2026
        </p>

      </footer>

    </main>
  );
}