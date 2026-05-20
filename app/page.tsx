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

      {/* MUSIC */}
      <audio
        id="bgmusic"
        loop
        src="/song.mp3"
      />

      {/* MUSIC BUTTON */}
      <button
        onClick={toggleMusic}
        className="fixed top-8 right-6 z-50 backdrop-blur-xl bg-white/10 border border-white/10 text-white px-7 py-4 rounded-full shadow-2xl hover:scale-110 transition duration-500"
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
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

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

        <div className="mt-10 bg-white/10 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full shadow-xl">
          01 August 2026 • France
        </div>

      </section>

      {/* FAMILY */}
      <section className="py-24 px-6 text-center">

        <h2 className="text-5xl font-serif text-[#f5d6df] mb-12">
          Our Families
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-[30px]">
            <h3 className="text-3xl text-[#b8c7a1] mb-6">
              Auriane’s Family
            </h3>

            <p className="text-lg leading-10 text-[#f5d6df]">
              Isabelle Cochard<br />
              Olivier Cochard<br />
              Leila Cochard<br />
              Nathanael Cochard
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-[30px]">
            <h3 className="text-3xl text-[#b8c7a1] mb-6">
              Nandu’s Family
            </h3>

            <p className="text-lg leading-10 text-[#f5d6df]">
              With love, blessings,<br />
              and forever together.
            </p>
          </div>

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